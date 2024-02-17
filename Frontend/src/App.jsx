import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import './normalize.min.css'


function App() {

  return (
    <>    

      <div className="dashboard">
        
		{/*Sección de acceso*/}
		<section className="search-wrap">
			<div className="search">
				<label htmlFor="search">
					<i className="bi bi-search" style={{fontSize: "1.5rem", color: "cornflowerblue"}}></i>
					<input type="text" id="search"/>
				</label>
			</div>

			<div className="user-actions">
				<button>
					<a href="#"><i className="bi bi-person-add" style={{fontSize: "1.5rem", color: "cornflowerblue"}}></i></a>
				</button>
				<button>
					<a href="#"><i className="bi bi-person"
							style={{fontSize: "1.5rem", color: "cornflowerblue"}}></i></a>
				</button>
				<button>
					<a href="#"><i className="bi bi-box-arrow-right"
							style={{fontSize: "1.5rem", color: "cornflowerblue"}}></i></a>
				</button>
			</div>
		</section>
		{/*Fin Sección de acceso*/}
		{/*Sección menu*/}
		{/* <header className="menu-wrap">
			<figure className="user">
				<div className="user-avatar">
					<img src="./assets/img/logo-dh.png" alt="Logo Digital House	"/>
				</div>
				<figcaption>
					Digital House
				</figcaption>
			</figure>
			<nav>
				<section className="menu">
					<h3>Opciones</h3>
					<ul>
						<li>
							<a href="#">
								<i className="bi bi-building" style="font-size: 1.2rem; color: cornflowerblue;"></i>
								- Empresas
							</a>
						</li>
						<li>
							<a href="#">
								<i className="bi bi-person" style="font-size: 1.2rem; color: cornflowerblue;"></i>
								- Aspirantes
							</a>
						</li>
						<li>
							<a href="#">
								<i className="bi bi-list-check"></i>
								- Profesiones
							</a>
						</li>
						<li>
							<a href="#">
								<i className="bi bi-person-vcard" style="font-size: 1.2rem; color: cornflowerblue;"></i>
								- Postulate aquí
							</a>
						</li>
						<li>
							<a href="#">
								<i className="bi bi-chat-left-text"></i>
								- Contacto
							</a>
						</li>
					</ul>
				</section>
			</nav>
		</header> */}
		{/*Fin Sección menu*/}
		{/*Sección contenido*/}
		<main className="content-wrap">
			{/*Preventa*/}
			<header className="preventa">

				{/* <h2>Búsqueda y selección</h2>
				<p className="text-center h5">Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos.</p>
				<div>
					<img src="./assets/img/banner.jpg" alt="Rcursos Humanos"/>
				</div> */}
				
			{/*Fin Encabezado*/}	
			</header>
			{/*Fin Preventa*/}

			{/*Sección aspirantes*/}
			{/* <section className="content aspirantes">
				<h2>Aspirantes</h2>
				<article className="person-boxes">
					<div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
						<div className="box-avatar">
							<img src="./assets/img/foto1.jpg" alt="Gloria"/>
						</div>
						<div className="box-bio">
							<h2 className="bio-name">Gloria Medina</h2>
							<p className="bio-position">Administrador</p>
						</div>
						<div className="box-actions">
							<button>
								<i className="bi bi-star"></i>
							</button>
							<button>
								<i className="bi bi-chat"></i>
							</button>
							<button>
								<i className="bi bi-envelope"></i>
							</button>
						</div>
					</div>
					<div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
						<div className="box-avatar">
							<img src="./assets/img/foto2.jpg" alt="Daniel Fuentes"/>
						</div>
						<div className="box-bio">
							<h2 className="bio-name">Daniel Fuentes</h2>
							<p className="bio-position">Técnico de sonido</p>
						</div>
						<div className="box-actions">
							<button>
								<i className="bi bi-star"></i>
							</button>
							<button>
								<i className="bi bi-chat"></i>
							</button>
							<button>
								<i className="bi bi-envelope"></i>
							</button>
						</div>
					</div>
					<div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
						<div className="box-avatar">
							<img src="./assets/img/foto3.jpg" alt="Lee Chim"/>
						</div>
						<div className="box-bio">
							<h2 className="bio-name">Tim Tim</h2>
							<p className="bio-position">Linguista</p>
						</div>
						<div className="box-actions">
							<button>
								<i className="bi bi-star"></i>
							</button>
							<button>
								<i className="bi bi-chat"></i>
							</button>
							<button>
								<i className="bi bi-envelope"></i>
							</button>
						</div>
					</div>
					<div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
						<div className="box-avatar">
							<img src="./assets/img/foto4.jpg" alt="Rocio"/>
						</div>
						<div className="box-bio">
							<h2 className="bio-name">Rocio Carle</h2>
							<p className="bio-position">Profesor</p>
						</div>
						<div className="box-actions">
							<button>
								<i className="bi bi-star"></i>
							</button>
							<button>
								<i className="bi bi-chat"></i>
							</button>
							<button>
								<i className="bi bi-envelope"></i>
							</button>
						</div>
					</div>
					<div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
						<div className="box-avatar">
							<img src="./assets/img/foto5.jpg" alt="Vctor"/>
						</div>
						<div className="box-bio">
							<h2 className="bio-name">Victor Fuentes</h2>
							<p className="bio-position">Computista</p>
						</div>
						<div className="box-actions">
							<button>
								<i className="bi bi-star"></i>
							</button>
							<button>
								<i className="bi bi-chat"></i>
							</button>
							<button>
								<i className="bi bi-envelope"></i>
							</button>
						</div>
					</div>
					<div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
						<div className="box-avatar">
							<img src="./assets/img/foto6.jpg" alt="Luis"/>
						</div>
						<div className="box-bio">
							<h2 className="bio-name">Luis Fuentes</h2>
							<p className="bio-position">Economista</p>
						</div>
						<div className="box-actions">
							<button>
								<i className="bi bi-star"></i>
							</button>
							<button>
								<i className="bi bi-chat"></i>
							</button>
							<button>
								<i className="bi bi-envelope"></i>
							</button>
						</div>
					</div>
				</article>
			</section> */}
			{/*Fin sección aspirantes*/}
			{/*Sección de profesiones*/}
			{/* <section className="content profesiones">
				<h2 className="mt-3">Profesiones</h2>
				<div className="list-group shadow-sm p-3 mb-5 rounded">
					<h4 className="list-group-item list-group-item-action active text-center"
						aria-current="true">
						Listado de Profesiones
					</h4>
					<button type="button" className="list-group-item list-group-item-action text-center">Abogado</button>
					<button type="button" className="list-group-item list-group-item-action text-center">Arquitecto</button>
					<button type="button" className="list-group-item list-group-item-action text-center">Botánico</button>
					<button type="button"
						className="list-group-item list-group-item-action text-center">Computista</button>
					<button type="button" className="list-group-item list-group-item-action text-center">Economista</button>
					<button type="button" className="list-group-item list-group-item-action text-center">Técnico de sonido</button>
					<button type="button" className="list-group-item list-group-item-action text-center">Profesor</button>
					<button type="button" className="list-group-item list-group-item-action text-center">Linguista</button>
				</div>
			</section> */}
			{/*Fin sección profesiones*/}
		</main>
		{/*Fin Sección contenido*/}
	</div>
	{/*Fin Dashboard*/}
    </>
  )
}

export default App