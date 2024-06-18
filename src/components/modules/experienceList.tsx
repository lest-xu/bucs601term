import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import iExperience from '../../interfaces/iexperience';
import iAppProps from '../../interfaces/iappprops';

const ExperienceList: React.FC<iAppProps> = ({ database }) => {

    const [experiences, seExperiences] = useState<iExperience[]>([]);

    useEffect(() => {
        // fetch data from the database 
        const fetchData = async () => {
            try {
                // get skills details from the database
                const expsRef = () => ref(database, 'experiences/');
                onValue(expsRef(), (snapshot) => {
                    const data = snapshot.val();
                    seExperiences(data);
                });
            } catch (error) {
                console.error('Failed to fetch photos:', error);
            }
        };

        fetchData();
    }, [database]);

    return (
        <div className="grid-container">
            {experiences && experiences.map((item: iExperience, index) => (
                <div key={index} className="grid-item">
                    <img src={item.logo} alt="Logo" />
                    <div className="grid-item-details">
                        <p><b>{item.title}</b></p>
                        <p>{item.company}</p>
                        <span className="text-muted">{item.start} - {item.end}</span> <br />
                        <span className="text-muted">{item.location}</span>
                    </div>
                </div>
            ))}

        </div>
    );
}


export default ExperienceList;