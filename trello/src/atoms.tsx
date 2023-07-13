import { atom } from "recoil";

interface IActionItemState {
    [key: string]: string[];
}

export const actionItemState = atom<IActionItemState>({
    key: "todo",
    default: {
        Todo: ["1", "2", "3"],
        Doing: ["4", "5", "6", "7"],
        Done: ["8", "9", "10"],
    },
});
