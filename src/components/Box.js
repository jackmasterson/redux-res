import React from 'react';

export const Box = (data) => {
    return (
        <div className={`box ${data.class}`}>
            <a href={`/${data.path}/${data.class}`}>
                <div className="shade">{data.title}</div>
            </a>
        </div>
    );
}