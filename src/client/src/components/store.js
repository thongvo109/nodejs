import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StoreItem from './store/item';
const StorePage = () => {
    const [store, setStore] = useState([]);

    const loadItem = async () => {
        await axios
            .get('/api/store')
            .then((res) => {
                setStore(res.data.item);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        loadItem();
    }, []);

    return (
        <div className="container">
            <div className="mt-4">
                <div className="row">
                    {store.map((item) => (
                        <StoreItem key={item._id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StorePage;
