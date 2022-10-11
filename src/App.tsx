import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World, Daniel McANulty COS420
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
        </div>
    );
}

export default App;
