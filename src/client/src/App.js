import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Home from './home';
import NavBar from './components/home/nav';
const App = () => {
    return (
        <BrowserRouter>
            <NavBar></NavBar>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
};
export default App;
