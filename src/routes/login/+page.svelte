<script lang="ts">
  import {user} from '../../store'
</script>
  <svelte:head>
    <meta charset="UTF-8" />
    <title>Login page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
    />
    <link rel="stylesheet" type="text/css" href="/css/login.css" />
  </svelte:head>
  <main>
    <!-- partial:index.partial.html -->
    <body id="particles-js" />
    <div class="animated bounceInDown">
      <div class="container">
        <span class="error animated tada" id="msg" />
        <form name="form1" class="box" method="POST">
          <a href="/" style="text-decoration: none;">
            <h4>Study<span>Verse</span></h4>
          </a>
          <h5>Sign in to your account.</h5>
          <input
            type="text"
            name="email"
            placeholder="Email"
            id="email"
            autocomplete="off"
          />
          <i class="typcn typcn-eye" id="eye" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="pwd"
            autocomplete="off"
          />
          <label>
            <input type="checkbox" />
            <span />
            <small class="rmb">Remember me</small>
          </label>
          <input type="submit" id="submitBtn" value="Sign in" class="btn1" />
        </form>
        <a href="/signup" class="dnthave">Don’t have an account? Sign up</a>
        <a href="#" class="forgetpass">Forgot Password?</a>
      </div>
    </div>
    <!-- partial -->
    <script src="https://cldup.com/S6Ptkwu_qA.js"></script><script
      src="js/input.js"
    ></script>
  </main>

  
