import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { DraggableCard } from "./Card";
import { styled } from "styled-components";

const Container = styled.div`
    background-color: ${(props) => props.theme.boardColor};
    padding-top: 10px;
    padding: 20px 10px;
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
    margin-bottom: 15px;
    font-size: 18px;
`;

interface IBoardProps {
    actionItems: string[];
    boardId: string;
}

function Board({ boardId, actionItems }: IBoardProps) {
    return (
        <Container>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {(magic) => (
                    <div ref={magic.innerRef} {...magic.droppableProps}>
                        {actionItems.map((todo, index) => (
                            <DraggableCard
                                key={todo}
                                index={index}
                                todo={todo}
                            ></DraggableCard>
                        ))}
                        {magic.placeholder}
                    </div>
                )}
            </Droppable>
        </Container>
    );
}

export default React.memo(Board);
