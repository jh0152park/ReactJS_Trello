import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { styled } from "styled-components";

const Card = styled.div`
    background-color: ${(props) => props.theme.cardColor};
    padding: 10px 10px;
    border-radius: 5px;
    margin-bottom: 5px;
`;

interface IDragabbleCardProps {
    todo: string;
    index: number;
}

export function DraggableCard({ todo, index }: IDragabbleCardProps) {
    return (
        <Draggable draggableId={todo} index={index} key={todo}>
            {(magic) => (
                <Card
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
