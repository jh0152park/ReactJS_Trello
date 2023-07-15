import { styled } from "styled-components";

const AddItem = styled.form`
    position: absolute;
    top: 0px;
    left: 0px;
    input {
        margin: 10px 10px;
        width: 400px;
    }
`;

export function AddActionItem() {
    return (
        <AddItem>
            <input
                type="text"
                placeholder="please let me know what you gonna do."
            ></input>
        </AddItem>
    );
}

export default AddActionItem;
