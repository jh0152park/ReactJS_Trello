import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <RecoilRoot>
        <Helmet>
            <title>Action Item Board</title>
        </Helmet>
        <App />
    </RecoilRoot>
);
