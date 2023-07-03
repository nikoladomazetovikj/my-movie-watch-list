import ContainerFluid from "../Layouts/ContainerFluid";
import Container from "../Layouts/Container";
import Column from "../Layouts/Column";
import Row from "../Layouts/Row";
import Search from "./Search";

function Main({children, onNameChange, name}) {
    return (
        <ContainerFluid style='m-5'>
            <Container>
                <Row>
                    <Search onNameChange={onNameChange}  name={name}/>
                </Row>
               <Row style='m-5'>
                   {children.map((child, index) => (
                       <Column key={index} colType='6'>
                           {child}
                       </Column>
                   ))}
               </Row>
            </Container>
        </ContainerFluid>
    );
}

export default Main