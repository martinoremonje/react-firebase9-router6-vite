const About = () => { 
    return (
        <>
            <h1>About History of this Page: </h1>
            <p className="tracking-wide font-semibold italic text-blue-500">Bueno, nada más cree esta página como parte de un curso de React, utilicé en primera instancia Firebase para crear todo el backend, y de allí comencé el desarrollo de toda la interfaz simple: dos formularios con Formik y validaciones desde el frontend para ingresar o registrarse, ambos formularios con sus respectivas queries para efectivamente realizar la operación desde la base de datos de Firebase. Luego comencé el desarrollo de la aplicación en sí, que fue un simple formulario donde se pueden agregar URLS y guardarlas en esta base de datos de Firebase. Es un CRUD con todas sus características, o sea, crea, lee, actualiza y elimina data de la base de datos, todo a través de botones y un input. Con simples estados de React, un poco de contexto para manejar al usuario, se puede mantener una sesión activa y guardar toda la data de manera simple y eficiente.</p>
        </>
    )
 }

export default About