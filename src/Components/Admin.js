import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const Admin = () => {

  return (
    <div className='container-fluid' id="admin">
      <h1 className="h4">Admin</h1>
      <h2 className="h5">Criação de Tarefas</h2>
      {/* Formulário de criação de tarefas */}
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Nome da tarefa" />
          <textarea  placeholder='descrição'></textarea>
        </div>
      </form>

      <h2 className="h5">Atribuição de Tarefas</h2>
      {/* Lista de tarefas */}
      <ul>
        <li>
          <input type="checkbox" />
          Tarefa 1
        </li>
        <li>
          <input type="checkbox" />
          Tarefa 2
        </li>
        <li>
          <input type="checkbox" />
          Tarefa 3
        </li>
      </ul>

      <button className="btn btn-primary">Atribuir Tarefa</button>

      <h2 className="h5">Validação de Tarefas</h2>
      {/* Lista de tarefas a serem validadas */}
      <ul>
        <li>
          <input type="checkbox" />
          Tarefa 1
        </li>
        <li>
          <input type="checkbox" />
          Tarefa 2
        </li>
        <li>
          <input type="checkbox" />
          Tarefa 3
        </li>
      </ul>

      <button className="btn btn-primary">Validar Tarefa</button>
    </div>
  );
};

export default Admin;
//como dizer
