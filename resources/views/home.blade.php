<!DOCTYPE html>
<html lang="en" class="h-100">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <meta name="google-signin-client_id" content="436676563344-h8crdmr92i05h0kmp02rqnnurdemsli3.apps.googleusercontent.com">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
          integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">

    <title>React App</title>
</head>
<body class="h-100">
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '109516576592353',
      cookie     : true,
      xfbml      : true,
      version    : 'v3.0'
    });

    FB.AppEvents.logPageView();

  };

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
</script>
<noscript>
    You need to enable JavaScript to run this app.
</noscript>
<div id="root" class="h-100"></div>
<!--
  This HTML file is a template.
  If you open it directly in the browser, you will see an empty page.

  You can add webfonts, meta tags, or analytics to this file.
  The build step will place the bundled scripts into the <body> tag.

  To begin the development, run `npm start` or `yarn start`.
  To create a production bundle, use `npm run build` or `yarn build`.
-->
<script src="https://apis.google.com/js/platform.js"></script>
<script src="/js/index.js"></script>
</body>
</html>
