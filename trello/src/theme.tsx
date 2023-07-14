import "styled-components";

interface Thema {
    backgroundColor?: string;
    boardColor?: string;
    cardColor?: string;
    fontColor?: string;
}

export const defaultTheme: Thema = {
    backgroundColor: "#54a0ff",
    boardColor: "#c8d6e5",
    cardColor: "white",
    fontColor: "#2d3436",
};
