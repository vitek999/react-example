import React from "react";
import {Link} from "react-router-dom";
import {TodoViewModel} from "../models/TodoViewModel";

interface CoolFeatureMainViewProps {
    todos: TodoViewModel[]
}

export const CoolFeatureMainView: React.FC<CoolFeatureMainViewProps> = ({todos}) => {
    return (
        <ul>
            {todos.map(item => <li key={item.id}>
                <Link to={`todo/${item.id}`}>
                    {item.title}
                </Link>
            </li>)}
        </ul>
    )
}