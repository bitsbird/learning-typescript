import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  userId: number;
  title: string;
  completed: false;
}

axios.get(url).then((response) => {
  const todos = response.data as Todo;

  logTodo(todos.title, todos.userId, todos.completed);
});

const logTodo = (title: string, userId: number, completed: boolean) => {
  console.log(`
    id = ${userId}
    title: ${title}
    completed: ${completed}
  `);
};
