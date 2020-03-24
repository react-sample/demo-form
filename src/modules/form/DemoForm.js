import React from 'react';
import { Typography } from '@material-ui/core';

const Copyright = () => (
    <Typography>
        {'Copyright © Your Website 2020.'}
    </Typography>
);


const DemoForm = () => {
    return (
        <div>
            <h1>Test</h1>
            <Copyright />
        </div>
    );
}

export default DemoForm;