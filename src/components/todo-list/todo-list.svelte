<script lang="ts">
  import type {Todo} from './toto-list.types';

  export let todoList;
  let newTodo = '';
  let todos: Todo[] = todoList || [];

  function updateTodos() {
    requestIdleCallback(() => {
      return fetch('/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todos),
      });
    });
  }

  function addTodo(event: SubmitEvent) {
    event.preventDefault();
    todos = [...todos, {text: newTodo, completed: false}];
    newTodo = '';
    void updateTodos();
  }

  function removeTodo(index: number) {
    todos = todos.filter((_, i) => i !== index);
    void updateTodos();
  }

  function clearCompleted() {
    todos = todos.filter(todo => !todo.completed);
    void updateTodos();
  }

  function clearAll() {
    todos = [];
    void updateTodos();
  }
</script>

<!--TODO need to separate code by components -->
<div>
  <h1>Todo List</h1>
  <form on:submit={addTodo}>
    <input type="text" bind:value={newTodo} />
  </form>
  <ul>
    {#each todos as todo, i}
      <li>
        <input type="checkbox" bind:checked={todo.completed} on:change={updateTodos} />
        <span>{todo.text}</span>
        <button on:click={() => removeTodo(i)}>Remove</button>
      </li>
    {/each}
  </ul>
  <button on:click={clearCompleted}>Clear completed</button>
  <button on:click={clearAll}>Clear all</button>
</div>
