<script lang="ts">
  import "../../../static/css/main.css"
  let id = 0
  let sets = []
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
          <div class="top-g" style="display:flex; justify-content: space-between"> 
          <a href={'/studysets/view/' + set.id}>{set.name}</a>
          <button style="box-shadow: none; font-size: 0.6em;" on:click={() => {
            const indexOfObject = sets.findIndex(object => {
              return object.id === set.id;
            });
            sets.splice(indexOfObject, 1)
            sets = sets
            localStorage.setItem("sets", JSON.stringify(sets))
          }}>Delete</button>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <p>{set.cards.length} {set.cards.length == 1 ? "term" : "terms"}</p>
            <button style="box-shadow: none; font-size: 0.6em;" on:click={() => {location.href = '/studysets/edit/' + set.id}}>Edit</button>
          </div>
        </div>
      {/each}
      <button style=";box-shadow: none; border-radius: 15px; background-color: rgba(23, 27, 43, 0.5);" on:click={() => {
        location.href = '/studysets/create'
      }}>Create</button>
    </div>
  </div>
</main>
<style>
  .set a{
    font-size: 1em;
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
  @media only screen and (max-width: 1700px) {
    .set {
      width: 80%;
    }
  }
</style>
