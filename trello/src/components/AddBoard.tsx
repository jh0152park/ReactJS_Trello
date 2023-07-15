import { styled } from "styled-components";

const AddItem = styled.form`
    input {
        margin: 10px 10px;
        width: 250px;
        height: 20px;
        border-radius: 10px;
        padding-left: 10px;
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
    return (
        // <AddItem onSubmit={handleSubmit(onSubmit)}>
        <AddItem>
            <input
                // style={{
                //     opacity: addButton ? 1 : 0,
                //     transition: "opacity 0.2s ease-in-out",
                // }}
                // {...register("item", {
                //     required: true,
                // })}
                type="text"
                placeholder="please enter new board name."
            ></input>
        </AddItem>
    );
}

export default AddBoard;
