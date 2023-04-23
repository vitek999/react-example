import React, {useEffect, useState} from "react";
import {fetchTodos} from "../../../api/todos/requests";
import {CoolFeatureMainView} from "./view/CoolFeatureMainView";
import {mapFromResponse, TodoViewModel} from "./models/TodoViewModel";

export const CoolFeatureMainScreen: React.FC = () => {
    const [elements, setElements] = useState<TodoViewModel[]>([]);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchTodos()
            setElements(data.map(mapFromResponse))
        }
        loadData()
    }, [])

    return(
        <CoolFeatureMainView todos={elements}/>
    )
}