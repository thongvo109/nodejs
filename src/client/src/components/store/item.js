import React from 'react';
import { Card, Button } from 'react-bootstrap';
const StoreItem = (props) => {
    const item = props.item;
    const key = props.item._id;

    return (
        <div className="col-lg-4 d-flex align-items-stretch mt-4">
            <div className="card card-course-item h-100">
                <a href="/courses/{{this.slug}}">
                    <img
                        class="card-img-top"
                        src={item.image}
                        alt={item.name}
                    />
                </a>
                <div className="card-body">
                    <a href="/courses/{{this.slug}}">
                        <h5 className="card-title">{item.name}</h5>
                    </a>

                    <a href="#" class="btn btn-primary">
                        {' '}
                        Mua khóa học
                    </a>
                </div>
            </div>
        </div>
    );
};

export default StoreItem;
