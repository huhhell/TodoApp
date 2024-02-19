import {ICategory, ITask} from "../../../App.tsx";
import Task from "../Task/Task.tsx";
import './tasks.scss';

interface IProp {
    tasks: ITask[]
    deleteTask: (task: ITask) => void
    changeTask: (task: ITask) => void
    activeCategory: ICategory
}

export default function Tasks({tasks, deleteTask, changeTask, activeCategory}: IProp) {
    const visibleTasks = activeCategory.name === 'All Tasks' ? [...tasks] : tasks.filter(i => i.category.name === activeCategory.name);


    return <ul className='tasks__list'>
        {visibleTasks.length === 0 ?
            <p className="tasks__list-empty">There is no tasks</p> :
            visibleTasks.map(i => <Task task={i} changeTask={changeTask} deleteTask={deleteTask} key={i.id}/>)}
    </ul>
}