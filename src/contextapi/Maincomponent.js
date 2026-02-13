import React from 'react';
import { CommonContext } from './CommonContext';
import Component1 from './Component1';
import Component2 from './Component2';

function Maincomponent() {
    return (
        <div>
            <CommonContext.Provider value={{ name: "abc", email: "abc@gmail.com" }}>
                <Component1 />
                <Component2 />
            </CommonContext.Provider>
        </div>
    );
}

export default Maincomponent;
