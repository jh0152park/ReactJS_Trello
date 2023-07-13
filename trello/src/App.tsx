import styled, { createGlobalStyle } from "styled-components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.fontColor};
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const Container = styled.div`
    display: flex;
    max-width: 480px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Boards = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
    background-color: ${(props) => props.theme.boardColor};
    padding-top: 30px;
    padding: 20px 10px;
    border-radius: 5px;
    min-height: 200px;
`;

const Card = styled.div`
    background-color: ${(props) => props.theme.cardColor};
    padding: 10px 10px;
    border-radius: 5px;
    margin-bottom: 5px;
`;

const todoList = ["1", "2", "3", "4", "5"];

function App() {
    function onDragEnd() {}

    return (
        <>
            <GlobalStyle></GlobalStyle>
            <DragDropContext onDragEnd={onDragEnd}>
                <Container>
                    <Boards>
                        <Droppable droppableId="one">
                            {(magic) => (
                                <Board
                                    ref={magic.innerRef}
                                    {...magic.droppableProps}
                                >
                                    {todoList.map((todo, index) => (
                                        <Draggable
                                            draggableId={todo}
                                            index={index}
                                        >
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
                                    ))}
                                    {magic.placeholder}
                                </Board>
                            )}
                        </Droppable>
                    </Boards>
                </Container>
            </DragDropContext>
        </>
    );
}

export default App;
