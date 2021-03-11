import React  from "react";
import { Grid, Container } from "semantic-ui-react";

export default function EventDashboard() {
    return(
        <Container className='main'>
            <Grid >
                <Grid.Column width={10}>
                    <h2>hola</h2>
                </Grid.Column>
                <Grid.Column width={6}>
                    <h2>hola2</h2>
                </Grid.Column>
            </Grid>
        </Container>

    );
}

