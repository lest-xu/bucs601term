import { onValue, ref, set, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import iContact from '../interfaces/icontact';
import iExperience from '../interfaces/iexperience';
import iAppProps from '../interfaces/iappprops';
import ManageSkills from './modules/manageskills';

const Admin: React.FC<iAppProps> = ({ database }) => {

    const [experiences, setExperiences] = useState<iExperience[]>([]);
    const [contacts, setContacts] = useState<iContact[]>([]);
    const [skills, setSkills] = useState<string[]>([]);


    useEffect(() => {
        // fetch data from the database
        const fetchData = async () => {
            try {
                // get data from the database
                const contactsRef = () => ref(database, 'contacts/');
                onValue(contactsRef(), (snapshot) => {
                    const data = snapshot.val();
                    setContacts(data);
                });
                const skillsRef = () => ref(database, 'skills/');
                onValue(skillsRef(), (snapshot) => {
                    const data = snapshot.val();
                    setSkills(data);
                });

            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, [database]);

    const deleteContact = (index: number) => {
        console.log('index', index);
        // delete a contact item
        const contactRef = () => ref(database, 'contacts/' + index);
        remove(contactRef());
        //
    };

    const deleteSkill = (index: number) => {
        console.log('index', index);
        // delete a skill item
        const skillRef = () => ref(database, 'skills/' + index);
        remove(skillRef());
        //
    };

    return (
        <div className='flex-item mt-3'>
            <div className='container'>
                <h2 className='mb-3'>Portfolio Management</h2>
                <div className="card-header">Contact Feedbacks</div>
                <div className="card-body">
                    <div className='table-responsive-md'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email📧</th>
                                    <th scope="col">Phone📱</th>
                                    <th scope="col">Details</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts && Object.values(contacts).map((item: iContact, index) => (
                                    <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.firstname} {item.lastname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.details}</td>
                                        <td><button type='button' className='btn btn-danger btn-sm' onClick={() => deleteContact(item.id)}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='table-responsive-md'>
                    <div className="card-header">Skills Management</div>
                    <div className="card-body">
                        <ManageSkills database={database}></ManageSkills>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {skills && Object.values(skills).map((item: string, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <th scope="row">{item}</th>
                                        <td><button type='button' className='btn btn-danger btn-sm' onClick={() => deleteSkill(index)}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Admin;