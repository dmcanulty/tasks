import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [value, setValue] = useState<string>("");
    return (
        <>
            <Form.Group controlId="basicForm">
                <Form.Label>CheckAnswer</Form.Label>
                <Form.Control
                    value={value}
                    onChange={(a) => {
                        setValue(a.target.value);
                    }}
                />
            </Form.Group>
            <div>
                Your final answer is {value == expectedAnswer ? "✔️" : "❌"}
            </div>
        </>
    );
}
