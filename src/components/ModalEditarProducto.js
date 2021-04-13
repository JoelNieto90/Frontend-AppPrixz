import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalEditarEmpleado = (props) => {
  const { buttonLabel, className, data } = props;
  const [modal, setModal] = useState(false);
  const [myData, setMyData] = useState(data)

  const toggle = () => setModal(!modal);

  const editar = (myData) => {
    var contador = 0;
    var arreglo = myData;
    arreglo.map((dato) => {
      if (dato.id == dato.id) {
        arreglo[contador].Nombre = dato.Nombre;
        arreglo[contador].EMAIL = dato.EMAIL;
        arreglo[contador].EMPRESA = dato.EMPRESA;
        arreglo[contador].SALARIO = dato.SALARIO;
        arreglo[contador].IMAGEN = dato.IMAGEN;
      }
      contador++;
    });
    setMyData({ data: arreglo });
  };


  const handleChange = (e) => {
    setMyData({
      form: {
        myData,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div>
      <Button color="btn btn-warning" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader>
          <div>
            <h3>Editar Registro</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input
              className="form-control"
              readOnly
              type="text"
              value={data.id}
            />
          </FormGroup>

          <FormGroup>
            <label>Nombre:</label>
            <input
              className="form-control"
              name="Nombre"
              type="text"
              onChange={handleChange}
              value={data.NOMBRE}
            />
          </FormGroup>

          <FormGroup>
            <label>EMAIL:</label>
            <input
              className="form-control"
              name="EMAIL"
              type="text"
              onChange={handleChange}
              value={data.EMAIL}
            />
          </FormGroup>

          <FormGroup>
            <label>SALARIO:</label>
            <input
              className="form-control"
              name="SALARIO"
              type="text"
              onChange={handleChange}
              value={data.SALARIO}
            />
          </FormGroup>

          <FormGroup>
            <label>IMAGEN:</label>
            <input
              className="form-control"
              name="IMAGEN"
              type="text"
              onChange={handleChange}
              value={data.IMAGEN}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Insertar
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalEditarEmpleado;
