import Container from "./Container";
import ContainerFluid from "./ContainerFluid";
import Column from "./Column";
import Row from "./Row";

function Alert({error}) {
    return (
       <ContainerFluid>
           <Container style='m-3'>
               <Row>
                   <div className="alert alert-danger text-center text-white" role="alert">
                       {error}
                   </div>
               </Row>
           </Container>
       </ContainerFluid>
    );
}

export default Alert;