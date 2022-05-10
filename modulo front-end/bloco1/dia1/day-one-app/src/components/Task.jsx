import React from "react";
import '../index.css'

const Task = (value) => {
    const tarefas = ['Academia', 'Estudar', 'Almoço', 'Aula']
    const listaTarefas = tarefas.map(
        (t) => 
        <li>{t}</li>
    )
    return (
        <>
        {listaTarefas}
        </>
    )
}
export default Task