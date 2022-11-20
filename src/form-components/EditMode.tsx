import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    return (
        <div>
            <Form.Group>
                <Form.Check
                    type="switch"
                    id="change"
                    label="Edit"
                    checked={edit}
                    onChange={(a) => {
                        setEdit(a.target.checked);
                    }}
                />
                <Form.Check
                    hidden={!edit}
                    type="checkbox"
                    id="student"
                    label="is student"
                    name="student"
                    checked={student}
                    onChange={(a) => {
                        setStudent(a.target.checked);
                    }}
                />
                <Form.Control
                    hidden={!edit}
                    value={name}
                    onChange={(a) => {
                        setName(a.target.value);
                    }}
                />
            </Form.Group>
            <h3>
                {name} is {student ? "" : "not"} a student
            </h3>
        </div>
    );
}
