import {ITask, TaskState} from "../../../App.tsx";
import React from "react";
import deleteImg from '../../img/delete.svg';
import editImg from '../../img/edit.svg';
import tickImg from '../../img/tick-black.svg';


interface IProps {
    task: ITask
    changeTask: (task: ITask) => void
    deleteTask: (task: ITask) => void
}

export default function Task({task, changeTask, deleteTask}: IProps) {

    function handleChangeCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
        let newState: TaskState = e.target.checked ? 'done' : 'undone';
        changeTask({...task, state: newState})
    }

    function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        changeTask({...task, name: e.target.value})
    }

    function handleEditingTask() {
        let newState: TaskState = task.state === 'changing' ? 'undone' : 'changing';
        changeTask({...task, state: newState})
    }

    function handleDeleteTask() {
        deleteTask({...task});
    }

    switch (task.state) {
        case 'done':
            return <li className='tasks__item'>
                <input type="checkbox" className='tasks__item-check' checked={true} onChange={handleChangeCheckbox}/>
                <p className="tasks__item-name tasks__item-name-done">{task.name}</p>
                <p className="tasks__item-category" style={{background: task.category.color}}>{task.category.name}</p>
                <button className="tasks__item-delete" onClick={handleDeleteTask}>
                    <img src={deleteImg} alt="delete" className="tasks__item-delete-img"/>
                </button>
                <button className="tasks__item-edit" onClick={handleEditingTask}>
                    <img src={editImg} alt="edit" className="tasks__item-edit-img"/>
                </button>
            </li>
        case 'undone':
            return <li className='tasks__item'>
                <input type="checkbox" className='tasks__item-check' checked={false} onChange={handleChangeCheckbox}/>
                <p className="tasks__item-name">{task.name}</p>
                <p className="tasks__item-category" style={{background: task.category.color}}>{task.category.name}</p>
                <button className="tasks__item-delete" onClick={handleDeleteTask}>
                    <img src={deleteImg} alt="" className="tasks__item-delete-img"/>
                </button>
                <button className="tasks__item-edit" onClick={handleEditingTask}>
                    <img src={editImg} alt="edit" className="tasks__item-edit-img"/>
                </button>
            </li>
        case 'changing':
            return <li className='tasks__item'>
                <input type="text" className='tasks__item-changing' value={task.name} onChange={handleChangeInput}/>
                <p className="tasks__item-category" style={{background: task.category.color}}>{task.category.name}</p>
                <button className="tasks__item-delete" onClick={handleDeleteTask}>
                    <img src={deleteImg} alt="" className="tasks__item-delete-img"/>
                </button>
                <button className="tasks__item-submit" onClick={handleEditingTask}>
                    <img src={tickImg} alt="submit" className="tasks__item-submit-img"/>
                </button>
            </li>
    }
}