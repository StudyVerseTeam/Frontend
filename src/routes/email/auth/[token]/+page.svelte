<script lang="ts">
  //import {user} from '../../store'
  export let form: { error: boolean , msg: string};
  export let data;
  import {page} from '$app/stores'
  let token = $page.params.token
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

        //you can use particlesContainer to call all the Container class
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
  <title>Verification page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">

<link rel="stylesheet" href="/css/login.css">


</svelte:head>
{#if form?.error}
<main>
  <div class="container">
    <div class="text-container">
      <h1>SERVER ERROR</h1>
      <p class="home-text">SERVER ERROR</p> <button class="home-btn" on:click={() => {location.href = "/"}}>Home</button>
      <h3>Contact us at <a href="mailto:studyverseteam@gmail.com">studyverseteam@gmail.com</a></h3>
    </div>
  </div>
</main>
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
<body>
<!-- partial:index.partial.html -->
<body id="particles-js"></body>
    <svelte:component
    this="{ParticlesComponent}" id="tsparticles"
    options="{particlesConfig}"
    on:particlesLoaded="{onParticlesLoaded}"
    particlesInit="{particlesInit}"
/>

<div class="animated bounceInDown">
  <div class="container">
    <span class="error animated tada" id="msg"></span>
    <form name="form1" class="box" method="POST" onclick="return checkStuff()">
     <a href="/" style="text-decoration: none;">
       <h4>Study<span>Verse</span></h4>
     </a>
      <h5>Sign up</h5>
      <input type="name" name="name" placeholder="Name" autocomplete="off" id="name" >
        <input type="password" name="password" placeholder="Password" id="pwd" autocomplete="off">
        <input type="text" name="email" placeholder="Email" id="email" readonly bind:value={data.email}>
        <i class="typcn typcn-eye" id="eye"></i>
     
        <label>
          <input type="checkbox">
          <span></span>
          <small class="rmb">Remember me</small>
        </label>
        <input type="submit" value="Sign up" class="btn1">
      </form>
  </div> 
  </div> 
<!-- partial -->
<script src="https://cldup.com/S6Ptkwu_qA.js"></script>

<script  src="/js/input.js"></script>

</body>
{/if} 
