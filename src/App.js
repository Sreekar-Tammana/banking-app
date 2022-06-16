import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Services from './components/Services';
import Footer from './components/Footer';
import AllCustomers from './components/AllCustomers';
import Transactions from './components/Transactions';
import TransferFunds from './components/TransferFunds';
// import {app,database} from './firebaseConfig'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Navbar />
          <Route exact path="/">
            <Home />
            <Services />
          </Route>
          <Route exact path="/allCustomers" component={AllCustomers}></Route>
          <Route exact path="/transactions" component={Transactions}></Route>
          <Route exact path="/moneyTransfer" component={TransferFunds}></Route>
          <Footer />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
