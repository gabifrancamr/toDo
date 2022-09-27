import React from "react"
import "./Tarefa.css"
import useListaTarefas from "../../services/ListaTarefas/useListaTarefas";
 
function Tarefa(props){
    const { atualizarStatus } = useListaTarefas()

    let classNomeTarefa = "tarefa"

    if(props.tarefa.concluida){
        classNomeTarefa += " concluída"
    }

    function checkboxOnChange(){
        atualizarStatus(props.tarefa)
    }


    return (
        <div className="tarefa-wrapper">
            <div className={classNomeTarefa}>{props.tarefa.descricao}</div>
            <input
                className="checkbox"
                type="checkbox"
                defaultChecked={props.tarefa.concluida}
                onChange={checkboxOnChange}
            />
        </div>
    )
}

export default Tarefa;