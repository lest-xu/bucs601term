// created from the previous assignment 2
import './styles.css';
// integrated with bootstrap css that is mainly used for button styles
import './bootstrap.css';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Gallery from './components/gallery';
import Resume from './components/resume';
import Contact from './components/contact';
import Admin from './components/admin';
import NotFound from './components/notfound';
import Footer from './components/footer';
import { initializeApp } from "firebase/app";
import { getDatabase, Database } from "firebase/database";

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



function App() {
	return (
		<>
			<Header></Header>
			<div className='flex-container'>
				<Routes>
					<Route path='/' element={<Home database={db} />}></Route>
					<Route path='/home' element={<Home database={db} />}></Route>
					<Route path='/gallery' element={<Gallery database={db} />}></Route>
					<Route path='/resume' element={<Resume />}></Route>
					<Route path='/contact' element={<Contact database={db} />}></Route>
					<Route path='/admin' element={<Admin database={db} />}></Route>
					<Route path='*' element={<NotFound />}></Route>
				</Routes>
			</div>
			<Footer></Footer>
		</>
	)
}

export default App;
