import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

const Purchase = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>Purchase for {id}</h1>
        </div>
    );
};

export default Purchase;