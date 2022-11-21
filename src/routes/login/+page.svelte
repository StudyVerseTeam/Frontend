<script lang="ts">
    async function login(e: { target: HTMLFormElement | undefined; }) {
      const formData = new FormData(e.target)
      const inputs = {}
      for (const field of formData) {
          const [key, val] = field;
          inputs[key] = val
      }
      console.log(inputs)
      const res = await fetch(`http://localhost:8001/api/logindummy?email=${inputs.email}&password=${inputs.password}`)
      const data = await res.json()
      console.log("data", data)
    }
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
        <form name="form1" class="box" on:submit|preventDefault={login}>
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
    <script src="/js/icon.js" defer></script>
    <script src="/js/login.js" defer></script>
  </main>

  