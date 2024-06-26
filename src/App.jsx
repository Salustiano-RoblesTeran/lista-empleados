import { Container } from 'react-bootstrap';
import EmpleadoList from './components/EmpleadoList';
import './App.css';

function App() {

  return (
    <>
      <Container className='my-5 mainSection'>
        <h1 className='display-1 text-center'>Lista de empleados</h1>
        <hr />
        <EmpleadoList></EmpleadoList>
      </Container>
      <footer className='bg-dark text-light text-center py-4'>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
