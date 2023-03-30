// El código va aquí -> 

let txtName = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let btnAdd = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");

let contadorProductos = document.getElementById("contadorProductos");
let productosTotal = document.getElementById("productosTotal");
let precioTotal = document.getElementById("precioTotal");

let isValid = true;
let idTimeout; 
let precio = 0;
let contador = 0;
let totalProductos = 0;
let costoTotal = 0;


btnClear.addEventListener("click", function(event){
    event.preventDefault();
    txtName.value="";
    txtNumber.value="";
    cuerpoTabla[0].innerHTML = "";

    contador = 0;
    totalProductos = 0;
    costoTotal = 0;
    contadorProductos.innerHTML ="0";
    productosTotal.innerHTML ="0";
    precioTotal.innerHTML = "$0";
    
    localStorage.setItem("contadorProductos",contador);
    localStorage.setItem("totalProductos", totalProductos);
    localStorage.setItem("costoTotal", costoTotal.toFixed(2));




}); //btnClear

function validarCantidad(){
    if (txtNumber.value.lenght ==0){
        return false;
    } //if

    if (isNaN(txtNumber.value)){
        return false;
    }//if

    if(parseFloat(txtNumber.value)<=0){
        return false;
    }//if

    return true;
}//validarCantidad cumpla con longitud, tipo de dato y sea numero

function getPrecio(){
   return Math.floor(Math.random()*50*100)/100;
}// getPrecio numeros al azar, el 50 es el floor y el *100/100 deja 2 decimales

btnAdd.addEventListener("click", function(event){
    event.preventDefault();
    isValid=true;
    console.log(getPrecio());
    clearTimeout(idTimeout);
    alertValidacionesTexto.innerHTML="";  //Este hace que se limpie el mensaje con cada click y no lo duplique
    alertValidaciones.style.display="none";
    let lista = "Los siguientes campos deben ser llenados correctamente: <ul>";
    // txtName.value = txtName.value.trim(); //limpia los espacios vacios de la barra espaciadora del principio y el final
    // console.log("border:", txtName.style.border); // muestra las propiedades del borde

    if (txtName.value.length<2){
        txtName.style.border = "solid thin red";
        lista += "<li>Se debe de escribir un nombre válida </li>";
        // alertValidacionesTexto.innerHTML = "Se debe escribir un nombre valido";
        alertValidaciones.style.display = "block";
        isValid = false;

    } else{
        txtName.style.border="";
    } //if txtName


    if (! validarCantidad ()){  // validarCantidad==False es lo mismo que el signo de admiración es una negación
        txtNumber.style.border = "solid thin red";
        lista += "<li>Se debe de escribir un cantidad válida </li>";
        // alertValidacionesTexto.innerHTML += "Se debe escribir un numero valido";
        alertValidaciones.style.display = "block";
        isValid = false;

    } else{
        txtNumber.style.border="";
    } //if txtNumber

    lista += "</ul>";
    alertValidacionesTexto.insertAdjacentHTML ("beforeend", lista);
    idTimeout = setTimeout (function(){
        alertValidaciones.style.display="none";
    }, 3000);

    if (isValid){
    precio=getPrecio();
    contador++;

let row= `<tr>  
            <th>${contador}</th>
            <td>${txtName.value}</td>
            <td>${txtNumber.value}</td>
            <td>$ ${precio}</td>
        </tr>`;

        cuerpoTabla[0].insertAdjacentHTML("beforeend",row);
        contadorProductos.innerHTML = contador;
        totalProductos += parseFloat(txtNumber.value);
        productosTotal.innerHTML = totalProductos;
        costoTotal += precio * parseFloat(txtNumber.value);
        precioTotal.innerHTML=`$ ${costoTotal.toFixed(2)}`; 
        localStorage.setItem("contadorProductos",contador);
        localStorage.setItem("totalProductos", totalProductos);
        localStorage.setItem("costoTotal", costoTotal.toFixed(2));
        txtName.value="";
        txtNumber.value="";
        txtName.focus(); //limpia los cambos con los de arriba y pone el foco en ese campo

    }// if isValid

});  //btnAgregar click


txtNumber.addEventListener("blur",function(event){
    event.preventDefault();
    txtNumber.value = txtNumber.value.trim();

}); //txtNumber.blur borra espacios vacios del princio y final cuando dejas de estar en el campo de escritura


txtName.addEventListener("blur",function(event){
    event.preventDefault();
    txtName.value = txtName.value.trim();

}); //txtName.blur



