<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'google' => [
        'client_id' => '436676563344-h8crdmr92i05h0kmp02rqnnurdemsli3.apps.googleusercontent.com',
        'client_secret' => 'yYUd9TehagSGbmls4qllFqw6',
        'redirect' => 'https://shop.test',
    ],

    'facebook' => [
        'client_id' => '109516576592353',
        'client_secret' => 'd2f420e19af147bce71215e8c64875ce',
        'redirect' => 'https://shop.test',
    ],

    'ses' => [
        'key' => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

    'stripe' => [
        'model' => App\User::class,
        'key' => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],

];
