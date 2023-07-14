import { atom } from "recoil";

/**
 * true: light mode
 * false: dark mode
 */
export const ThemaState = atom<boolean>({
    key: "thema",
    default: true,
});

export interface ITodo {
    id: number;
    text: string | number;
}

interface IActionItemState {
    [key: string]: ITodo[];
}

export const actionItemState = atom<IActionItemState>({
    key: "todo",
    default: {
        Todo: [{ id: 1, text: 1 }],
        Doing: [],
        Done: [],
    },
});
