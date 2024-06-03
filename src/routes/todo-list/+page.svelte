<script>
  import ToDoList from '../../components/todo-list/todo-list.svelte';
  export let data;
</script>

<h1>TODO list</h1>
<ToDoList todoList={data.todos} />
