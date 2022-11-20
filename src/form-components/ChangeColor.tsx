import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, changeColor] = useState<string>("#4A235A");
    const colorList = [
        "#17202A",
        "#58D68D",
        "#B03A2E",
        "#21618C",
        "#F4D03F",
        "#979A9A",
        "#A2D9CE",
        "#4A235A"
    ];
    return (
        <div>
            <Form.Group>
                {colorList.map((cList: string) => (
                    <Form.Check
                        type="radio"
                        name="color"
                        key={cList}
                        value={cList}
                        style={{ backgroundColor: cList }}
                        checked={cList == color}
                        onChange={(a) => {
                            changeColor(a.target.value);
                        }}
                    />
                ))}
            </Form.Group>
            <h3>
                Your chose color is{" "}
                <p
                    data-testid="colored-box"
                    style={{ backgroundColor: `${color}` }}
                >
                    {color}
                </p>
            </h3>
        </div>
    );
}
