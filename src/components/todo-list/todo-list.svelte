<script lang="ts">
  type Todo = {
    text: string;
    completed: boolean;
  };
  let newTodo = '';
  let todos: Todo[] = [];

  function addTodo(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      todos = [...todos, {text: newTodo, completed: false}];
      newTodo = '';
    }
  }

  function removeTodo(index: number) {
    todos = todos.filter((_, i) => i !== index);
  }

  function clearCompleted() {
    todos = todos.filter(todo => !todo.completed);
  }

  function clearAll() {
    todos = [];
  }
</script>

<!--TODO need to separate code by components -->
<div>
  <h1>Todo List</h1>
  <input type="text" bind:value={newTodo} on:keydown={addTodo} />
  <ul>
    {#each todos as todo, i}
      <li>
        <input type="checkbox" bind:checked={todo.completed} />
        <span>{todo.text}</span>
        <button on:click={() => removeTodo(i)}>Remove</button>
      </li>
    {/each}
  </ul>
  <button on:click={clearCompleted}>Clear completed</button>
  <button on:click={clearAll}>Clear all</button>
</div>
