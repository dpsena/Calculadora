function pasarNumero(numero) {
  // console.log(numero) 
  // document.getElementById('data').value =numero
  pasarDato(numero)
}
function pasarOperador(operador) {
  pasarDato(` ${operador} `)// generar un espacio en el operador
  //document.getElementById('data').value =operador
}
function pasarDato(dato) {
  let valorInput = document.getElementById('data')
  //valorInput.value=valorInput.value + " " +dato
  //document.getElementById('data').value =operador
  valorInput.value = `${valorInput.value}${dato}`
}
function limpiar() {
  document.getElementById('data').value = ""

}/*
function mostrarResultado(){
     
 let valorInput=document.getElementById('data'). value
console.log (valorInput)
let arreglo=valorInput.split(" ")

 let operador=arreglo[1]
switch(operador) {
  case "+":
    let suma= parseInt(arreglo[0])+parseInt(arreglo[2])
    document.getElementById('data').value = suma
    break;
  case"-":
  let resta= parseInt(arreglo[0])-parseInt(arreglo[2])
  document.getElementById('data').value = resta
    break;
    case "*":
      let multiplicar= parseInt(arreglo[0])*parseInt(arreglo[2])
      document.getElementById('data').value = multiplicar
      break;
      case "/":
        let dividir=parseInt(arreglo[0])/parseInt(arreglo[2])
        document.getElementById('data').value = dividir
        break;
   default:
      alert("Este proceso no esta habilitado :(");
    
}
}*/

function preguntarDia() {

  let dia= prompt("elige un numero entre el 1 y el 7")

  switch (dia) {
    case "1":
        window.document.write(" Hola hoy es el dia del Sol, se llama asi por la traduccion de Sunday");
      break;
    case "2":
       window.document.write(" Hola hoy es el dia de la luna, se llama asi por la traduccion de Monday");
      break;
    case "3":
        window.document.write = (" Hola hoy es el dia de 'Marti Dies' honra al dios de la guerra, Marte")
      break;
    case "4":
        window.document.write = (" Hola hoy es el dia de Mercurio, en un día llamado Mercurii Dies ")
      break;
    case "5":
        window.document.write = (" Hola hoy es el dia de Jupiter, Dios de Dioses ")
      break;
    case "6":
       window.document.write = (" Hola hoy es el dia de Venus, la Diosa del Amor")
      break;
    case "7":
        window.document.write = (" Hola hoy es el dia de Saturno, Dios de la agricultura")
      break;

    default:
      alert("Este proceso no esta habilitado.")
  }
}
