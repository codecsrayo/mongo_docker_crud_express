
import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";


const url = "http://localhost:3100/api/marcas/";

class Marcas extends Component {
  state = {
    data: [],
    modalInsertar: false,
    modalEliminar: false,
    form: {
      nombre: "",
      estado: true,
      createdAt: "",
      updatedAt: "",
      id: "",
    },
  };

  peticionGet = () => {
    axios
      .get(url)
      .then((response) => {
        this.setState({ data: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionPost = async () => {
    delete this.state.form.id;
    await axios
      .post(url, this.state.form)
      .then((response) => {
        this.modalInsertar();
        this.peticionGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionPut = () => {
    axios.put(url + this.state.form.id, this.state.form).then((response) => {
      this.modalInsertar();
      this.peticionGet();
    });
  };

  peticionDelete = () => {
    axios.delete(url + this.state.form.id).then((response) => {
      this.setState({ modalEliminar: false });
      this.peticionGet();
    });
  };

  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  };

  seleccionarMarcas = (marcas) => {
    this.setState({
      tipoModal: "actualizar",
      form: {
        id: marcas.id,
        nombre: marcas.nombre,
        estado: marcas.estado,
      },
    });
  };

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    const { form } = this.state;
    return (
      <>
        <div className="App">
          <br />
          <br />
          <br />
          <button
            className="btn btn-success"
            onClick={() => {
              this.setState({ form: null, tipoModal: "insertar" });
              this.modalInsertar();
            }}
          >
            Agregar Marcas
          </button>
          <br />
          <br />
          <table className="table ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Creado</th>
                <th>Actualizado</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((marcas) => {
                return (
                  <tr>
                    <td>{marcas.id}</td>
                    <td>{marcas.nombre}</td>
                    <td>{String(marcas.estado)}</td>
                    <td>{marcas.createdAt}</td>
                    <td>{marcas.updatedAt}</td>

                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          this.seleccionarMarcas(marcas);
                          this.modalInsertar();
                        }}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      {"   "}
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.seleccionarMarcas(marcas);
                          this.setState({ modalEliminar: true });
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader style={{ display: "block" }}>
              <span
                style={{ float: "right" }}
                onClick={() => this.modalInsertar()}
              >
                x
              </span>
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label htmlFor="id">ID</label>
                <input
                  className="form-control"
                  type="text"
                  name="id"
                  id="id"
                  readOnly
                  onChange={this.handleChange}
                  value={form ? form.id : this.state.data.length + 1}
                />
                <br />
                <label htmlFor="nombre">Nombre</label>
                <input
                  className="form-control"
                  type="text"
                  name="nombre"
                  id="nombre"
                  onChange={this.handleChange}
                  value={form ? form.nombre : ""}
                />
                <br />
                <label htmlFor="estado">Estado</label>
                <input
                  className="form-control"
                  type="text"
                  name="estado"
                  id="estado"
                  onChange={this.handleChange}
                  value={form ? form.estado : ""}
                />
              </div>
            </ModalBody>

            <ModalFooter>
              {this.state.tipoModal == "insertar" ? (
                <button
                  className="btn btn-success"
                  onClick={() => this.peticionPost()}
                >
                  Insertar
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => this.peticionPut()}
                >
                  Actualizar
                </button>
              )}
              <button
                className="btn btn-danger"
                onClick={() => this.modalInsertar()}
              >
                Cancelar
              </button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
              Estás seguro que deseas eliminar a la marca {" "}
              {form && form.nombre}
            </ModalBody>
            <ModalFooter>
              <button
                className="btn btn-danger"
                onClick={() => this.peticionDelete()}
              >
                Sí
              </button>
              <button
                className="btn btn-secundary"
                onClick={() => this.setState({ modalEliminar: false })}
              >
                No
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </>
    );
  }
}
export default Marcas;
