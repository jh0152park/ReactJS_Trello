import { atom } from "recoil";

interface IActionItemState {
    [key: string]: string[];
}

export const actionItemState = atom<IActionItemState>({
    key: "todo",
    default: {
        todo: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        doing: [],
        done: [],
    },
});
