<script lang="ts">
  import "../../../../../static/css/main.css"
  export let data:any; let index = 0
  let show: string = "show"
  let visible = false
  let cardsElem 
  let flipped = false

  function shuffle(array: any[]) {
  let i = array.length;
  while (i--) {
    const ri = Math.floor(Math.random() * i);
    [array[i], array[ri]] = [array[ri], array[i]];
  }
  return array;
}
  </script>
<svelte:window on:keydown={(e) => {
  if (e.key == "ArrowRight") 
  {
  index ++
  visible = true
  visible = visible
    if (index > data.set.cards.length - 1) {
      index -= 2 
    } 
    } else if (e.key == "ArrowLeft") {
    index --
    visible = true
    visible = visible
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
        <div bind:this={cardsElem} class="card"  on:click={() => {
          visible = !visible
          visible = visible
          cardsElem.classList.toggle('flipped')
          flipped = !flipped 
          flipped = flipped
          }} >
          <h6 style="backface-visibility: hidden; font-size: 1em; position: absolute; {flipped == true ? 'bottom:0' : 'top:0'};" class="{flipped == true ? 'flipped' : ''}">{index + 1} / {data.set.cards.length}</h6>
          {#if visible == false}
            <h6   style="position: absolute; {flipped == true ? 'bottom: 3em' : 'top: 3em'}; backface-visibility: hidden;">{data.set.cards.at(index).term}</h6>
          {:else}
            <h6  style="  
                        bottom:0; position: absolute; margin-bottom: 3em; backface-visibility: hidden;" class="{flipped == true ? 'flipped' : ''}">
              {data.set.cards[index].definition}
            </h6>
          {/if}
          <div class="{flipped == true ? 'flipped' : ''}  arrow-container" style="{flipped == true ? 'top: 2em' : 'bottom: 2em'}; position: absolute; backface-visibility:hidden;  ">
            <button class="arrow-btn {index > 0 ? 'available' : ''}" on:click={(event) => {
              visible = false
              visible = visible
              flipped = false
              flipped = flipped
              if (index > 0) {
              index --
              }
                    cardsElem.classList.remove('flipped')
              event.stopPropagation()
              }}>
            <svg class = "arrow left" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 256 512"><!--! font awesome pro 6.2.1 by @fontawesome - https://fontawesome.com license - https://fontawesome.com/license (commercial license) copyright 2022 fonticons, inc. --><path fill="{index > 0 ? '#ffffff': '#676D83'}" d="m246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
            </button>
            <button class="  arrow-btn {index < data.set.cards.length - 1 ? 'available' : ''}" on:click={(event) => {
                 visible = false
                 visible = visible
                 flipped = false
                 flipped = flipped
              if (index < data.set.cards.length - 1) {
                 index ++
                    } 
                    cardsElem.classList.remove('flipped')
                      event.stopPropagation()
              }}>
              <svg class = "arrow" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 256 512"><!--! font awesome pro 6.2.1 by @fontawesome - https://fontawesome.com license - https://fontawesome.com/license (commercial license) copyright 2022 fonticons, inc. --><path fill="{index < data.set.cards.length - 1 ? '#ffffff': '#676D83'}" d="m246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
            </button>
          </div>
        </div>        
      </div>
    {/if}
    <div class="btns">
      <button class="back-btn" style="" on:click={() => {location.href= '/studysets'}}>Back</button>
      <button class="back-btn" style="" on:click={() => {
        data.set.cards = shuffle(data.set.cards)
        data.set.cards = data.set.cards
        }}>shuffle</button>
      <button class="back-btn sort-btn" style="" on:click={() => {
        data.set.cards = data.set.cards.sort(function(a, b) {
          return a.term.toLowerCase().localeCompare(b.term.toLowerCase());
        });
        data.set.cards = data.set.cards
        index = 0
        }}>sort</button>
      <button class="back-btn" on:click={() => {
        if ( show === "show" ) {
          show = "hide"
        } else show = "show"
        }}> {show} </button>
    </div>
    <div class="terms">
      {#if show === "hide" } 
        Terms: {data.set.cards.length}
      {/if}
      {#if typeof data.set.cards !== "undefined" && show == "hide"}
        <div class="answers">
          {#each data.set.cards as card}
          <div class="key">
              <p>{card.term}:</p>
              <p>{card.definition}</p>
          </div>
               {/each}
        </div>
      {/if}
    </div>
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
  .terms {
    margin-top: 2em;
    font-size: 1.3em;
    font-weight: bold;
  }
  .btns {
    display: flex;
    width: 80%;
    justify-content: space-between;
  }
  .key {
    background-color: rgba(47, 56, 88, 1);
    box-shadow: 5px 3px 2px 10px #141826;
    margin-bottom: 1em;
    border-radius: 15px;
    height: 70%;
  }
  .key p {
    font-weight: normal;
    margin: 0;
    font-size: 0.8em; 
    padding: 1em;
  }
  .answers {
    margin-top: 2em;
    flex-direction: column;
    display: flex;
  }
  .flipped {
    transform: rotateX(180deg);
  }
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
    width: 200px;
    box-shadow: none;
    border-radius: 15px;
    border: 3px solid rgb(56, 65, 94, 0.9);
  }
  .available {
    border: 3px solid rgb(100, 111, 144, 0.9);
  }
  .available:hover {
    border: 3px solid rgb(147, 155, 180, 0.9);
  }
  .card {
    position: relative;
    padding: 2em;
    background-color: rgba(47, 56, 86, 0.8);
    width: 80%;
    overflow-wrap: break-word;
    border-radius: 25px;
    text-align: center;
    height: 550px;
    display: flex;
   transition: transform 0.6s;
   transform-style: preserve-3d; 
	position: relative;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .card:hover {
    cursor: pointer;
  }
  .card h6 {
    font-size: 1.5em;
    text-align: center;
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
    .btns {
      width: 100%;
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
    .sort-btn {
      display: none;
    }
    .arrow-container {
      width: 95%;
    }
  }
  @media only screen and (max-width: 598px) {
    .container{
      padding: 0.5em 1em;
    }
  }
</style>

