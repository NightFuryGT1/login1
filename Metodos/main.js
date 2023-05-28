function acceso (){
window.location='newton.ejs';
}


  function primer(){
      function newtonRaphson(funcion, derivada, x0, iteraciones) {
          // Definir la función evaluada en un punto dado
          const evaluarFuncion = (x) => eval(funcion);
        
          // Definir la derivada evaluada en un punto dado
          const evaluarDerivada = (x) => eval(derivada);
        
          // Inicializar el valor de x con el valor inicial proporcionado
          let x = x0;
        
          // Inicializar arrays para almacenar los resultados y los procedimientos
          const resultados = [];
          const errores = [];
          const procedimientos = [];
        
          // Realizar las iteraciones
          for (let i = 0; i < iteraciones; i++) {
            const fx = evaluarFuncion(x);
            const dfx = evaluarDerivada(x);
        
            // Calcular el siguiente valor de x utilizando la fórmula de Newton-Raphson
            const xn = x - fx / dfx;
        
            // Calcular el error absoluto
            const error = Math.abs(fx);
        
            // Almacenar el resultado, el error y el procedimiento en los arrays correspondientes
            resultados.push(xn);
            errores.push(error);
            procedimientos.push(`Iteración ${i + 1}: x = ${xn.toFixed(6)}, Error = ${error.toFixed(6)}`);
        
            // Actualizar el valor de x para la siguiente iteración
            x = xn;
          }
        
          return { resultados, errores, procedimientos };
        }
        
        // Ejemplo de uso
        let funcion = document.getElementById("funcion").value; 
        let derivada = document.getElementById("derivada").value; 
        let x0 = document.getElementById("ValorI").value; 
        let iteraciones = document.getElementById("Iteraciones").value; 
        
        //Enviar al div el resultado
       //Realizar una tabla por metodo en la base de datos.
  
        const { procedimientos } = newtonRaphson(funcion, derivada, x0, iteraciones);
        
        console.log("Procedimientos:");
        procedimientos.forEach((procedimiento) => {
          console.log(procedimiento);
        });
  
  }