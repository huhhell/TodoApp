import {ICategory} from "../../../App.tsx";
import {useState} from "react";
import './categories.scss';

interface Props {
    categories: ICategory[]
    addCategory: (categoryName: string, color: string) => void
    selectCategory: (id: number) => void
    shown: boolean
    handleShown: () => void
}

export default function Categories({categories, addCategory, selectCategory, shown, handleShown}: Props) {
    const [isEditing, setIsEditing] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [newCategoryColor, setNewCategoryColor] = useState('#9a9a9a')

    function handleAddClick() {
        setIsEditing(true);
    }

    function handleAddBlur() {
        addCategory(newCategoryName, newCategoryColor);
        setNewCategoryName('');
        setNewCategoryColor('#9a9a9a')
        setIsEditing(false);
    }


    return <section className={shown ? 'categories categories-shown' : 'categories'}>
        <div className="categories-cnt">
            <button className="categories__close" onClick={handleShown}>
                <img src="/src/assets/img/close.svg" alt="close categories" className="categories__close-img"/>
            </button>
            <ul className="categories__list">
                {categories.map((i: ICategory) => <li className='categories__item' key={i.id}>
                    <button
                        onClick={() => selectCategory(i.id)}
                        className={i.selected ? 'categories__button categories__button-selected' : 'categories__button'}>
                        <div className="categories__button-color" style={{background: i.color}}></div>
                        <p className="categories__button-text">{i.name}</p>
                    </button>
                </li>)}
            </ul>
            {isEditing ?
                <div className='categories__add'>
                    <input
                        type="color"
                        className="categories__add-color"
                        value={newCategoryColor}
                        onChange={(e) => setNewCategoryColor(e.target.value)}/>
                    <input
                        type="text"
                        className="categories__add-input"
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        onBlur={handleAddBlur}
                    />
                </div>
                :
                <button className="categories__add-button" onClick={handleAddClick}>+ New category</button>
            }
        </div>
    </section>
}