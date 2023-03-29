// El código va aquí -> 

let txtName = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let btnAdd = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");


btnClear.addEventListener("click", function(event){
    event.preventDefault();
    txtName.value="";
    txtNumber.value="";



});

btnAdd.addEventListener("click", function(event){
    event.preventDefault();
    alertValidacionesTexto.innerHTML="";  //Este hace que se limpie el mensaje con cada click y no lo duplique
    alertValidaciones.style.display="none";
    let lista = "Los siguientes campos deben ser llenados correctamente: <ul>";
    // txtName.value = txtName.value.trim(); //limpia los espacios vacios de la barra espaciadora del principio y el final
    // console.log("border:", txtName.style.border); // muestra las propiedades del borde

    if (txtName.value.length==0){
        txtName.style.border = "solid thin red";
        lista += "<li>Se debe de escribir un nombre válida </li>";
        // alertValidacionesTexto.innerHTML = "Se debe escribir un nombre valido";
        alertValidaciones.style.display = "block";

    } else{
        txtName.style.border="";
    } //if txtName


    if (txtNumber.value.length==0){
        txtNumber.style.border = "solid thin red";
        lista += "<li>Se debe de escribir un cantidad válida </li>";
        // alertValidacionesTexto.innerHTML += "Se debe escribir un numero valido";
        alertValidaciones.style.display = "block";

    } else{
        txtNumber.style.border="";
    } //if txtNumber
    lista += "</ul>";
    alertValidacionesTexto.insertAdjacentHTML ("beforeend", lista);


});  //btnAgregar click


txtNumber.addEventListener("blur",function(event){
    event.preventDefault();
    txtNumber.value = txtNumber.value.trim();

}); //txtNumber.blur borra espacios vacios del princio y final cuando dejas de estar en el campo de escritura


txtName.addEventListener("blur",function(event){
    event.preventDefault();
    txtName.value = txtName.value.trim();

}); //txtName.blur



