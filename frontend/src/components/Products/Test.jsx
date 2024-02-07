import { memo } from 'react'

function Test() {
    console.log("Test component")
    return (
        <h2>Test</h2>
    );
}

export default memo(Test);
