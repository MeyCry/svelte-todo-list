import {json} from '@sveltejs/kit';
import type {Todo} from '../../components/todo-list/toto-list.types';

let todos: Todo[] = [];

export async function POST({request}) {
  const todosState: Todo[] = await request.json();
  todos = todosState;
  return json({body: {message: 'POST request received'}});
}

export function GET() {
  return json(todos);
}
