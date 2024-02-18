import {ICategory, ITask} from "../../../App.tsx";
import './addTask.scss'
import React, {useState} from "react";

interface IProps {
    categories: ICategory[];
    addTask: (task: ITask) => void;
}

export default function AddTask({categories, addTask}: IProps) {
    const [taskName, setTaskName] = useState('');
    const [category, setCategory] = useState('All Tasks');

    function handleChangeCategory(e: React.ChangeEvent<HTMLSelectElement>) {
        setCategory(e.target.value)
    }

    return <div className='tasks__add'>
        <input
            type="text"
            className="tasks__add-input"
            value={taskName}
            placeholder='Add a new task'
            onChange={(e) => setTaskName(e.target.value)}/>
        <select name="categories" id="categories" className="tasks__add-select" onChange={handleChangeCategory}>
            {categories.map((i: ICategory) => <option value={i.name}
                                                      key={i.id}
                                                      className='tasks__add-option'>{i.name}</option>)}
        </select>
        <button className="tasks__add-submit">
            <img src="src/assets/img/tick.svg" alt="tick" className="tasks__add-submit-img"/>
        </button>
    </div>
}