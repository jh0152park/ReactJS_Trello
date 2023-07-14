import { atom } from "recoil";

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
        Todo: [],
        Doing: [],
        Done: [],
    },
});
