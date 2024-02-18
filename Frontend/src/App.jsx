import './App.css'
import './normalize.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import HeaderSearch from './components/Header/HeaderSearch'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import {Routes, Route} from 'react-router-dom';

function App() {
  return(
		<div className="dashboard">
			
			{/*Sección de acceso*/}
			<HeaderSearch />
			{/*Fin Sección de acceso*/}

			{/*Sección menu*/}
			{/* <Navbar /> */}
			{/*Fin Sección menu*/}

			{/*Sección contenido*/}
			<Content />
			{/*Fin Sección contenido*/}

			<Routes>
				<Route/>
			</Routes>
		</div>
	)
}

export default App;