import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { styled } from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
    padding: 10px 10px;
    border-radius: 5px;
    margin-bottom: 5px;
    background-color: ${(props) =>
        props.isDragging ? "#afccee" : props.theme.cardColor};
    box-shadow: ${(props) =>
        props.isDragging ? "0px 2px 10px rgba(0,0,0,0.5)" : "none"};
`;

interface IDragabbleCardProps {
    todo: string;
    todoId: number;
    index: number;
}

export function DraggableCard({ todo, index, todoId }: IDragabbleCardProps) {
    return (
        <Draggable draggableId={todoId + ""} index={index} key={todo}>
            {(magic, snapshot) => (
                <Card
                    isDragging={snapshot.isDragging}
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                >
                    {todo}
                </Card>
            )}
        </Draggable>
    );
}

export default React.memo(DraggableCard);
