import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { client } from 'api/client';
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  color: string;
}

export interface TodosState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  entities: Record<string, Todo>;
  ids: string[];
  error?: string;
}

interface ColorSelected {
  todoId: string;
  color: string;
}

/*
Adapter utworzony przez createEntityAdapter<Todo> umożliwia zarządzanie listą zadań (todos) w postaci znormalizowanej
przechowując nasze todo jako obiekt { id --> encja - czyli zgodnie z typem Record<string, Todo>} oraz tablicę identyfikatorów

Dzięki temu łatwo jest dodawać / usuwać / aktualizować / odczytywać (operacje CRUD) i tworzyć selektory (czyli tzw. getter'y)

Przykładowo, taki adapter udostępnia m.in. metody:
- .addOne, .addMany (do dodawania nowego elementu / wielu elementów),
- .removeOne, .removeMany (do usuwania elementu / wielu elementów),
- .updateOne, .updateMany (do aktualizowania encji)

*/
const todosAdapter = createEntityAdapter<Todo>();

const initialState: TodosState = todosAdapter.getInitialState({
  status: 'idle',
  entities: {},
  ids: [],
});

// Docelowo tworzymy warstwę services (która odpowiada za komunikację z API backendowym (BFF)) - najlepiej utworzyć osobny
// katalog do tego w przypadku większych projektów.

// pobieranie todos z BE
export const fetchTodos = createAsyncThunk<Todo[]>('todos/fetchTodos', async () => {
  const response = await client.get('/fakeApi/todos');
  return response.todos;
});

// dodawanie nowego todo
export const saveNewTodo = createAsyncThunk<Todo, string>('/todos/saveNewTodo', async (text) => {
  const initialTodo = {
    text,
  };
  const response = await client.post('/fakeApi/todos', { todo: initialTodo });
  return response.todo;
});

// Praca domowa: zapytanie do usuwania danego todo z listy

// Stworzenie slice
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoToggled: (state, action: PayloadAction<string>) => {
      const todoId = action.payload;
      const todo = state.entities[todoId]; // pobieramy wybrany id z obiektu entities (todoId --> todo)

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    todoColorSelected: {
      reducer: (state, action: PayloadAction<ColorSelected>) => {
        const { color, todoId } = action.payload;
        const todo = state.entities[todoId];

        if (todo) {
          todo.color = color;
        }
      },
      prepare: (todoId: string, color: string) => {
        return {
          payload: {
            todoId,
            color,
          },
        };
      },
    },
  },
});
