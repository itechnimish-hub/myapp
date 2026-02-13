import React from 'react';
import { CommonContext } from './CommonContext';
function Component1() {
    return (
        <CommonContext.Consumer >
            {
                (data) => (
                    <div>
                        {data.name}
                        {data.email}
                    </div>
                )
            }
        </CommonContext.Consumer>
    );
}
export default Component1;
