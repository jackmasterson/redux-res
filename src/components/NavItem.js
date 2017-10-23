import React from 'react';
import { Link } from 'react-router-dom';

export const NavItem = (data) => (
    <div className="nav-item">
       <Link to={`/${data.href}`}>{data.text}</Link>
    </div>
)