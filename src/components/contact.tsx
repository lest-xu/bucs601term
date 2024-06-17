import { onValue, ref, set } from 'firebase/database';
import React, { useState } from 'react';
import Alert from './modules/alert';
import iAppProps from '../interfaces/iappprops';

const Contact: React.FC<iAppProps> = ({ database }) => {

    // form submission alert
    const [showAlert, setShowAlert] = useState(false);

    // state to manage form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        details: ''
    });

    // handle change for form inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { firstName, lastName, email, phone, details } = formData;

        // Get a list of contacts from the database
        const contactsRef = () => ref(database, 'contacts/');
        let contactId = 0;
        onValue(contactsRef(), (snapshot) => {
            const data = snapshot.val();
            contactId += data && data.length ? data.length: 0;
        });

        // add a contact
        set(ref(database, 'contacts/' + contactId), {
            details: details,
            email: email,
            id: contactId,
            lastname: lastName,
            firstname: firstName,
            phone: phone
        });
        // show the alert after submitted
        setShowAlert(true);
        // automatically hide the alert after 5 seconds
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);

        // reset the form fields after submit
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            details: ''
        });
    };


    return (
        <div className='flex-item'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-10 col-lg-8'>
                        <h2>Contact Me</h2>
                        <p>Feel free to get in touch with me using the contact form below. Whether you have a project in mind, a question, or just want to say hello, I'd love to hear from you!</p>
                        {showAlert && <Alert msg=''/>}
                        <form onSubmit={handleSubmit}>
                            <div className='form-row'>
                                <div className='form-group col-md-6'>
                                    <label htmlFor='firstName'>First Name</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='firstName'
                                        name='firstName'
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='form-group col-md-6'>
                                    <label htmlFor='lastName'>Last Name</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='lastName'
                                        name='lastName'
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='phone'>Phone</label>
                                <input
                                    type='tel'
                                    className='form-control'
                                    id='phone'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='details'>Details</label>
                                <textarea
                                    className='form-control'
                                    id='details'
                                    name='details'
                                    rows={4}
                                    value={formData.details}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contact;