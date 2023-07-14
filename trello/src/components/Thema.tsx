import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./Global";

function Thema() {
    function onClick() {
        console.log("clicked thema button");
    }

    return (
        <Button onClick={onClick}>
            <FontAwesomeIcon icon={faMoon} />
        </Button>
    );
}

export default Thema;
