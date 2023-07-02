import ContainerFluid from "../Layouts/ContainerFluid";
import Container from "../Layouts/Container";
import Column from "../Layouts/Column";

function Main({children}) {
    return (
        <ContainerFluid style='m-5'>
            <Container>
               <Column colType='6'>
                   {children}
               </Column>
            </Container>
        </ContainerFluid>
    );
}

export default Main