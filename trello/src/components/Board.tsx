import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { DraggableCard } from "./Card";
import { styled } from "styled-components";

const Container = styled.div`
    background-color: ${(props) => props.theme.boardColor};
    padding-top: 30px;
    padding: 20px 10px;
    border-radius: 5px;
    min-height: 200px;
`;

interface IBoardProps {
    actionItems: string[];
    boardId: string;
}

function Board({ boardId, actionItems }: IBoardProps) {
    return (
        <Droppable droppableId={boardId}>
            {(magic) => (
                <Container ref={magic.innerRef} {...magic.droppableProps}>
                    {actionItems.map((todo, index) => (
                        <DraggableCard
                            key={todo}
                            index={index}
                            todo={todo}
                        ></DraggableCard>
                    ))}
                    {magic.placeholder}
                </Container>
            )}
        </Droppable>
    );
}

export default React.memo(Board);
