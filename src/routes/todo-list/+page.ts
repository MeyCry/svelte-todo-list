export async function load({fetch}) {
  const res = await fetch('/todos');
  const todos = await res.json();
  return {todos};
}
