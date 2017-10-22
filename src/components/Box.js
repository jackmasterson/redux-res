import React from 'react';
import {Link} from 'react-router-dom';

export const Box = (data) => {
    return (
        <div className={`box ${data.class}`}>
            <Link 
                to={`/${data.path}/${data.class}`}>
                <div className="shade">{data.title}</div>
            </Link>
        </div>
    );
}