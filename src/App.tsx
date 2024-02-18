import './null.css';
import {useReducer, useState} from "react";
import Categories from "./assets/components/Categories/Categories.tsx";
import tasksReducer from "./assets/Contexts/TasksContext.tsx";
import AddTask from "./assets/components/AddTask/AddTask.tsx";
import Tasks from "./assets/components/Tasks/Tasks.tsx";

let categoryId = 6;

export interface ICategory {
    name: string
    id: number
    selected: boolean
}
export interface ITask {
    name: string;
    id: number;
    category: string;
    state: 'done' | 'undone' | 'changing';
}

const initialCategories: ICategory[] = [
    {name: 'All Tasks', id: 0, selected: true},
    {name: 'Favorites', id: 1, selected: false},
    {name: 'Work', id: 2, selected: false},
    {name: 'Home', id: 3, selected: false},
    {name: 'Sports', id: 4, selected: false},
    {name: 'Groceries', id: 5, selected: false}];
const initialTasks: ITask[] = [
    {name: 'wash the plate', id: 1, category: 'Home', state: 'done'},
    {name: 'cook dinner', id: 2, category: 'Home', state: 'undone'},
    {name: 'go to the gym', id: 3, category: 'Sports', state: 'changing'},
    {name: 'buy milk', id: 4, category: 'Groceries', state: 'undone'},
];

function App() {
    const [categories, setCategories] = useState(initialCategories);
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
    const activeCategory = categories.filter(i => i.selected)[0].name

    function addCategory(categoryName: string) {
        if (categoryName.match('^\\s*$')) return
        setCategories([...categories, {name: categoryName, id: categoryId++, selected: false}])
    }

    function selectCategory(id: number) {
        setCategories(categories.map(category => {
            if (category.id === id) {
                return {...category, selected: true}
            } else {
                return {...category, selected: false}
            }
        }))
    }

    function handleAddTask(task: ITask) {
        dispatch({type: 'add', task: task})
    }

    function handleDeleteTask(task: ITask) {
        dispatch({type: 'delete', task: task})
    }

    function handleChangeTask(task: ITask) {
        dispatch({type: 'change', task: task})
    }

    console.log(tasks)

    return <div className='_container'>
        <Categories categories={categories} addCategory={addCategory} selectCategory={selectCategory}/>
        <section className="tasks">
            <h3 className='tasks__category'>{activeCategory}</h3>
            <AddTask categories={categories} addTask={handleAddTask}/>
            <Tasks tasks={tasks} deleteTask={handleDeleteTask} changeTask={handleChangeTask} />
        </section>
    </div>
}

export default App
