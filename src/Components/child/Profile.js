import React from 'react';
import { Tabs, Tab, Panel } from 'react-bootstrap';

const divStyle = {
    width: '50%',
    margin: '7px 27%'
};

const Profile = () => (
    <div>
        <Panel style={divStyle}>
            <Panel.Heading>Profile Page </Panel.Heading>
            <Panel.Body><a href="https://www.dotnettricks.com/mentor/manav">Click Here</a></Panel.Body>
        </Panel>
    </div>
)

export default Profile;
