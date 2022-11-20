import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);
    return (
        <div>
            <h3>Give Attempts</h3>
        </div>
    );
}
