import React, {useEffect, useState} from 'react';
import {RouteProps, useParams} from 'react-router-dom'
import {fetchDetailedTodo} from "../../../api/todos/requests";
import {ToDoResponse} from "../../../api/todos/dto";
import {CoolFeatureDetailedView} from "./view/CoolFeatureDetailedView";

export const CoolFeatureDetailedScreen: React.FC = () => {
    const { todoId } = useParams()
    const [todo, setTodo] = useState<ToDoResponse | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchDetailedTodo(Number(todoId))
            setTodo(data)
        }
        fetchData()
    }, [])

    return (
        <CoolFeatureDetailedView todo={todo}/>
    )
}