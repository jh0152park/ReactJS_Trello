import styled, { createGlobalStyle } from "styled-components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { actionItemState } from "./atoms";

import Board from "./components/Board";
import Thema from "./components/Thema";
import Create from "./components/Create";

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
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: relative;
`;

const Boards = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 10px;
`;

const Options = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: none;
    position: absolute;
    left: 10px;
    bottom: 10px;
`;

function App() {
    const [actionItem, setActionItemList] = useRecoilState(actionItemState);

    function onDragEnd(info: DropResult) {
        const { source, destination } = info;
        if (!destination) return;

        if (source.droppableId === destination.droppableId) {
            // same board movement
            const copyList = [...actionItem[source.droppableId]];
            const taskObj = copyList[source.index];

            copyList.splice(source.index, 1);
            copyList.splice(destination?.index, 0, taskObj);

            setActionItemList({
                ...actionItem,
                [source.droppableId]: copyList,
            });
        } else {
            // different board movement
            const copyFromList = [...actionItem[source.droppableId]];
            const copyToList = [...actionItem[destination.droppableId]];
            const taskObj = copyFromList[source.index];

            copyFromList.splice(source.index, 1);
            copyToList.splice(destination?.index, 0, taskObj);
            setActionItemList({
                ...actionItem,
                [source.droppableId]: copyFromList,
                [destination.droppableId]: copyToList,
            });
        }
    }

    return (
        <>
            <GlobalStyle></GlobalStyle>
            <DragDropContext onDragEnd={onDragEnd}>
                <Container>
                    <Boards>
                        {Object.keys(actionItem).map((action) => (
                            <Board
                                boardId={action}
                                key={action}
                                actionItems={actionItem[action]}
                            />
                        ))}
                    </Boards>

                    <Options>
                        <Thema></Thema>
                        <Create></Create>
                    </Options>
                </Container>
            </DragDropContext>
        </>
    );
}

export default App;
