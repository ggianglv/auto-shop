<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class ChangePasswordController extends Controller
{
    public function change(Request $request)
    {
        $this->validate($request, [
            'password' => 'required|same:confirm',
        ]);
        $oldPassword = $request->get('old');
        $password = $request->get('password');
        $user = $request->user();
        if ($user->password && !Hash::check($oldPassword, $user->password)) {
            return $this->bad('Mật khẩu cũ không đúng');
        }
        $user->password = bcrypt($password);
        $user->save();

        return $this->success();
    }
}
