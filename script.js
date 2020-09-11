swal("Hello world!", "This is the best bootcamp in the world","warning");

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

}
function mostrarResultado() {

  let valorInput = document.getElementById('data').value
  console.log(valorInput)
  let arreglo = valorInput.split(" ")

  let operador = arreglo[1]
  switch (operador) {
    case "+":
      let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
      document.getElementById('data').value = suma
      break;
    case "-":
      let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
      document.getElementById('data').value = resta
      break;
    case "*":
      let multiplicar = parseInt(arreglo[0]) * parseInt(arreglo[2])
      document.getElementById('data').value = multiplicar
      break;
    case "/":
      let dividir = parseInt(arreglo[0]) / parseInt(arreglo[2])
      document.getElementById('data').value = dividir
      break;
    default:
      swal("error","operacion no definida");

  }
}

function preguntarDia() {

  let dia = prompt("elige un numero entre el 1 y el 7")

  switch (dia) {
    case "1":
      
      let texto=(" Hola hoy es el dia del Sol, se llama asi por la traduccion de Sunday");
      document.getElementById("textArea").value =texto
     
      break;
    case "2":
      let texto2=(" Hola hoy es el dia de la luna, se llama asi por la traduccion de Monday");
      document.getElementById("textArea").value =texto2
      
      break;
    case "3":
      let texto3=(" Hola hoy es el dia de 'Marti Dies' honra al dios de la guerra, Marte");
      document.getElementById("textArea").value =texto3
     
      break;
    case "4":
      let texto4=(" Hola hoy es el dia de Mercurio, en un día llamado Mercurii Dies ");
      document.getElementById("textArea").value =texto4
     
      break;
    case "5":
     let texto5=(" Hola hoy es el dia de Jupiter, Dios de Dioses ");
      document.getElementById("textArea").value =texto5
      break;
    case "6":
      let texto6=(" Hola hoy es el dia de Venus, la Diosa del Amor");
      document.getElementById("textArea").value =texto6
      break;
    case "7":
      let texto7=(" Hola hoy es el dia de Saturno, Dios de la agricultura");
      document.getElementById("textArea").value =texto7
      break;
    default:
      let texto8=("Este digito no es valido.");
      document.getElementById("textArea").value =texto8

  }

}
