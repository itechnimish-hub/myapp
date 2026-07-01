import React from 'react';
import { CommonContext } from './CommonContext';

function Component2() {
    return (
        <CommonContext.Consumer >
            {
                (data) => (
                    <div>
                        <b>  {data.name}</b>
                        <b>  {data.email}</b>
                    </div>
                )
            }
        </CommonContext.Consumer>
    );
}
export default Component2;
