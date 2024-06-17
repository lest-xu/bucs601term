import { Database, onValue, ref, set } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import iEducation from '../../models/ieducation';

interface AppProps {
    database: Database;
}

const EducationList: React.FC<AppProps> = ({ database }) => {

    const [edus, seEdus] = useState<iEducation[]>([]);

    useEffect(() => {
        // fetch data from the database 
        const fetchData = async () => {
            try {
                // get skills details from the database
                const edusRef = () => ref(database, 'educations/');
                let photoId = 0;
                onValue(edusRef(), (snapshot) => {
                    const data = snapshot.val();
                    seEdus(data);
                    photoId += data && data.length ? data.length : 0;
                });
                // add a photo
                // set(ref(database, 'educations/' + photoId), {
                //     school: 'Boston University',
                //     major: 'Master of Science - Computer Science',
                //     start: 'Sep 2022',
                //     end: 'Present',
                //     logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWknAqDQYsn3yxZ0t1XppHYyU0_yGSdImerMpQ9LVbVcRUGYYhsn-EZ_bTm_4N4NSolOM&usqp=CAU'
                // }); 
                // set(ref(database, 'educations/' + photoId), {
                //     school: 'York University',
                //     major: 'Bachelors degree - Honours, Information',
                //     start: 'Sep 2016',
                //     end: 'Jun 2020',
                //     logo: 'https://ucarecdn.com/13a094c1-c8f0-468d-a903-5736eb75b79d/'
                // });
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