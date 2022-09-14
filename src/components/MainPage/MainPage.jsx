import Header from "../Header/Header";
import TransactionForm from "../TransactionForm/TransactionForm";
import MainButtons from "../MainButtons/MainButtons"
import Categories from "../Categories/Categories"
import { categoriesList } from '../../data/CategoriesList';
import { Component } from "react";


export default class MainPage extends Component {
    
    state = {
        isCategories: false,
    }
openCategories = () => {
    this.setState({isCategories: true});
}

closeCategories = () => {
    this.setState({isCategories: false});
}
    render () {
        return (
        <>
        <Header title = "Журнал расходов"/>
        {!this.state.isCategories
        ? <>
        <TransactionForm
        openCategories ={this.openCategories}/>
        <MainButtons
            changePageHandler = {this.props.changePageHandler}/>
        </>
        : <Categories 
        closeCategories= {this.closeCategories}
        categoriesList = {categoriesList}/>
        }
        </>
        )  
    }
}