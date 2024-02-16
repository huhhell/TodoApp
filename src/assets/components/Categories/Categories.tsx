import {Category} from "../../../App.tsx";
import {useState} from "react";

interface Props {
    categories: Category[]
    addCategory: (categoryName: string) => void
}

export default function Categories({categories, addCategory}: Props) {
    const [isEditing, setIsEditing] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState('');

    function handleAddClick() {
        setIsEditing(true);
    }

    function handleAddBlur() {
        addCategory(newCategoryName);
        setNewCategoryName('');
        setIsEditing(false);
    }


    return <section className='categories'>
        <ul className="categories__list">
            {categories.map((i: Category) => <li className='categories__item' key={i.id}>
                <button
                    className={i.selected ? 'categories__item categories__link-selected' : 'categories__link'}>
                    {i.name}</button>
            </li>)}
        </ul>
        {isEditing ?
            <input
                type="text"
                className="categories__add-input"
                onChange={(e) => setNewCategoryName(e.target.value)}
                onBlur={handleAddBlur}
            /> :
            <button className="categories__add-button" onClick={handleAddClick}>+ New category</button>
        }
    </section>
}