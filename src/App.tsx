import './null.css';
import {useReducer, useState} from "react";
import Categories from "./assets/components/Categories/Categories.tsx";
import tasksReducer from "./assets/Contexts/TasksContext.tsx";
import AddTask from "./assets/components/AddTask/AddTask.tsx";
import Tasks from "./assets/components/Tasks/Tasks.tsx";

let categoryId = 6;

export type TaskState = 'done' | 'undone' | 'changing';

export interface ICategory {
    name: string
    id: number
    selected: boolean
    color: string;
}

export interface ITask {
    name: string;
    id: number;
    category: { name: string, color: string }
    state: TaskState;
}

const initialCategories: ICategory[] = [
    {name: 'All Tasks', id: 0, selected: true, color: '#ababab'},
    {name: 'Favorites', id: 1, selected: false, color: '#FF92E7'},
    {name: 'Work', id: 2, selected: false, color: '#2F80ED'},
    {name: 'Home', id: 3, selected: false, color: '#EB5757'},
    {name: 'Sports', id: 4, selected: false, color: '#9B51E1'},
    {name: 'Groceries', id: 5, selected: false, color: '#26AD60'}];

const initialTasks: ITask[] = [
    {name: 'wash the plate', id: 1, category: {name: 'Home', color: '#EB5757'}, state: 'undone'},
    {name: 'cook dinner', id: 2, category: {name: 'Home', color: '#EB5757'}, state: 'undone'},
    {name: 'go to the gym', id: 3, category: {name: 'Sports', color: '#9B51E1'}, state: 'undone'},
    {name: 'buy milk', id: 4, category: {name: 'Groceries', color: '#26AD60'}, state: 'undone'},
];

function App() {
    const [categories, setCategories] = useState(initialCategories);
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
    const activeCategory = categories.find(i => i.selected) || {name: 'All Tasks', id: 0, selected: true, color: '#ababab'}

    function addCategory(categoryName: string, color: string) {
        if (categoryName.match('^\\s*$')) return
        setCategories([...categories, {name: categoryName, id: categoryId++, selected: false, color: color}])
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

    return <div className='_container'>
        <Categories categories={categories} addCategory={addCategory} selectCategory={selectCategory}/>
        <section className="tasks">
            <h3 className='tasks__category'>{activeCategory.name}</h3>
            <AddTask category={activeCategory} addTask={handleAddTask}/>
            <Tasks tasks={tasks} deleteTask={handleDeleteTask} changeTask={handleChangeTask} activeCategory={activeCategory}/>
        </section>
    </div>
}

export default App
