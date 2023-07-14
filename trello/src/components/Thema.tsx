import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./Global";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ThemaState } from "../atoms";

function Thema() {
    const currentThema = useRecoilValue(ThemaState);
    const setThema = useSetRecoilState(ThemaState);

    function onClick() {
        console.log("clicked thema button");
        setThema((prev) => !prev);
    }

    return (
        <Button onClick={onClick}>
            <FontAwesomeIcon icon={faMoon} />
        </Button>
    );
}

export default Thema;
