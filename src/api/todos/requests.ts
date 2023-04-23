import ky from "ky";
import {ToDoResponse} from "./dto";

const BACKEND_URL = "https://jsonplaceholder.typicode.com"

export const fetchTodos = async (): Promise<ToDoResponse[]> => {
    return await ky.get(`${BACKEND_URL}/todos/`).then(r => r.json())
}

export const fetchDetailedTodo = async (id: number): Promise<ToDoResponse> => {
    return await ky.get(`${BACKEND_URL}/todos/${id}`).then(r => r.json())
}