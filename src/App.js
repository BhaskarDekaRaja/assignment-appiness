// import logo from './logo.svg';
import './App.css';
import EmployeeList from './EmployeeListpage';
import LoginComponent from './loginComponent';
import { Provider } from 'react-redux';
import { store } from './store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";
import PrivateRoute from './Routes/PrivateRoute';

const history = createBrowserHistory();



function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router history={history}>
      <Switch>
      <Redirect exact from="/" to="/employeeList" />
          <PrivateRoute path="/employeeList" component={EmployeeList} />
          <Route path="/login" component={LoginComponent} />
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
