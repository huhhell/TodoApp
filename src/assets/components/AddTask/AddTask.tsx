import {ICategory, ITask} from "../../../App.tsx";
import './addTask.scss'
import {useState} from "react";
import tickImg from '../../img/tick.svg';


let nextId = 5;

interface IProps {
    category: ICategory;
    addTask: (task: ITask) => void;
}

export default function AddTask({category, addTask}: IProps) {
    const [taskName, setTaskName] = useState('');

    function handleAddTask() {
        if (taskName.match('^\\s*$')) {
            setTaskName('')
            return
        }
        addTask({name: taskName, category: {name: category.name, color: category.color}, id: nextId++, state: 'undone'})
        setTaskName('');
    }

    return <div className='tasks__add'>
        <input
            type="text"
            className="tasks__add-input"
            value={taskName}
            placeholder='Add a new task'
            onChange={(e) => setTaskName(e.target.value)}/>
        <button className="tasks__add-submit" onClick={handleAddTask}>
            <img src={tickImg} alt="tick" className="tasks__add-submit-img"/>
        </button>
    </div>
}