import axios from 'axios'

const url = "http://jsonplaceholder.typicode.com/todos/1"

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;

    const id = todo.id
    const title = todo.title
    const completed = todo.completed

    console.log(`
        the todo with : ${id}
        has a title of : ${title}
        is it finished? ${completed}
    `)
    logTodo(id, title, completed)
})

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    the todo with : ${id}
    has a title of : ${title}
    is it finished? ${completed}
`)
}