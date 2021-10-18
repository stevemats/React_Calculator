import React from "react";
import { Container, Screen, Current, Previous } from "./Styled";

export default function Calculator() {
    return (
        <Container>
            <Screen>
                <Previous>20 +</Previous>
                <Current>5</Current>
            </Screen>

        </Container>
    )
}