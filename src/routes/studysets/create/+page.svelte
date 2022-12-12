<svelte:head>
</svelte:head>
<script lang="ts">
  import Trash from "phosphor-svelte/lib/Trash";
  import "$lib/css/createSet.css" 
  export let data;
  let name = "";
  let id = 1
  let setId = 1
  if (typeof window !== "undefined") {
    if (localStorage.getItem("studyset-id") !== null ) {
      setId = JSON.parse(localStorage.getItem("studyset-id")!)
    } else {
      localStorage.setItem("studyset-id", JSON.stringify(setId))
    }
  }
  let cards = [
    {
      term: "",
      definition: "",
      id: id++
    }
  ]
</script>
<main>
  <div class="container">
    <h1>Create</h1>
    <form class="form" action="">
      <input type="text" placeholder="Title" bind:value={name} required>
      <div id="error" >
          PLEASE HAVE A TITLE, AND AT LEAST TWO CARDS. MAKE SURE ALL CARDS HAVE A TERM AND A DEFINITION.
        </div>
      <div class="cards">
        {#each cards as card} 
          <div class="card">
            <header class="top-g">
              <p>{cards.indexOf(card) + 1 }</p>
              <button class="deletebtn soft-fg" type="button" on:click={
                      () => {
                        let index = cards.findIndex(object => {
                          return object.id === card.id;
                        });
                        cards.splice(index, 1)
                        console.log(cards)
                        cards = cards
                      }
              }><Trash size={27} /></button>
            </header>
            <div class="inputs">
              <input class="input-set term" type="text" bind:value={card.term} placeholder="Term">
              <input class="input-set" type="text" bind:value={card.definition} placeholder="Definition">
            </div>
            <div class="infos">
              <h5 class="soft-fg">Term</h5>
              <h5 class="soft-fg">Definition</h5>
            </div>
          </div>
        {/each}
      </div>

      <div class="card" style="display: flex; justify-content: center; align-items: center;">
        <button class="btn add-btn" type="button" style="" on:click = {() => {
          cards.push({
            term: "",
            definition: "",
            id: id++
          })
          cards = cards
          console.log(cards)
          }}>+ Add</button>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <button class="btn" type="button" style="background-color: rgb(65, 75, 117); border-radius: 15px;" on:click={() => {location.href = "/studysets"}}>Back</button>
      <button class="btn" type="button" on:click={() => {
        let error = false
        if (name.trim().length == 0 || cards.length < 2) {
           document.getElementById('error').style.display = 'block'
           document.getElementById('error')?.scrollIntoView()
           error = true
        } else {
        for (let i = 0; i < cards.length; i ++) {
          if (cards.find(e => e.term.trim() === '' || e.definition.trim() == '')) {
            document.getElementById('error').style.display = 'block'
            document.getElementById('error')?.scrollIntoView()
            error = true
            break
          } 
         }
         }
         if (!error) {
         setId ++
         localStorage.setItem('studyset-id', JSON.stringify(setId))
          const inputData = {
            name,
            id: setId,
            cards
          }
          let sets = data.sets
          sets.push(inputData)
          localStorage.setItem('sets', JSON.stringify(sets))
          location.href = '/studysets'
         }
      }}
        style="background-color: rgb(81, 94, 145); border-radius: 15px;">Create</button>

      </div>
          </form>
  </div>
</main>
