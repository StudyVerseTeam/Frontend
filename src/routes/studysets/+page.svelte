<svelte:head>
  <link rel="stylesheet" href="/css/main.css">
</svelte:head>
<script lang="ts">
  let id = 0
  let sets = [
    {
      name: "My Study Set",
      id: id++,
      cards : [{term: 'Who is the best', definition: 'Studyverse!!'}, {term: "Who is the worst", definition:"Quizziz!!!"}]
    },
  ]
  if (typeof window !== "undefined") {
    if (localStorage.getItem("sets") ) {
      sets = JSON.parse(localStorage.getItem("sets")!)
      sets = sets
    }
    else localStorage.setItem("sets", JSON.stringify(sets))
  }
</script>
<main>
  <div class="container">
    <header class="main">
      <h1>Your study sets</h1>
    </header>
    <div class="sets" >
      {#each sets as set}
        <div class="set">
        <div class="top-g"> 
          <h6>{set.name}</h6>
        </div>
        <p>{set.cards.length} {set.cards.length == 1 ? "term" : "terms"}</p>
        </div>
      {/each}
    </div>
    <form>
  </div>
</main>
<style>
  .set h6 {
    font-size: 0.8em;
  }
  .sets{
    width: 100%;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr;
  }
  .set{
    background: rgba(23, 27, 43, 0.5);
    padding: 0.7em;
    width: 50%;
    padding-bottom: 5px;
    border-radius: 15px;
    margin-bottom: 1em;
  }
  header.main {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 70%;
    border-bottom: 0.5px solid rgb(23, 27, 43);
    margin-bottom: 1.2em;
  }
  header.main h1 {
    margin: 0
  }
  @media only screen and (min-width: 729px) {
    .set h6 {
      font-size: 1em;
    }
  }
  @media only screen and (min-width: 1280px) {
    .set h6 {
      font-size: 0.9em;
    }
  }
  @media only screen and (min-width: 1680px) {
    .set h6 {
      font-size: 0.8em;
    }
  }
</style>
