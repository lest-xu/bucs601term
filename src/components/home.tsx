import React from 'react';
import Sidebar from './sidebar';
import ExperienceList from './modules/experienceList';
import EducationList from './modules/educationList';
import iAppProps from '../interfaces/iappprops';

const Home: React.FC<iAppProps> = ({ database }) => {

    return (
        <>
            <main className="flex-item">
                <section className="leftside">
                    <h2>Experience</h2>
                    <div className="grid-container">
                        <ExperienceList database={database}></ExperienceList>
                    </div>
                    <h2 className='mt-5'>Education</h2>
                    <div className="grid-container">
                        <EducationList database={database}></EducationList>
                    </div>
                </section>
            </main>
            <div className="flex-item">
                <Sidebar database={database}></Sidebar>
            </div>
        </>
    );
}


export default Home;