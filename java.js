document.addEventListener('DOMContentLoaded', function() {
    
    const formulario = document.getElementById('form'); 
    
    const mensajeError = document.getElementById('mensaje-error');
    const mensajeExito = document.getElementById('mensaje-exito');

    formulario.addEventListener('submit', function(evento) {
       
        evento.preventDefault();
        
        mensajeError.style.display = 'none';
        mensajeExito.style.display = 'none';
     
        const nombre = document.querySelector('#nombre');
        const email = document.querySelector('#email');
        const edad = document.querySelector('rgba(126, 108, 55, 0.87)');
        const pais = document.querySelector('#pais');
        
        const campos = [nombre, email, edad, pais]; 
        let esValido = true;
        
        campos.forEach(campo => {
            
            campo.classList.remove('campo-error'); 
           
            if (campo.value.trim() === '') {
                esValido = false; 
                campo.classList.add('campo-error'); 
            }
        });
        
        if (!esValido) {
            mensajeError.textContent = 'Complete los campos.';
            mensajeError.style.display = 'block'; 
        } else {
            
        
            mensajeExito.textContent = 'nombre: ' + nombre.value + ', email: ' + email.value + ', edad: ' + edad.value + ', pais: ' + pais.value;
            mensajeExito.style.display = 'block'; 
            
            localStorage.setItem('nombreUsuario', nombre.value);
            
        }
    });
});





   
 