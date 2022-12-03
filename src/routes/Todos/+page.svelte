<svelte:head>
  <link rel="stylesheet" href="/css/main.css">
</svelte:head>
<script lang="ts">
  let id = 0
  let todos = [
    {content: "Here is your description", name:"This is the name", important: false, id: id++},
    {content: "This description is a really long one, did I mention it is really long????", name:"This is the name", important: true , id: id++}
  ]
  let visibilty = false;
  let title = '';
  let description = ''
  function deleteTodo(id: number) {
    const index = todos.findIndex(obj => {
      return obj.id == id
    }) 
    todos.splice(index, 1)
    todos = todos
  } </script>
<main>
  <div class="container">
    <header class="main">
      <h1>Todos</h1>
    </header>
    <div class="todos" >
      {#each todos as todo}
        <div class="{todo.important ? 'important' : ''} todo">
          <div class="top-g"> 
            <h6>{todo.name}</h6>
            <button class="delete" type="button" on:click={() => {deleteTodo(todo.id)}}>
              <span class="dot"></span>
            </button>
          </div>
          <p class="description">{todo.content}</p>
        </div>
      {/each}
    </div>
    {#if !visibilty}
      <button class="addbtn" on:click={() => {visibilty = !visibilty}}>
        <svg width="13" height="13">
          <path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="currentColor" fill-rule="evenodd">
          </path>
        </svg>
      </button>
    {/if}
    <form class = "form" >
      {#if visibilty}
        <input type="text" id="title" placeholder="eg. Finish English HW" class = "title-input" bind:value={title}>
        <textarea type="text" id="description" placeholder="description" class="description-input"  bind:value={description}/>
        <div class="flex" >
          <button class="addbtn" on:click={() => {visibilty = !visibilty}}> Cancel </button>
          <button class="addbtn" type="button" on:click={() => {
            todos.push({content: description, name: title,  important: false, id: id++})
            todos = todos
            visibilty = !visibilty
          }}> Add </button>
        </div>
      {/if}
    <form>
  </div>
</main>
<style>
  .addbtn {
    box-shadow: none;
    border-radius: 15px;
    background: rgba(23, 27, 43, 0.5);
    font-size: 0.6em; 
    margin-right: 2em;
  }
  .delete {
    height: 30px;
    display: grid;
    place-items: center;
    box-shadow: none;
  }
  .delete:active{
    background-color: none;
  }
  .addbtn:hover {
    background: white;
    color: rgba(23, 27, 43, 0.5);
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .todo h6 {
    font-size: 0.8em;
  }
  .description {
    font-size: 0.7em; 
  }
  .todos {
    width : 95%; 
  }
  .todo {
    background: rgba(23, 27, 43, 0.5);
    padding: 0.7em;
    padding-bottom: 5px;
    border-radius: 15px;
    margin-bottom: 1em;
  }
  .important {
    background-color: rgba(109, 128, 199, 0.5) !important;
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
  .dot {
    height: 20px;
    width: 20px;
    border: 2px solid white;
    border-radius: 50%;
    display: inline-block;
  } 
  .top-g {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .form {
    display: grid;
    place-items: center;
  }
  .title-input {
    font-size: 0.7em;  
    padding: 1em;  
    width: 200%;
  }
  .description-input {
    font-size: 0.6em; 
    padding: 1.5em; 
    width: 200%; 
    resize:none; 
    margin-bottom: 1.5em;
  }
  .flex {
    display: flex;
  }
  @media only screen and (min-width:623px) {
    .todos {
      width: 90%;
    }
  }
  @media only screen and (min-width: 729px) {
    .todo h6 {
      font-size: 1em;
    }
    .description {
      font-size: 0.7em;
    }
  }
  @media only screen and (min-width: 1000px) {
    .description {
      font-size: 0.85em;
    }
  }
  @media only screen and (min-width: 1280px) {
    .description {
      font-size: 0.6em;
    }
    .todo h6 {
      font-size: 0.9em;
    }
  }
  @media only screen and (min-width: 1680px) {
    .description {
      font-size: 0.5em;
    }
    .todo h6 {
      font-size: 0.8em;
    }
  }
</style>
