import React from 'react';
import { CommonContext } from './CommonContext';

function Component2() {
    return (
        <CommonContext.Consumer >
            {
                (data) => (
                    <div>
                        {data.name}
                    </div>
                )
            }
        </CommonContext.Consumer>
    );
}
export default Component2;
