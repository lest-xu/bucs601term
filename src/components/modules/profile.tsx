import { Database, onValue, ref, set } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import iProfile from '../../interfaces/iprofile';

interface AppProps {
    database: Database;
}

const ProfileCard: React.FC<AppProps> = ({ database }) => {

    const [profile, setProfile] = useState<iProfile>();

    useEffect(() => {
        // fetch photos from the database
        const fetchData = async () => {
            try {
                // get profile details from the database
                const profileRef = () => ref(database, 'profile/');
                onValue(profileRef(), (snapshot) => {
                    const data = snapshot.val();
                    setProfile(data);
                });

            } catch (error) {
                console.error('Failed to fetch photos:', error);
            }
        };

        fetchData();
    }, [database]);

    return (
        <div className="card mb-3" >
            <div className="row no-gutters">
                <div className="col-md-4 p-2 mt-3 text-center">
                    <img src={profile?.profileImg} style={{ width: 100 }} alt="profile" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{profile?.firstname + ' ' + profile?.lastname}</h5>
                        <h5 className="card-title">{profile?.title}</h5>
                        <p className="card-text">{profile?.major}</p>
                        <p className="card-text"><small className="text-muted">{profile?.school}</small> - {profile?.country}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProfileCard;