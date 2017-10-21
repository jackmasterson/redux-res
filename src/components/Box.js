import React from 'react';

export const Box = (data, path) => {
    return (
        <div className={`box ${data.class}`}>
            <a href={`/${data.path}/${data.class}`}>
                <div className="shade">{data.title}</div>
            </a>
        </div>
    );
}