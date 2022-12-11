<script lang="ts">
  //import {user} from '../../store'
  export let form: { email: string};
  import "$lib/css/login.css"
  import {onMount} from "svelte"
    import { loadFull } from "tsparticles";
    let ParticlesComponent;
    const particlesConfig = {
        particles: {
            color: {
                value: "#fff",
            }, links: {
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
  <meta charset="UTF-8">
  <title>Sign up</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">

</svelte:head>
<!-- partial:index.partial.html -->
<body id="particles-js"></body>
    <svelte:component
    this="{ParticlesComponent}" id="tsparticles"
    options="{particlesConfig}"
    on:particlesLoaded="{onParticlesLoaded}"
    particlesInit="{particlesInit}"
/>
<body>
<div class="animated bounceInDown">
  <div class="container">
    {#if form?.email}
      <div style="padding: 2em;">
        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
          <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
      <h3 style="color:white;"> We sent an email to you! </h3>
      <p style="color:white;"> We sent an email to <strong>{form?.email}</strong>, now all you have to do is verify your email.</p>
      <p style="color:white;"> Check your inbox for an email with a link to verify, remember to check your spam folder!</p>
    </div>
    {:else}
    <form name="form1" class="box" method="POST" onclick="return checkStuff()">
     <a href="/" style="text-decoration: none;">
       <h4>Study<span>Verse</span></h4>
     </a>
      <input class="email" type="text" name="email" placeholder="Email" autocomplete="off">
      <span class="error animated tada" id="msg"></span>
        <input type="submit" value="Next" class="btn1" >
      </form>
        <a href="/login" class="dnthave">Already have an account? Sign in.</a>
    {/if}
  </div> 
  </div> 
<!-- partial -->
<script src="https://cldup.com/S6Ptkwu_qA.js"></script>

<script  src="$lib/js/input.js"></script>
</body>
<style>
  .btn1 {
    top: 250px
  }
  .box {
    display:flex;
    flex-direction: column;
    align-items: center;
  }
  .container {
    height: 350px;
  }
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
</style>
