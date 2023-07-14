import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { DraggableCard } from "./Card";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { ITodo, actionItemState } from "../atoms";
import { useSetRecoilState } from "recoil";

interface IBoardProps {
    actionItems: ITodo[];
    boardId: string;
}

interface IAreaProps {
    isDraggingOver: boolean;
    isDraggingFromThis: boolean;
}

interface IForm {
    todo: string;
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

const Title = styled.h2`
    text-align: center;
    font-weight: bold;

    font-size: 18px;
    background-color: none;
    padding-bottom: 10px;
    border-bottom: 1px solid ${(props) => props.theme.fontColor};
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

function Board({ boardId, actionItems }: IBoardProps) {
    const { register, setValue, handleSubmit } = useForm<IForm>();
    const setActionItem = useSetRecoilState(actionItemState);

    // function onValid({ todo }: IForm) {
    //     const newItem = {
    //         id: Date.now(),
    //         text: todo,
    //     };

    //     setActionItem((prev) => {
    //         return {
    //             ...prev,
    //             [boardId]: [...prev[boardId], newItem],
    //         };
    //     });
    //     setValue("todo", "");
    // }

    return (
        <Container>
            <Title>{boardId}</Title>

            {/* <Form onSubmit={handleSubmit(onValid)}>
                <input
                    {...register("todo", { required: true })}
                    type="text"
                    placeholder={`Add task to on ${boardId}`}
                ></input>
            </Form> */}

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
