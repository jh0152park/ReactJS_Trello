import "styled-components";

interface Thema {
    backgroundColor?: string;
    boardColor?: string;
    cardColor?: string;
    fontColor?: string;
}

export const lightMode: Thema = {
    backgroundColor: "#54a0ff",
    boardColor: "#c8d6e5",
    cardColor: "white",
    fontColor: "#2d3436",
};

export const darkMode: Thema = {
    backgroundColor: "#222f3e",
    boardColor: "#576574",
    cardColor: "#8395a7",
    fontColor: "whitesmoke",
};
