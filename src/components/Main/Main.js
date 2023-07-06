import ContainerFluid from "../Layouts/ContainerFluid";
import Container from "../Layouts/Container";
import Column from "../Layouts/Column";
import Row from "../Layouts/Row";
import Search from "./Search";

function Main({children, onNameChange, name}) {
    return (
        <>
            <Row>
               <Container>
                   <Column colType='6 col-md-10 col-8 mx-auto' style='mt-5'>
                       <Search onNameChange={onNameChange}  name={name}/>
                   </Column>
               </Container>
            </Row>
            <Row style='m-5'>
                {children.map((child, index) => (
                    <Column key={index} colType='6 col-md-6 col-6'>
                        {child}
                    </Column>
                ))}
            </Row>
        </>
    );
}

export default Main