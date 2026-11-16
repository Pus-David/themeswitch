import { createContext, useContext, useState } from "react";
import "./App.css";

const AppContext = createContext("dark");

function App() {
    const [theme, setTheme] = useState("dark");
    return (
        <AppContext value={theme}>
            <Form />
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Click Me</button>
        </AppContext>
    );
}

function Form() {
    const theme = useContext(AppContext);
    return (
        <div className={theme === "light" ? "panel-light" : "panel-dark"}>
            <div>Welcome to the form</div>
        </div>
    );
}

export default App;
