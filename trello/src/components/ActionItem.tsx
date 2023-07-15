import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { AddButtonState, BoardState, actionItemState } from "../atoms";
import { useEffect, useRef } from "react";

interface IForm {
    item?: string;
}

const AddItem = styled.form`
    input {
        margin: 10px 10px;
        width: 400px;
        height: 20px;
        border-radius: 10px;
        padding-left: 10px;
        border: none;
        padding-bottom: 3px;

        background-color: ${(props) => props.theme.cardColor};
        &::placeholder {
            color: ${(props) => props.theme.fontColor};
            font-size: 15px;
        }
    }
`;

export function AddActionItem() {
    const setActionItem = useSetRecoilState(actionItemState);
    const Board = useRecoilValue(BoardState);
    const [addButton, setAddButton] = useRecoilState(AddButtonState);
    const { register, setValue, handleSubmit } = useForm();

    function onSubmit({ item }: IForm) {
        console.log(item);
        console.log(Board);

        const newItem = {
            id: Date.now(),
            text: item + "",
        };

        setActionItem((prev) => {
            return {
                ...prev,
                [Board]: [...prev[Board], newItem],
            };
        });
        setValue("item", "");
        setAddButton(false);
    }

    console.log(register("item"));

    return (
        <AddItem onSubmit={handleSubmit(onSubmit)}>
            <input
                style={{
                    opacity: addButton ? 1 : 0,
                    transition: "opacity 0.2s ease-in-out",
                }}
                {...register("item", { required: true })}
                type="text"
                placeholder="please let me know what you gonna do."
            ></input>
        </AddItem>
    );
}

export default AddActionItem;
