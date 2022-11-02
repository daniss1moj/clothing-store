import './Categories.scss'
import CategoryItem from '../category-item/CategoryItem'
const Categories = (props) => {
    const {categories} = props
    
    const items = categories.map(({id, title, imageUrl})=> {
        return <CategoryItem key={id} title={title} imageUrl={imageUrl}/>
      })

    return (
        <div className="categories-container">
          {items}
        </div>
    )
}
 
export default Categories;

