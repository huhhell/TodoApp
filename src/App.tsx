import './null.css';
import {useState} from "react";
import Categories from "./assets/components/Categories/Categories.tsx";

let categoryId = 6;

export interface Category {
    name: string
    id: number
    selected: boolean
}

const initialCategories: Category[] = [
    {name: 'All Tasks', id: 0, selected: true},
    {name: 'Favorites', id: 1, selected: false},
    {name: 'Work', id: 2, selected: false},
    {name: 'Home', id: 3, selected: false},
    {name: 'Sports', id: 4, selected: false},
    {name: 'Groceries', id: 5, selected: false}];

function App() {
    const [categories, setCategories] = useState(initialCategories);
    // const [tasks, setTasks] = useState();

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

    return <div className='_container'>
        <Categories categories={categories} addCategory={addCategory} selectCategory={selectCategory}/>
    </div>
}

export default App