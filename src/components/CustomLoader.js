import React from 'react';
import { Loader } from 'rsuite';
import { Placeholder } from 'rsuite';
const { Paragraph } = Placeholder;

function CustomLoader() {
    return (
        <div>
            <Paragraph rows={8}>
                <Loader backdrop content="loading..." vertical />
            </Paragraph>        
        </div>
    )
}

export default CustomLoader;
