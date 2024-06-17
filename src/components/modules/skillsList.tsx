import { Database, onValue, ref, set } from 'firebase/database';
import React, { useEffect, useState } from 'react';
interface AppProps {
    database: Database;
}

const SkillsList: React.FC<AppProps> = ({ database }) => {

    const [skills, seSkills] = useState<string[]>([]);

    useEffect(() => {
        // fetch photos from the database 
        const fetchData = async () => {
            try {
                // get skills details from the database
                const skillsRef = () => ref(database, 'skills/');
                onValue(skillsRef(), (snapshot) => {
                    const data = snapshot.val();
                    seSkills(data);
                });

            } catch (error) {
                console.error('Failed to fetch photos:', error);
            }
        };

        fetchData();
    }, [database]);

    return (
        <ul className="list-group">
            {skills.map((item: string, index) => (
                <li key={index} className="list-group-item">{item}</li>
            ))}
        </ul>
    );
}


export default SkillsList;