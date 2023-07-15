import { atom } from "recoil";

/**
 * true: light mode
 * false: dark mode
 */
export const ThemaState = atom<boolean>({
    key: "thema",
    default: true,
});

export const BoardState = atom<string>({
    key: "board",
    default: "",
});

export const AddButtonState = atom<boolean>({
    key: "add",
    default: false,
});

export const CreateBoardButtonState = atom<boolean>({
    key: "create",
    default: false,
});

export interface ITodo {
    id: number;
    text: string;
}

interface IActionItemState {
    [key: string]: ITodo[];
}

export const actionItemState = atom<IActionItemState>({
    key: "todo",
    default: {
        Todo: [{ id: 1, text: "11111111111111111111111111111111111111111" }],
        Doing: [],
        Done: [],
    },
});
