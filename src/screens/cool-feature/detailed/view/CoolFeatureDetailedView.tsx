import React from "react";
import {ToDoResponse} from "../../../../api/todos/dto";

interface CoolFeatureDetailedViewProps {
    todo: ToDoResponse | null;
}

export const CoolFeatureDetailedView: React.FC<CoolFeatureDetailedViewProps> = ({ todo }) => {
    return(
        <>
            { todo?.title }
        </>
    )
}