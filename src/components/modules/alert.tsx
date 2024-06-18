import React from 'react';

interface AlertProps {
    msg: string;
}

const Alert: React.FC<AlertProps> = ({ msg }) => {

    return (
        <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Thank you!</h4>
            <p>Thank you for contacting me, you message has been received.</p>
            <hr />
            <p className="mb-0">I will response back to you as soon as possible.</p>
        </div>
    );
}

export default Alert;