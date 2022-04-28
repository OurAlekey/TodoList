import Reac, { useState, useEffect } from "react";

const initialFormValues = {
  title: "",
  description: "",
};

const TodoForm = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {
  const [formValues, setFomrValues] = useState(initialFormValues);
  const { title, description } = formValues;
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  useEffect(() => {
    if (todoEdit) {
      setFomrValues(todoEdit);
    } else {
      setFomrValues(initialFormValues);
    }
  }, [todoEdit]);

  const handleInputChange = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };

    setFomrValues(changedFormValues);
  };

  const handletSumit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Debes ingresar un titulo");
      return;
    }
    if (description.trim() === "") {
      setError("Debes ingresar una descripcion");
      return;
    }

    if (todoEdit) {
      //actualizando
      todoUpdate(formValues);
      setSuccessMessage("Actualizado con exito");
    } else {
      todoAdd(formValues);
      setSuccessMessage("Agregado con exito");
      setFomrValues(initialFormValues);
    }

    //Agregar tarea

    setTimeout(() => {
      setSuccessMessage(null);
    }, 2000);
    setError(null);
  };
  return (
    <div>
      <h2 className="text-center display-5">
        {todoEdit ? "Editar tarea" : "Nueva tarea"}
      </h2>

      {todoEdit && (
        <button
          onClick={() => setTodoEdit(null)}
          className="btn btn-primary btn-warning mb-2 "
        >
          Cancelar edicion
        </button>
      )}

      <form onSubmit={handletSumit}>
        <input
          type="text"
          placeholder="Titulo"
          className="form-control "
          value={title}
          name="title"
          onChange={handleInputChange}
        />

        <textarea
          placeholder="Descripcion"
          className="form-control mt-2"
          value={description}
          name="description"
          onChange={handleInputChange}
        ></textarea>
        <button className="btn btn-primary btn-block mt-2">
          {todoEdit ? "actualizar tarea" : "Nueva tarea"}
        </button>
      </form>
      {error ? <div className="aler alert-danger mt-3">{error}</div> : null}

      {successMessage ? (
        <div className="aler alert-success mt-3">{successMessage}</div>
      ) : null}
    </div>
  );
};

export default TodoForm;
