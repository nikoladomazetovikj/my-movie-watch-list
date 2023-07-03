import ContainerFluid from "../Layouts/ContainerFluid";
import {Container} from "react-bootstrap";
import Row from "../Layouts/Row";
import Column from "../Layouts/Column";

function InitialScreen() {
    return (
        <ContainerFluid>
            <Container>
                <Row style='my-5'>
                    <Column colType='6'>
                        <h1>Please search for movie...</h1>
                    </Column>
                </Row>
            </Container>
        </ContainerFluid>
    );
}

export default InitialScreen;