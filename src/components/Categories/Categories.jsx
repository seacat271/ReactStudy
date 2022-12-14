import PropTypes from 'prop-types';
import Header from "../Header/Header";



const Categories = ({ categoriesList, closeCategories }) => {
    return (
      <>
        <Header 
        btnContent={'back'} 
        title={'Categories'} 
        closeCategories={closeCategories} />
        <ul>
          {categoriesList.map(category => {
            return <li key={category.id}>{category.name}</li>;
          })}
        </ul>
        <form action="">
          <input type="text" placeholder="New category" />
          <button type="submit">+</button>
        </form>
      </>
    );
  };
  
  export default Categories;
  

Categories.propTypes = {
    categoriesList:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        category: PropTypes.string.isRequired,
    })).isRequired
}