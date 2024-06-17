import React from 'react';
import ProfileCard from './modules/profile';
import SkillsList from './modules/skillsList';
import iAppProps from '../models/iappprops';

const Sidebar: React.FC<iAppProps> = ({ database }) => {

    return (
        <div className="sidebar">
            <h2>Profile</h2>
            <ProfileCard database={database}></ProfileCard>
            <h2>Skills</h2>
           <SkillsList database={database}></SkillsList>
        </div>
    );
}


export default Sidebar;