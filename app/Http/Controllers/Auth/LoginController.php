<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use App\UserSocial;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Laravel\Socialite\Facades\Socialite;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if (Auth::attempt($request->only(['email', 'password']))) {
            $user = $this->guard()->user();
            $user->token = $user->createToken('Token')->accessToken;
            return $user;
        }

        return $this->bad('Tên đăng nhập hoặc mật khẩu không đúng');
    }

    public function socialLogin(Request $request)
    {
        $this->validate($request, [
            'access_token' => 'required',
            'provider' => [
                'required',
                Rule::in('facebook', 'google')
            ]
        ]);
        $token = $request->get('access_token');
        if ($request->get('provider') === 'facebook') {
            $socialUser = $this->getFbUser($token);
        } else {
            $socialUser = $this->getGoogleUser($token);
        }
        $user = User::firstOrCreate([
            'email' => $socialUser['email'],
        ]);
        UserSocial::firstOrCreate([
            'social_id' => $socialUser['social_id'],
            'provider' => $request->get('provider'),
        ], ['user_id' => $user->id]);
        $user->token = $user->createToken('Token')->accessToken;

        return $user;
    }

    private function getFbUser($token)
    {
        $requestedUser = Socialite::driver('facebook')->userFromToken($token);

        return [
            'email' => $requestedUser->getEmail(),
            'social_id' => $requestedUser->getId(),
            'provider' => 'facebook',
        ];
    }

    private function getGoogleUser($token)
    {
        $client = new \GuzzleHttp\Client();
        $res = $client->request('GET', 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' . $token);
        $requestedUser = json_decode($res->getBody(), true);
        return [
            'email' => $requestedUser['email'],
            'social_id' => $requestedUser['sub'],
            'provider' => 'facebook',
        ];
    }
}
