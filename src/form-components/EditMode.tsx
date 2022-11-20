import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(false);
    return (
        <div>
            <Form.Group>
                <Form.Check
                    type = "switch"
                    
            </Form.Group>
        </div>
    );
}
