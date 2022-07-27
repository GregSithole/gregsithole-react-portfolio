import React from "react";
import { motion } from "framer-motion";

const TabPanel = ({ _isActive, children }) => {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`tab__panel${_isActive ? " is-active" : ""}`}>
            {children}
        </motion.div>
    );
};

export default TabPanel;
