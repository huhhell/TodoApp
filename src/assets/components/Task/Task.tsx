import {ITask} from "../../../App.tsx";


interface IProps {
    task: ITask
    changeTask: (task: ITask) => void
    deleteTask: (task: ITask) => void
}

export default function Task({task, changeTask, deleteTask}: IProps) {

    switch (task.state) {
        case 'done':
            return <li className='tasks__item'>
                <input type="checkbox" className='tasks__item-check' checked={true}/>
                <p className="tasks__item-name tasks__item-name-done">{task.name}</p>
                <p className="tasks__item-category">{task.category}</p>
                <button className="tasks__item-delete">
                    <img src="/src/assets/img/delete.svg" alt="delete" className="tasks__item-delete-img"/>
                </button>
                <button className="tasks__item-edit">
                    <img src="/src/assets/img/edit.svg" alt="edit" className="tasks__item-edit-img"/>
                </button>
            </li>
        case 'undone':
            return <li className='tasks__item'>
                <input type="checkbox" className='tasks__item-check' checked={false}/>
                <p className="tasks__item-name">{task.name}</p>
                <p className="tasks__item-category">{task.category}</p>
                <button className="tasks__item-delete">
                    <img src="/src/assets/img/delete.svg" alt="" className="tasks__item-delete-img"/>
                </button>
                <button className="tasks__item-edit">
                    <img src="/src/assets/img/edit.svg" alt="edit" className="tasks__item-edit-img"/>
                </button>
            </li>
        case 'changing':
            return <li className='tasks__item'>
                <input type="text" className='tasks__item-changing' value={task.name}/>
                <p className="tasks__item-category">{task.category}</p>
                <button className="tasks__item-delete">
                    <img src="/src/assets/img/delete.svg" alt="" className="tasks__item-delete-img"/>
                </button>
                <button className="tasks__item-submit">
                    <img src="/src/assets/img/tick-black.svg" alt="submit" className="tasks__item-submit-img"/>
                </button>
            </li>
    }
}