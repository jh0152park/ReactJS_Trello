import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    word-break: break-all;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Close = styled.div`
    width: 10px;
    height: 10px;
    color: #ff3838;
    background-color: #ff3838;
    border-radius: 50%;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.fontColor};
        transition: color 0.2s ease-in-out;
    }
`;

interface IDragabbleCardProps {
    todo: string | number;
    todoId: number;
    index: number;
    boardId: string;
}

function onCloseButtonClick(id: string) {}

export function DraggableCard({
    todo,
    index,
    todoId,
    boardId,
}: IDragabbleCardProps) {
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
                    <Close>
                        <FontAwesomeIcon icon={faXmark} />
                    </Close>
                </Card>
            )}
        </Draggable>
    );
}

export default React.memo(DraggableCard);
