import Header from "../Header/Header";
import TransactionForm from "../TransactionForm/TransactionForm";
import MainButtons from "../MainButtons/MainButtons"
import Categories from "../Categories/Categories"
import { categoriesList } from '../../data/CategoriesList';


export default function MainPage (props) {
    return (
    <>
    <Header title = "Журнал расходов"/>
    <main>
        <TransactionForm/>
        <MainButtons/>
        <Categories categoriesList = {categoriesList}/>
    </main>
    </>
    )
}