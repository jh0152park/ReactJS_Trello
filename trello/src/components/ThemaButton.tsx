import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ThemaState } from "../atoms";
import { styled } from "styled-components";

const Button = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: none;
    font-size: 30px;
    &:hover {
        cursor: pointer;
        scale: 1.2;
    }
`;

function Thema() {
    const currentThema = useRecoilValue(ThemaState);
    const setThema = useSetRecoilState(ThemaState);

    function onClick() {
        console.log("clicked thema button");
        setThema((prev) => !prev);
    }

    return (
        <Button onClick={onClick}>
            <FontAwesomeIcon
                style={{ color: currentThema ? "#2d3436" : "#feca57" }}
                icon={currentThema ? faMoon : faSun}
            />
        </Button>
    );
}

export default Thema;
