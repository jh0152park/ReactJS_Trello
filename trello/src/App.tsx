import { createGlobalStyle } from "styled-components";
import { hourSelector, minuteState } from "./atoms";
import { useRecoilState } from "recoil";

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
    background-color: #2f3640;
    color: #f5f6fa;
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

function App() {
    const [minutes, setMinutes] = useRecoilState(minuteState);
    const [hours, setHours] = useRecoilState(hourSelector);

    function onChange(event: React.FormEvent<HTMLInputElement>) {
        setMinutes(+event.currentTarget.value);
    }

    function onHoursChange(event: React.FormEvent<HTMLInputElement>) {
        setHours(+event.currentTarget.value);
    }

    return (
        <>
            <GlobalStyle></GlobalStyle>
            <div>
                <input
                    onChange={onChange}
                    value={minutes}
                    type="number"
                    placeholder="Minutes"
                ></input>
                <br></br>
                <input
                    onChange={onHoursChange}
                    value={hours}
                    type="number"
                    placeholder="Hours"
                ></input>
            </div>
        </>
    );
}

export default App;
