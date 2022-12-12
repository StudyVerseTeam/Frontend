<script lang="ts">
  import "$lib/css/seeAllSets.css"
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
    </div>
  </div>
</main>
