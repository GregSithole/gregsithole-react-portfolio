import React from 'react'

const Tab = ({ _onClick, _isActive, children, _key }) => {
    return (
        <li
            key={_key}
            className={`tab${_isActive ? " is-active" : ""}`}
            onClick={_onClick}>
            {children}
        </li>
    )
}

export default Tab