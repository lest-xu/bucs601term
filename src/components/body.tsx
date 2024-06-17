import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import Home from './home';
import Footer from './footer';
import Resume from './resume';
import Contact from './contact';
import Gallery from './gallery';
import Admin from './admin';
import NotFound from './notfound';
import { initializeApp } from "firebase/app";
import { getDatabase, Database } from "firebase/database";
import Header from './header';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-bkM3HDda1FrQTo5fTT3mjSyCHsiRjh0",
    authDomain: "my-portfolio-lx.firebaseapp.com",
    databaseURL: "https://my-portfolio-lx-default-rtdb.firebaseio.com",
    projectId: "my-portfolio-lx",
    storageBucket: "my-portfolio-lx.appspot.com",
    messagingSenderId: "667088423115",
    appId: "1:667088423115:web:07163e3536f01654ad334e",
    measurementId: "G-RBDTP53M05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const db: Database = getDatabase(app);

interface AppProps {
}

interface AppState {
    db: Database;
}

class Body extends React.Component<AppProps, AppState> {

    constructor(props: any) {
        super(props);
        this.state = { db: db};
    }

    render() {
        return (
            <>
                <Header></Header>
                <Routes>
                    <Route path='/' element={<Home database={this.state.db} />}></Route>
                    <Route path='/home' element={<Home database={this.state.db} />}></Route>
                    <Route path='/gallery' element={<Gallery database={this.state.db} />}></Route>
                    <Route path='/resume' element={<Resume />}></Route>
                    <Route path='/contact' element={<Contact database={this.state.db} />}></Route>
                    <Route path='/admin' element={<Admin database={this.state.db} />}></Route>
                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
                <Footer></Footer>
            </>
        );
    }
}

export default Body;