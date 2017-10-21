import React from 'react';

export const NavItem = (data) => (
    <div>
        <a href={`/${data.href}`}>{data.text}</a>
    </div>
)