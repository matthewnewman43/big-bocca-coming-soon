import React from 'react';

type DividerProps = {
    width?: string;
    marginBottom?: string;
};
const Divider = ({width = 'w-64', marginBottom = 'mb-4'}: DividerProps) => {
    return (
        <div className={`w-full ${marginBottom}`}>
            <div className={`h-1 mx-auto bg-primary ${width} opacity-25 my-0 py-0 rounded-t ${marginBottom}`}/>
        </div>
    );
};

export default Divider;
