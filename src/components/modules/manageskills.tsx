import { onValue, ref, set } from 'firebase/database';
import React, { useState } from 'react';
import Alert from './alert';
import iAppProps from '../../models/iappprops';


const ManageSkills: React.FC<iAppProps> = ({ database }) => {

    // form submission alert
    const [showAlert, setShowAlert] = useState(false);

    // state to manage form data
    const [formData, setFormData] = useState({
        name: ''
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
        const { name } = formData;

        // Get a list of contacts from the database
        const skillsRef = () => ref(database, 'skills/');
        let contactId = 0;
        onValue(skillsRef(), (snapshot) => {
            const data = snapshot.val();
            contactId += data && data.length ? data.length : 0;
        });

        // add a skill
        set(ref(database, 'skills/' + contactId), name);
        // show the alert after submitted
        setShowAlert(true);
        // automatically hide the alert after 5 seconds
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);

        // reset the form fields after submit
        setFormData({
            name: ''
        });
    };


    return (
        <div className='flex-item mb-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-8'>
                        {showAlert && <Alert msg='' />}
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className="col-5">Add a skill:</div>
                                <div className="col-4"><input
                                    type='text'
                                    className='form-control'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                /></div>
                                <div className="col-3"><button type='submit' className='btn btn-primary btn-sm'>Add</button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ManageSkills;