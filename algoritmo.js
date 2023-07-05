const inputNombre = document.querySelector("#nombre");
const inputNota = document.querySelector("#nota-final");
const botonEnviar = document.querySelector ('button');

function recibirDatos(){
    const nombrealumno = inputNombre.value;
    const notaAlumno =inputNota.value;


    const alumnoJSON = JSON.stringify(nombrealumno);
    const notaJSON = JSON.stringify(notaAlumno);
    localStorage.setItem('alumno', JSON.stringify(inputNombre.value));
    localStorage.setItem('nota', JSON.stringify(inputNota.value));

 

}

