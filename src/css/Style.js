import React, { useState } from 'react';
import './style.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';

export default function Style() {


    return (
        <div>
            <Button variant="primary">
                Profile <Badge bg="secondary">9</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
            <Button variant="success">Success</Button>
            <Alert variant="success">
                This is a  alert—check it out!
            </Alert>
            <Button variant="primary">Primary</Button>
            <h1 className="heading">Hello, World!</h1>
        </div>
    );
}