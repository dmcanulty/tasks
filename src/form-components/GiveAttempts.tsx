import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { isArrayBindingPattern } from "typescript";

export function GiveAttempts(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);
    return (
        <div>
            <Form.Group>
                <Form.Label>GiveAttempts</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(a) => {
                        const b = parseInt(a.target.value);
                        if (!isNaN(b)) {
                            setRequest(b);
                        }
                    }}
                />
                <button
                    name="use"
                    disabled={attempt <= 0}
                    onClick={() => {
                        setAttempt(attempt - 1);
                    }}
                >
                    use
                </button>
                <button
                    name="gain"
                    onClick={() => {
                        setAttempt(attempt + request);
                    }}
                >
                    gain
                </button>
                <div> Attempts Remaining: {attempt} </div>
            </Form.Group>
        </div>
    );
}
