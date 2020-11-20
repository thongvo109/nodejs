import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Home from './home';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
};
export default App;
