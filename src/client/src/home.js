import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavbarHome from './components/home/nav';
import Store from './components/store';
const Home = (props) => {
    const [user, setUser] = useState(null);

    const getUser = async () => {
        const res = await axios.get('/auth', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        setUser(res.data);
    };

    useEffect(() => {
        getUser();
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        props.history.push('/');
    };

    if (!localStorage.getItem('token')) {
        return (
            <Container fluid>
                <Store></Store>
            </Container>
        );
    } else {
        return (
            <div className="m-5">
                <div className="jumbotron">
                    <div className="lead">Welcome {user && user.name}</div>
                    <button className="btn btn-danger" onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>
        );
    }
};
export default Home;
