<script lang="ts">
  export let form: {error: boolean, msg: any, exists: boolean}
  //import {user} from '../../store'
  import {onMount} from "svelte"
    import { loadFull } from "tsparticles";
          let ParticlesComponent;
    const particlesConfig = {
        particles: {
            color: {
                value: "#fff",
            },
            links: {
                enable: true,
                distance: 150,
                color: "#fff",
                opacity: 0.1,
                width: 2
            },
            opacity: {
              value: 0.1,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            shape :{
              type: "circle",
              stroke: {
                width: 0,
                color: "#000"
              },
              polygon: {
                nb_sides: 5
              },
              image : {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            size: {
              value: 6,
              random: false,
              anim: {
                enable: false,
                speed: 1, 
                opacity_min: 0.1,
                sync: false
              }
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: "top",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract : {
                  enable: false, 
                  rotateX: 600,
                  rotateY: 1200
                }
            },
        },
};


    onMount(async () => {
        const module = await import("svelte-particles");

        ParticlesComponent = module.default;
    });
      let onParticlesLoaded = event => {
        const particlesContainer = event.detail.particles;

        // you can use particlesContainer to call all the Container class
        // (from the core library) methods like play, pause, refresh, start, stop
    };

    let particlesInit = async engine => {
        // you can use main to customize the tsParticles instance adding presets or custom shapes
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    };
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
    {#if form?.error}
      <div class="container">
    <div class="text-container">
      <h1>SERVER ERROR</h1>
      <p class="home-text">SERVER ERROR: {form?.msg}</p>
      <button class="home-btn" on:click={() => {location.href = "/"}}>Home</button>
      <h3>Contact us at <a href="mailto:studyverseteam@gmail.com">studyverseteam@gmail.com</a></h3>
    </div>
  </div>
<style>
  
  .text-container {
    color: white;
    width:80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .container {
    background-size: cover;
    margin-top: 5em;
    display:flex;
    justify-content: center;
  } 
  .home-text {
    font-size: 1.3em;
  }
</style>

    {:else}
    <!-- partial:index.partial.html -->
    <body id="particles-js">
      <svelte:component
    this="{ParticlesComponent}"
    id="tsparticles"
    options="{particlesConfig}"
    on:particlesLoaded="{onParticlesLoaded}"
    particlesInit="{particlesInit}"
/>
      <div class="animated bounceInDown">
        {#if form?.exists} 
      <div class="container">
    <div class="text-container">
      <h1>You have logged in</h1>
      <p class="home-text">Welcome back to studyverse</p>
        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 52 52">
          <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
          <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
    </div>
  </div>
<style>
  
  .checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  margin: 10% auto;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #7ac142;
  }
}
  .text-container {
    color: white;
    width:80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .container {
    background-size: cover;
    margin-top: 5em;
    display:flex;
    height: 300px;
    justify-content: center;
  } 
  .home-text {
    font-size: 1.3em;
  }
</style>
        {:else}
          <div class="container">
            <span class="error animated tada" class:displayed="{form?.exists == false}"id="msg" >
              {#if form?.exists == false}
                Email or password is incorrect
              {/if}
            </span> 
              <span class="error animated tada" id="msg" />
        <form name="form1" class="box" method="POST" onsubmit="return checkStuff()">
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
          /> <i class="typcn typcn-eye" id="eye" /> <input
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
<style>
  .displayed {
    display: block;
  }
</style>
        {/if}
      </div>
 <script 
      src="/js/input.js"
      ></script>
   </body>
    <!-- partial -->
<script src="https://cldup.com/S6Ptkwu_qA.js"></script>

    {/if}
  </main>

  
