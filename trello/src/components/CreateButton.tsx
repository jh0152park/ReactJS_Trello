import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
