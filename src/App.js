
import {Component} from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import TransactionHistoryPage from "./components/TransactionHistoryPage/TransactionHistoryPage";

export class App extends Component {
  state = {
  activePage: "main",
  }

  changePageHandler = (page) => {
    this.setState({activePage: page})
  }
 

 render () { 
  return (
    <div className="App">
      {this.state.activePage === 'main' ? <MainPage
      changePageHandler ={this.changePageHandler}/> 
      : <TransactionHistoryPage
          changePageHandler={this.changePageHandler}
          transactionType = {this.state.activePage}/>}
    </div>
  )};
}


