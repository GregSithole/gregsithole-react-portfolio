import React from 'react'

const TabPanel = ({ _isActive, children }) => {
    return (
        <div className={`tab__panel${_isActive ? " is-active" : ""}`}>
            {children}
        </div>
    )
}

export default TabPanel