function init(){

    var resumenButton = document.getElementById("resumen-button");
    var resetButton = document.getElementById("reset-button");
    var cantidad = document.getElementById("cantidad");
    var select = document.getElementById("categoria");
    var total = document.getElementById("total");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");

   select.addEventListener('change', establecerPrecioPorPersona);
     function establecerPrecioPorPersona() {
      let selectedOption = select.value;
      if (selectedOption === "estudiante") {
        var precioPorPersona = 40;
      } else if (selectedOption === "trainee") {
        var precioPorPersona = 100;
      } else if (selectedOption === "junior") {
        var precioPorPersona = 170;
      }
      console.log(selectedOption + " Precio por persona " + precioPorPersona);
      resumenButton.addEventListener('click', ($event) =>{
        $event.preventDefault();
      total.textContent = "Total a Pagar $ " + cantidad.value*precioPorPersona;
      });
    };
    cantidad.addEventListener("keyup", function(){
      console.log(this.value);
    })
    resetButton.addEventListener('click', function(){   
     total.textContent = "Total a Pagar $ ";
     
    })
};