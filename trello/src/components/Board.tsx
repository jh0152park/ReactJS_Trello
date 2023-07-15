import React, { useRef } from "react";
import { Droppable } from "react-beautiful-dnd";
import { DraggableCard } from "./Card";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { AddButtonState, BoardState, ITodo, actionItemState } from "../atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

interface IBoardProps {
    actionItems: ITodo[];
    boardId: string;
}

interface IAreaProps {
    isDraggingOver: boolean;
    isDraggingFromThis: boolean;
}

const Container = styled.div`
    background-color: ${(props) => props.theme.boardColor};
    padding-top: 10px;
    border-radius: 5px;
    min-height: 200px;
    width: 300px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    background-color: none;
    padding-bottom: 10px;
    border-bottom: 1px solid ${(props) => props.theme.fontColor};
    position: relative;
`;

const Area = styled.div<IAreaProps>`
    background-color: ${(props) =>
        props.isDraggingOver
            ? "rgb(128, 202, 209)"
            : props.isDraggingFromThis
            ? "#dfe6e9"
            : "transparent"};
    flex-grow: 1;
    transition: background-color 0.3s ease-in-out;
    padding: 20px;
`;

const Form = styled.form`
    width: 100%;
    input {
        width: 98%;
    }
`;

const Add = styled.div`
    width: 15px;
    height: 15px;
    color: #3ae374;
    background-color: #3ae374;
    position: absolute;
    right: 30px;
    top: 2px;
    border-radius: 50%;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.fontColor};
        transition: color 0.2s ease-in-out;
    }
`;

const Close = styled.div`
    width: 15px;
    height: 15px;
    color: #ff3838;
    background-color: #ff3838;
    position: absolute;
    right: 10px;
    top: 2px;
    border-radius: 50%;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.fontColor};
        transition: color 0.2s ease-in-out;
    }
`;

function Board({ boardId, actionItems }: IBoardProps) {
    const [entireBorad, setEntireBoard] = useRecoilState(actionItemState);
    const setActionItemBoard = useSetRecoilState(BoardState);
    const setAddButton = useSetRecoilState(AddButtonState);

    function onAddButtonClick(id: string) {
        console.log(`add button clicked at ${id}`);
        setActionItemBoard(id);
        setAddButton(true);
    }

    function onCloseButtonClick(id: string) {
        console.log(`close button clicked at ${id}`);
        setActionItemBoard(id);

        const newBoards = { ...entireBorad };
        delete newBoards[id];
        setEntireBoard(newBoards);
    }

    return (
        <Container>
            <Title>
                {boardId}
                <Add onClick={() => onAddButtonClick(boardId)}>
                    <FontAwesomeIcon icon={faPlus} />
                </Add>
                <Close onClick={() => onCloseButtonClick(boardId)}>
                    <FontAwesomeIcon icon={faXmark} />
                </Close>
            </Title>

            <Droppable droppableId={boardId}>
                {(magic, snapshot) => (
                    <Area
                        isDraggingOver={snapshot.isDraggingOver}
                        isDraggingFromThis={Boolean(
                            snapshot.draggingFromThisWith
                        )}
                        ref={magic.innerRef}
                        {...magic.droppableProps}
                    >
                        {actionItems.map((todo, index) => (
                            <DraggableCard
                                key={todo.id}
                                index={index}
                                todo={todo.text}
                                todoId={todo.id}
                                boardId={boardId}
                            ></DraggableCard>
                        ))}
                        {magic.placeholder}
                    </Area>
                )}
            </Droppable>
        </Container>
    );
}

export default React.memo(Board);
