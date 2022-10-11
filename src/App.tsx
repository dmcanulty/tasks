import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Hello World, Daniel McANulty COS420 UM COS420 with React
                    Hooks and TypeScript
                </h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <img src="dog.jpg" alt="A picture of some dogs" />
            <ul>
                <li>Both of these dogs appear to be staring at something</li>
                <li>These dogs are both very cute!</li>
                <li>The dogs are both rather small</li>
            </ul>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
