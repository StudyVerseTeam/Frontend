<script lang="ts">
  import "$lib/css/viewSet.css"
  export let data;
  let name = data.set.name;
  let setId = 1
  let id = 1
  if (typeof window !== "undefined") {
    if (localStorage.getItem("studyset-id") !== null ) {
      setId = JSON.parse(localStorage.getItem("studyset-id")!)
    } else {
      localStorage.setItem("studyset-id", JSON.stringify(setId))
    }
  }
  if (typeof data.set.cards !== "undefined") {
   id = Math.max(...data.set.cards.map(o => o.id)) + 1
  } 
</script>
<main>
  <div class="container">
    <h1>Edit</h1>
    <form class="form" action="">
      <input type="text" placeholder="Title" bind:value={name} required>
      <div id="error" style="background-color: rgb(117, 65, 76); border-radius: 15px; padding: 1em; margin-top: 2em; margin-bottom: 2em; display: none;">
          PLEASE HAVE A TITLE, AND AT LEAST ONE CARD. MAKE SURE ALL CARDS HAVE A TERM AND A DEFINITION.
        </div>
      <div class="cards">
      {#if typeof data.set.cards !== "undefined"}
        {#each data.set.cards as card} 
          <div class="card">
            <header style="display: flex;">
              <button type="button" class="btn" on:click={
                                    () => {
                        let index = data.set.cards.findIndex(object => {
                          return object.id === card.id;
                          });
                          data.set.cards.splice(index, 1)
                        data.set.cards = data.set.cards
                      }
              }>Delete</button>
            </header>
            <div style="display: flex; margin-bottom: 1em;">
              <input style="margin-right: 2em" type="text" bind:value={card.term} placeholder="Term">
              <input type="text" bind:value={card.definition} placeholder="Definition">
            </div>
            <div style="display:flex; justify-content: space-between;">
              <h5 style="color: lightgray">Term</h5>
              <h5 style="color: lightgray">Definition</h5>
            </div>
          </div>
        {/each}
      {/if}
      </div>

      <div class="card" style="display: flex; justify-content: center; align-items: center;">
        <button class="btn" type="button" style="border-bottom: 0.5rem solid rgb(65, 75, 117)" on:click = {() => {
          data.set.cards.push({
            term: "",
            definition: "",
            id: id++
            }) 
            data.set.cards = data.set.cards
        }}>+ Add</button>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <button class="btn" type="button" style="background-color: rgb(65, 75, 117); border-radius: 20px;" on:click={() => {location.href = "/studysets"}}>Back</button>
      <button class="btn" type="button" on:click={() => {
        let error = false
        if (name.trim().length == 0 || data.set.cards.length < 2) {
           document.getElementById('error').style.display = 'block'
           document.getElementById('error')?.scrollIntoView()
           error = true
        } else {
        for (let i = 0; i < data.set.cards.length; i ++) {
          if (data.set.cards.find(e => e.term.trim() === '' || e.definition.trim() == '')) {
            document.getElementById('error').style.display = 'block'
            document.getElementById('error')?.scrollIntoView()
            error = true
            break
          } 
         }
         }
         if (!error) {
         localStorage.setItem('studyset-id', JSON.stringify(setId))
          const inputData = {
            name,
            id: setId,
            cards: data.set.cards
          }
          let sets = data.sets
          const indexOfObject = data.set.cards.findIndex(object => {
            return object.id === data.sets.id;
            });
            sets.splice(indexOfObject, 1)
          sets.push(inputData)
          localStorage.setItem('sets', JSON.stringify(sets))
          location.href = '/studysets'
         }
      }}
        style="background-color: rgb(81, 94, 145); border-radius: 20px;">Finish</button>

      </div>
          </form>
  </div>
</main>
<style>
  .btn {
    box-shadow: none;
  }
  .container {
    padding: 0.5em 14em;
    width: 100%;
  }
  .card {
    margin-bottom: 1em;
    border-radius: 15px;
    background-color: rgb(43, 50, 79);
    padding: 1em;
  }
  .cards {
    margin-top: 3em;
    margin-bottom: 3em;
  }
  input {
    background-color: rgb(43, 50, 79);
    opacity: 1;
  }
  input:hover, input:active, input:focus {
    box-shadow: none;
  }
  input {
    border-bottom: 2px solid white
  }

  @media only screen and (max-width: 1712px) {
    .container {
      padding: 3em 10em;
    }
    .form {
      height: 100%;
    }
  }
  @media only screen and (max-width: 1400px) {
    .container {
      padding: 5em 7em;
    }
  }
  @media only screen and (max-width: 821px ) {
    .container {
      padding: 5em 5em;
    }
  }
  @media only screen and (max-width: 598px) {
    .container{
      padding: 1em 5em;
    }
  }
</style>
