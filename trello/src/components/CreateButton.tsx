import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./Global";

function Create() {
    function onClick() {
        console.log("clicked create button");
    }

    return (
        <Button onClick={onClick}>
            <FontAwesomeIcon icon={faPlus} />
        </Button>
    );
}

export default Create;
