import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { CreateBoardButtonState } from "../atoms";

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
    const createButton = useSetRecoilState(CreateBoardButtonState);

    function onClick() {
        console.log("clicked create new board button");
        createButton(true);
    }

    return (
        <Button onClick={onClick}>
            <FontAwesomeIcon icon={faPlus} />
        </Button>
    );
}

export default Create;
