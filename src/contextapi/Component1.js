import React from 'react';
import { CommonContext } from './CommonContext';
function Component1() {
    return (
        <CommonContext.Consumer >
            {
                (data) => (
                    <div>
                        {data.name}<br />
                        {data.email}
                    </div>
                )
            }
        </CommonContext.Consumer>
    );
}
export default Component1;
