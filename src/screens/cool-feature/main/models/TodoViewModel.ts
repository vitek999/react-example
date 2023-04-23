import {ToDoResponse} from "../../../../api/todos/dto";

export interface TodoViewModel {
    id: number;
    title: string;
}

export const mapFromResponse = (response: ToDoResponse): TodoViewModel => {
    return {id: response.id, title: response.title}
}