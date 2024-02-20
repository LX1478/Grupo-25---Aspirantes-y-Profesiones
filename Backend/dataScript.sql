USE recruitingRH;

INSERT INTO roles(name, description)
	VALUES("admin", "Administrador"),
    ("applicant", "Aspirante"),
    ("companie", "Empresa")
;

INSERT INTO professions(name, description)
VALUES
    ("Abogado", "Profesional especializado en derecho y asuntos legales"),
    ("Administrador", "Persona encargada de la gestión y dirección de una empresa u organización"),
    ("Arquitecto", "Profesional encargado del diseño y construcción de edificios y estructuras"),
    ("Botánico", "Experto en el estudio de las plantas"),
    ("Computista", "Profesional de la informática o la computación"),
    ("Economista", "Persona especializada en el estudio de la economía"),
    ("Técnico de sonido", "Persona encargada de la operación y mantenimiento de equipos de sonido"),
    ("Técnico electrónico", "Profesional especializado en el área de la electrónica"),
    ("Profesor", "Educador encargado de impartir conocimientos en instituciones educativas"),
    ("Linguista", "Experto en el estudio científico del lenguaje y las lenguas")
;

INSERT INTO applicants(dni, name, surname, description, email, password, phone, urlLinkedin, dateOfBirth, sex, image, location, professionId)
VALUES
    (46234865, "Gloria", "Medina", "Profesional especializado en gestión de recursos humanos", "gloriamedina@gmail.com", "password123", "+54 9 223 123-4567", "www.linkedin.com/in/Gloria-Medina", "2000-11-02", "Femenino", "applicant1.jpg", "Argentina, Buenos Aires, Ciudad Autónoma de Buenos Aires", 2),
    (12345678, "Juan", "Perez", "Experto en análisis de datos y estadísticas", "juanperez@gmail.com", "password123", "+54 9 223 234-5678", "www.linkedin.com/in/Juan-Perez", "1995-03-15", "Masculino", "applicant2.jpg", "Argentina, Córdoba, Córdoba", 1),
    (59765432, "María", "López", "Especialista en diseño gráfico y creatividad", "marialopez@gmail.com", "password123", "+54 9 223 345-6789", "www.linkedin.com/in/María-López", "1998-08-20", "Femenino", "applicant3.jpg", "Argentina, Santa Fe, Rosario", 4),
    (34567891, "Carlos", "González", "Desarrollador web con experiencia en varios frameworks", "carlosgonzalez@gmail.com", "password123", "+54 9 223 456-7890", "www.linkedin.com/in/Carlos-González", "1992-05-10", "Masculino", "applicant4.jpg", "Argentina, Mendoza, Mendoza", 5),
    (56789123, "Ana", "Martínez", "Analista financiera con amplio conocimiento en inversiones", "anamartinez@gmail.com", "password123", "+54 9 223 567-8901", "www.linkedin.com/in/Ana-Martínez", "1997-12-25", "Femenino", "applicant5.jpg", "Argentina, Salta, Salta", 6),
    (78912345, "Pedro", "Rodríguez", "Experto en redes y seguridad informática", "pedrorodriguez@gmail.com", "password123", "+54 9 223 678-9012", "www.linkedin.com/in/Pedro-Rodríguez", "1990-09-30", "Masculino", "applicant6.jpg", "Argentina, Tucumán, San Miguel de Tucumán", 7),
    (91234567, "Laura", "García", "Profesional en marketing digital y estrategias online", "lauragarcia@gmail.com", "password123", "+54 9 223 789-0123", "www.linkedin.com/in/Laura-García", "1994-04-05", "Femenino", "applicant7.jpg", "Argentina, Buenos Aires, La Plata", 8),
    (23456789, "Miguel", "Fernández", "Consultor empresarial con experiencia en startups", "miguelfernandez@gmail.com", "password123", "+54 9 223 890-1234", "www.linkedin.com/in/Miguel-Fernández", "1988-07-17", "Masculino", "applicant8.jpg", "Argentina, San Juan, San Juan", 9),
    (45678912, "Sofía", "Díaz", "Psicóloga clínica con enfoque en terapia cognitivo-conductual", "sofiadiaz@gmail.com", "password123", "+54 9 223 901-2345", "www.linkedin.com/in/Sofía-Díaz", "1996-02-28", "Femenino", "applicant9.jpg", "Argentina, Santa Fe, Santa Fe", 10),
    (67891234, "José", "Sánchez", "Desarrollador de aplicaciones móviles para sistemas iOS y Android", "josesanchez@gmail.com", "password123", "+54 9 223 012-3456", "www.linkedin.com/in/José-Sánchez", "1993-10-12", "Masculino", "applicant10.jpg", "Argentina, Buenos Aires, Bahía Blanca", 5),
    (89123456, "Lucía", "Hernández", "Diseñadora de moda con experiencia en diseño de prendas de alta costura", "luciahernandez@gmail.com", "password123", "+54 9 223 123-4567", "www.linkedin.com/in/Lucía-Hernández", "1999-06-18", "Femenino", "applicant11.jpg", "Argentina, Neuquén, Neuquén", 1),
    (10987654, "Diego", "Torres", "Fotógrafo profesional especializado en fotografía de retratos y eventos", "diegotorres@gmail.com", "password123", "+54 9 223 234-5678", "www.linkedin.com/in/Diego-Torres", "1991-09-08", "Masculino", "applicant12.jpg", "Argentina, Buenos Aires, Mar del Plata", 3),
    (98765432, "Andrés", "Gómez", "Ingeniero de software con experiencia en desarrollo de aplicaciones web", "andresgomez@gmail.com", "password123", "+54 9 223 345-6789", "www.linkedin.com/in/Andrés-Gómez", "1997-10-30", "Masculino", "applicant13.jpg", "Argentina, Buenos Aires, Ciudad Autónoma de Buenos Aires", 2)
;

INSERT INTO companies(name, description, industry, website, email, password, location)
VALUES
    ("Tecnología Avanzada SA", "Empresa líder en desarrollo de software y soluciones tecnológicas", "Tecnología", "http://www.tecnologiaavanzada.com.ar", "info@tecnologiaavanzada.com.ar", "password123", "Buenos Aires, Argentina"),
    ("Industrias del Sur SRL", "Fabricante de productos industriales y maquinaria pesada", "Manufactura", "http://www.industriasdelsur.com.ar", "info@industriasdelsur.com.ar", "password123", "Córdoba, Argentina"),
    ("Alimentos Frescos SA", "Productor de alimentos frescos y saludables", "Alimentación", "http://www.alimentosfrescos.com.ar", "info@alimentosfrescos.com.ar", "password123", "Rosario, Argentina"),
    ("Energía Solar Verde SA", "Empresa especializada en energía solar y renovable", "Energía", "http://www.energiasolarverde.com.ar", "info@energiasolarverde.com.ar", "password123", "Mendoza, Argentina"),
    ("Consultoría Empresarial Total", "Proveedor de servicios de consultoría para empresas", "Consultoría", "http://www.consultoriaempresarial.com.ar", "info@consultoriaempresarial.com.ar", "password123", "Buenos Aires, Argentina"),
    ("Jardines del Norte", "Vivero especializado en plantas ornamentales y jardinería", "Jardinería", "http://www.jardinesdelnorte.com.ar", "info@jardinesdelnorte.com.ar", "password123", "Salta, Argentina")
;

