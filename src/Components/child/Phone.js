import React from 'react';
import { Tabs, Tab, Panel } from 'react-bootstrap';

const divStyle = {
    width: '50%',
    margin: '7px 27%'
};

const Phone = () => (
    <div>
        <Panel style={divStyle}>
            <Panel.Heading>Contact</Panel.Heading>
            <Panel.Body>1234567891</Panel.Body>
        </Panel>
    </div>
)

export default Phone;
