import logo from "./logo.svg";
import "./App.css";
import { React, Component } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";




import Usuarios from './pages/Usuarios'
import TipoEquipo from './pages/TipoEquipo'
import EstadoEquipo from './pages/EstadoEquipo'
import Marcas from './pages/Marcas'

class App extends Component {
  render() {
    return (
      <>
        {/* Barra de navegación*/}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/usuarios">Usuarios</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/tipo_equipo">Tipo Equipo</Nav.Link>
              <Nav.Link href="/estado_equipo">Estado Equipo</Nav.Link>
              <Nav.Link href="/marcas">Marcas</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <BrowserRouter>
          {/* Registro de rutas.*/}
          <Routes>
            <Route path="/usuarios" element={<Usuarios/>}/>
            <Route path="/tipo_equipo" element={<TipoEquipo/>}/>
            <Route path="/estado_equipo" element={<EstadoEquipo/>}/>
            <Route path="/marcas" element={<Marcas/>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
