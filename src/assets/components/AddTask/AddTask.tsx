import {ICategory, ITask} from "../../../App.tsx";
import './addTask.scss'
import React, {useState} from "react";


let nextId = 5;

interface IProps {
    categories: ICategory[];
    addTask: (task: ITask) => void;
}

export default function AddTask({categories, addTask}: IProps) {
    const [taskName, setTaskName] = useState('');
    const [category, setCategory] = useState('All Tasks');

    function findCategory(categoryName: string) {
        return categories.find((i: ICategory) => i.name === categoryName) || {name: 'All Tasks', color: '#ababab'}
    }

    function handleChangeCategory(e: React.ChangeEvent<HTMLSelectElement>) {
        setCategory(e.target.value)
    }

    function handleAddTask() {
        if (taskName.match('^\\s*$')) {
            setTaskName('')
            return
        }
        addTask({name: taskName, category: {name: category, color: findCategory(category).color}, id: nextId++, state: 'undone'})
        setTaskName('');
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
        <button className="tasks__add-submit" onClick={handleAddTask}>
            <img src="src/assets/img/tick.svg" alt="tick" className="tasks__add-submit-img"/>
        </button>
    </div>
}