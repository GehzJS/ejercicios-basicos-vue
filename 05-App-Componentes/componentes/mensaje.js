 // Creación de un componente de Vue.
 Vue.component('mensaje', {

     // Plantilla HTML del componente (Siempre encerrada en un div).
     template: // html
         `
        <div>
            <h3>{{mensaje}}</h3>
            <p>Componente de Vue</p>
        </div>
    `,

     // Datos del componente. (Cómo función y no como objeto).
     data() {

         // Se crean los datos y retornan en un objeto.
         return {
             mensaje: 'Principios de Vue'
         }
     }
 });