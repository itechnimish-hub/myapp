
import React, { useEffect } from "react";

const ComponentWithError = () => {
    useEffect(() => {
        throw new Error("Something went wrong!");
    }, []);

    return <div>
        This code handles errors properly
    </div>;
};

export default ComponentWithError;