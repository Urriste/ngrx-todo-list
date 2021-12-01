import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/models/todo.model";

export const addTodo = createAction(

    '[Todo List] Add Todo',
    props<{ content: string }>()

)

export const removeTodo = createAction(

    '[Todo List] Remove Todo',
    props<{ id: number }>()

)

export const getTodoList = createAction(

    '[Todo List] Get Todo List',
    props<{ todos: ReadonlyArray<Todo> }>()

)