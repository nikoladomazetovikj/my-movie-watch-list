import ContainerFluid from "../Layouts/ContainerFluid";
import {Container} from "react-bootstrap";
import Row from "../Layouts/Row";
import Column from "../Layouts/Column";

function InitialScreenMyList () {
    return (
        <ContainerFluid>
            <Container>
                <Row style='my-5'>
                    <Column colType='6'>
                        <h1>Your List Is empty</h1>
                    </Column>
                </Row>
            </Container>
        </ContainerFluid>
    );
}


export default InitialScreenMyList;