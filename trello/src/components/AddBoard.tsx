import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { CreateBoardButtonState } from "../atoms";
import { useRecoilState } from "recoil";

const AddItem = styled.form`
    input {
        margin: 10px 10px;
        width: 250px;
        height: 20px;
        border-radius: 10px;
        padding-left: 10px;
        padding-bottom: 3px;
        border: none;

        position: absolute;
        left: 100px;
        bottom: 15px;

        background-color: ${(props) => props.theme.cardColor};
        &::placeholder {
            color: ${(props) => props.theme.fontColor};
            font-size: 15px;
        }
    }
`;

function AddBoard() {
    const { register, setValue, handleSubmit } = useForm();
    const [createButton, setCreateButton] = useRecoilState(
        CreateBoardButtonState
    );

    function onSubmit() {
        setValue("create", "");
        setCreateButton(false);
    }

    return (
        <AddItem onSubmit={handleSubmit(onSubmit)}>
            <input
                style={{
                    opacity: createButton ? 1 : 0,
                    transition: "opacity 0.2s ease-in-out",
                }}
                {...register("create", { required: true })}
                type="text"
                placeholder="please enter new board name."
            ></input>
        </AddItem>
    );
}

export default AddBoard;
