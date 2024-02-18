import {ITask} from "../../../App.tsx";
import Task from "../Task/Task.tsx";
import './tasks.scss';

interface IProp {
    tasks: ITask[]
    deleteTask: (task: ITask) => void
    changeTask: (task: ITask) => void
}

export default function Tasks({tasks, deleteTask, changeTask}: IProp) {


    return <ul className='tasks__list'>
        {tasks.length === 0 ?
            <p className="tasks__list-empty">There is no tasks</p> :
            tasks.map(i => <Task task={i} changeTask={changeTask} deleteTask={deleteTask} key={i.id}/>)}
    </ul>
}