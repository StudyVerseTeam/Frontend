<svelte:head>
  <title>Page Not Found</title>
</svelte:head>
<script>
  import "../../static/css/main.css"
</script>
<main>
  <div class="container">
    <div class="text-container">
      <h1>Lost in your adventure?</h1>
      <p class="home-text">Unfortunately, we cant find the page you entered. Try retyping the url address or going to the home page</p>
      <button class="home-btn" on:click={() => {location.href = "/"}}>Home</button>
    </div>
  </div>
</main>
<style>
  
  .text-container {
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
