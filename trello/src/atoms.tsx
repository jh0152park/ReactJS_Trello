import { atom } from "recoil";

export const todoState = atom({
    key: "todo",
    default: ["1", "2", "3", "4", "5"],
});
