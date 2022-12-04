<svlete:head>
  <link rel="stylesheet" href="/css/main.css">
</svlete:head>
<script lang="ts">
  export let data:any;
  let index = 0
  let visible = false
  let cardsElem 
</script>
<svelte:window on:keydown={(e) => {
  if (e.key == "ArrowRight") 
  {
    index ++
    if (index > data.set.cards.length - 1) {
      index -= 2 
    } 
    } else if (e.key == "ArrowLeft") {
      index --
    if (index < 0) {
      index += 2 
    } 

    }
    }}></svelte:window>
    <main>
      <div class="main-container">
  <div class="container">
    <div class="half">
    {#if typeof data.set.cards !== "undefined"}
      <h2>{data.set.name}</h2>
      <div class="cards">
        <div bind:this={cardsElem} class="card" on:click={() => {
          visible = !visible
          }} >
          {#if visible == false}
            <h6>{data.set.cards.at(index).term}</h6>
          {:else}
            <h6>{data.set.cards[index].definition}</h6>
          {/if}
          <div class="arrow-container">
            <button class="arrow-btn" on:click={() => {
              visible = true
              visible = visible
              index ++
              if (index > data.set.cards.length - 1) {
              index -= 2 
              } 
              }}>
            <svg class = "arrow left" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 256 512"><!--! font awesome pro 6.2.1 by @fontawesome - https://fontawesome.com license - https://fontawesome.com/license (commercial license) copyright 2022 fonticons, inc. --><path fill="#ffffff" d="m246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
            </button>
            <button class="arrow-btn" on:click={() => {
              visible = true
              visible = visible
              index --
              if (index < 0) {
                    index += 2 
                    } 

              }}>
            <svg class = "arrow" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 256 512"><!--! font awesome pro 6.2.1 by @fontawesome - https://fontawesome.com license - https://fontawesome.com/license (commercial license) copyright 2022 fonticons, inc. --><path fill="#ffffff" d="m246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
            </button>
          </div>
        </div>        
      </div>
    {/if}
    <button class="back-btn" style="" on:click={() => {location.href= '/studysets'}}>Back</button>
    </div>
  </div>
  <div class="other-half" >
    <nav class="main-nav">
      <ul>
        <li>
          <a href="/studysets">All Studysets</a>
        </li>
        <li>
          <a href={"/studysets/edit/"+data.set.id}>Edit this set</a>
        </li>
        
        <li>
          <a href="/studysets/create">Create Studyset</a>
        </li>

        <li>
          <a href="/todos">See todos</a>
        </li>

        <li>
          <a href="/calendar">Calendar</a>
        </li>

        <li>
          <a href="/membership">Upgrade Now!!</a>
        </li>
      </ul>
    </nav>
  </div>


      </div>

</main>
<style>
  .back-btn {
    margin-top: 2em;
    box-shadow: none;
    border-radius: 15px;
    background-color: rgb(30,34,54,1);
  }
  .other-half {
    position: fixed;
    right: 0;
    padding: 2em;
    background-color: rgb(30,34,54,1);
    width: 20%;
    height: 100vh;
  }
  .other-half ul {
    list-style-type: none;
  }
  .other-half a {
    border-bottom: none;
  }
  .other-half a:hover {
    color: white !important;
  }
  .other-half li {
    margin-bottom: 3em;
  }
  .other-half li:hover {
    background-color: rgba(60, 67, 105, 0.8);
    border-radius: 10px;
  }
  .main-container {
    display: flex;
  }
  .container {
    width: 80%;
    padding: 3em 8em;
  }
  .arrow-btn {
    display: grid;
    place-items: center;
    box-shadow: none;
    border: 3px solid rgb(45, 52, 82, 0.8);
    border-radius: 15px;
  }
  .arrow-btn:hover {
    border: 3px solid rgb(30, 34, 54, 1);
  }
  .card {
    padding: 2em;
    background-color: rgba(90, 104, 161, 0.8);
    width: 80%;
    border-radius: 25px;
    height: 600px;
    display: flex;
   transition: transform 0.6s;
   transform-style: preserve-3d; 
     -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;


	position: relative;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .card:hover {
    cursor: pointer;
  }
  .card h6 {
    font-size: 2em;
    animation:  slide-right 2s forwards;
    transform:translateX(-30%);
  }
  @keyframes slide-right {
  to {
    transform:translateX(0);
  }
}
  .arrow-container {
    display: flex;
    width: 80%;
    justify-content: space-between;
  }
  .arrow {
    height: 40px;
  }
  .left {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
  @media only screen and (max-width: 1024px) {
    .card {
      height: 500px;
    }
    .container {
      display: block;
      width: 100%;
    }
    .other-half {
      display: none;
    }
  }
  @media only screen and (max-width: 992px) {
    .card {
      width: 100%;
    }
  }
  @media only screen and (max-width: 821px ) {
    .container {
      padding: 1em 5em;
    }
  }
  @media only screen and (max-width: 598px) {
    .container{
      padding: 0.5em 1em;
    }
  }
</style>

