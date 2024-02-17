import {ICategory} from "../../../App.tsx";
import './addTask.scss'

interface IProps {
    categories: ICategory[];
}
export default function AddTask({categories}: IProps) {

    return <div className='tasks__add'>
        <input type="text" className="tasks__add-input" placeholder='Add a new task'/>
        <select name="categories" id="categories" className="tasks__add-select">
            {categories.map((i: ICategory) => <option value={i.name}
                                                      key={i.id}
                                                      className='tasks__add-option'>{i.name}</option>)}
        </select>
    </div>
}