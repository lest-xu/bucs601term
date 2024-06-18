import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import iEducation from '../../interfaces/ieducation';
import iAppProps from '../../interfaces/iappprops';

const EducationList: React.FC<iAppProps> = ({ database }) => {

    const [edus, seEdus] = useState<iEducation[]>([]);

    useEffect(() => {
        // fetch data from the database 
        const fetchData = async () => {
            try {
                // get edu details from the database
                const edusRef = () => ref(database, 'educations/');
                onValue(edusRef(), (snapshot) => {
                    const data = snapshot.val();
                    seEdus(data);
                });
 
            } catch (error) {
                console.error('Failed to fetch photos:', error);
            }
        };

        fetchData();
    }, [database]);

    return (
        <div className="grid-container">
            {edus && edus.map((item: iEducation, index) => (
                <div key={index} className="grid-item">
                <img src={item.logo} alt="Logo" />
                <div className="grid-item-details">
                    <p><b>{item.school}</b></p>
                    <p>{item.major}</p>
                    <span className="text-muted">{item.start} - {item.end}</span> <br />
                </div>
            </div>
            ))}

        </div>
    );
}


export default EducationList;