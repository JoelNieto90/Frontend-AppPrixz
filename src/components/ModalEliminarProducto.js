import React, { useState } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalEliminarEmpleado = (props) => {
  const { data, buttonLabel } = props;
  const [dataDelete, setDataDelete] = useState(data);

  const eliminar = (data) => {
    var opcion = window.confirm(
      "Seguro que deseas eliminar el elemento " + data.id
    );
    if (opcion == true) {
      var contador = 0;
      var arreglo = dataDelete;
      arreglo.map((data) => {
        if (dataDelete.id == data.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      setDataDelete({ data: arreglo });
    }
  };

  return (
    <div>
      <Button color="btn btn-danger" onClick={() => eliminar(data)}>
        {buttonLabel}
      </Button>
    </div>
  );
};

export default ModalEliminarEmpleado;
