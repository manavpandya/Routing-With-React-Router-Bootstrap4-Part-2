import React from 'react';
import { Tabs, Tab, Panel } from 'react-bootstrap';

const divStyle = {
    width: '50%',
    margin: '7px 27%'
};

const Email = () => (
    <div>
        <Panel style={divStyle}>
            <Panel.Heading>Email</Panel.Heading>
            <Panel.Body>pandya.manav@gmail.com</Panel.Body>
        </Panel>
    </div>
)

export default Email;
