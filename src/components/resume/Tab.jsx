import React from 'react'

const Tab = ({ _onClick, _isActive, children }) => {
    return (
        <li
            className={`tab  ${_isActive ? "is-active" : ""}`}
            onClick={_onClick}>
            {children}
        </li>
    )
}

export default Tab