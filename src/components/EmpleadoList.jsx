import { ListGroup } from "react-bootstrap";
import { empleados } from "../data/dataEpleados";
import EmpleadoRow from './EmpleadoRow';

const EmpleadoList = () => {
  return (
    <ListGroup>
        {empleados.map((empleado) => (
            <EmpleadoRow key={empleado.id} empleado={empleado}></EmpleadoRow>
        ))}
    </ListGroup>
  )
}

export default EmpleadoList;