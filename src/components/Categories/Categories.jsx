import PropTypes from 'prop-types';
import Header from "../Header/Header";



const Categories = ({categoriesList}) => {
    return (
        <>
        <Header title={"Categories"}/>
        <ul>
        {categoriesList.map(({id, category}) => {
  return (<li key={id}>
  <button>{category}</button>
  <button>...</button>
</li>)
        })
        }
        </ul>
        <form>
            <input type="text" placeholder='New category'/>
        <button type="submit">+</button>
        </form>
        </>
    )
}

export default Categories;

Categories.propTypes = {
    categoriesList:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        category: PropTypes.string.isRequired,
    })).isRequired
}