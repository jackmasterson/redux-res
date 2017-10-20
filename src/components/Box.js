import React from 'react';

export const Box = (data) => {
    return (
        <div className={`box ${data.class}`}>
            <div className="shade">{data.title}</div>
        </div>
    );
}