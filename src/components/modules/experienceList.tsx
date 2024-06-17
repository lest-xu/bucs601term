import { Database, onValue, ref, set } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import iExperience from '../../interfaces/iexperience';
interface AppProps {
    database: Database;
}


const ExperienceList: React.FC<AppProps> = ({ database }) => {

    const [experiences, seExperiences] = useState<iExperience[]>([]);

    useEffect(() => {
        // fetch data from the database 
        const fetchData = async () => {
            try {
                // get skills details from the database
                const expsRef = () => ref(database, 'experiences/');
                let photoId = 0;
                onValue(expsRef(), (snapshot) => {
                    const data = snapshot.val();
                    seExperiences(data);
                    photoId += data && data.length ? data.length : 0;
                });
                // add a photo
                // set(ref(database, 'experiences/' + photoId), {
                //     company: 'Microsoft',
                //     title: 'Software Engineer',
                //     start: 'Jun 2020',
                //     end: 'Jul 2022',
                //     location: 'Seattle, WA',
                //     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png'
                // });
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