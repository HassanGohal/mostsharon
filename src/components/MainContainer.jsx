import React from "react";

const MainContainer = ({ children }) => {
    return (
        <div className="container mx-auto px-8 py-10">
            {children}
        </div>
    );
};

export default MainContainer;
