//     \___ \| __/ _` | __/ __| _  | \___ \ //
  //      ___) | || (_| | |_\__ \|  |_| |___) | //
   //     |____/ \__\__,_|\__|___(_)___/|____/ // Programa creado por Samuel Ponce Luna, estudiante del IES La Vega De San jose




   const str = `                                      
                                                                         
   $$$$$$                                      
  /$$__  $$ | $$                | $$                     
 | $$  \__//$$$$$$    /$$$$$$  /$$$$$$       /$$  /$$$$$$$
 |  $$$$$$|_  $$_/   |____  $$|_  $$_/      |__/ /$$_____/
  \____  $$ | $$      /$$$$$$$  | $$         /$$|  $$$$$$ 
  /$$  \ $$ | $$ /$$ /$$__  $$  | $$ /$$    | $$ \____  $$
 |  $$$$$$/ |  $$$$/|  $$$$$$$  |  $$$$//$$ | $$ /$$$$$$$/
  \______/   \___/   \_______/   \___/ |__/ | $$|_______/ 
                                      /$$   | $$          
                                      |  $$$$$$/          
                                       \______/                           
                                                                  " `;
console.log(str);
console.log("Programa hecho por Samuel del IES LA VEGA DE SAN JOSE")


function Estadistica(Xi, Ni, Xi_Ni , Xi_Ni2) {
this.Xi = Xi;
this.Ni = Ni;
this.Xi_Ni = Xi_Ni;
this.Xi_Ni2 = Xi_Ni2
}
console.log("Stats.JS");

var Respuesta1 = prompt("Dime tu primer numero xi");
console.log("Colocado en la tabla:", Respuesta1);
var Respuesta2 = prompt("Dime tu primer numero xi");
console.log("Colocado en la tabla:", Respuesta2);
var Respuesta3 = prompt("Dime tu segundo numero xi");
console.log("Colocado en la tabla:", Respuesta3);
var Respuesta4 = prompt("Dime tu tercer numero xi");
console.log("Colocado en la tabla:", Respuesta4);
var Respuesta5 = prompt("Dime tu cuarto numero xi");
console.log("Colocado en la tabla:", Respuesta5);
var Respuesta6 = prompt("Dime tu quinto numero xi");
console.log("Colocado en la tabla:", Respuesta6);
var Respuesta7 = prompt("Dime tu primer numero ni");
console.log("Colocado en la tabla:", Respuesta7);
var Respuesta8 = prompt("Dime tu segundo numero ni");
console.log("Colocado en la tabla:", Respuesta8);
var Respuesta9 = prompt("Dime tu tercer numero ni");
console.log("Colocado en la tabla:", Respuesta9);
var Respuesta10 = prompt("Dime tu cuarto numero ni");
console.log("Colocado en la tabla:", Respuesta10);
var Respuesta11 = prompt("Dime tu quinto numero ni");
console.log("Colocado en la tabla:", Respuesta11);
var Respuesta12 = prompt("Dime tu sexto numero ni");
console.log("Colocado en la tabla:", Respuesta12);


var xi = Respuesta1
var ni = Respuesta7
var xini = xi * ni
/////2FILA////
var xi1 = Respuesta2
var ni1 = Respuesta8
var xini1 = xi1 * ni1
////3FILA////
var xi2 = Respuesta3
var ni2 = Respuesta9
var xini2 = xi2 * ni2
//////4Fila//////

//////5/////////
var xi3 = Respuesta4
var ni3 = Respuesta10
var xini3 = xi3 * ni3
/////6/////
var xi4 = Respuesta5
var ni4 = Respuesta11
var xini4 = xi4 * ni4
/////7/////
var xi5 = Respuesta6
var ni5 = Respuesta12
var xini5 = xi5 * ni5
///////////////////////////////

//Calculo de xini^2///

var xinial2 = Math.pow(xi, 2) * ni
var xini1al2 = Math.pow(xi1, 2) * ni1
var xini2al2 = Math.pow(xi2, 2) * ni2
var xini3al2 = Math.pow(xi3, 2) * ni3
var xini4al2 = Math.pow(xi4, 2) * ni4
var xini5al2 = Math.pow(xi5, 2) * ni5


///Colocacion Grafica de las filas///

var PrimeraFila = new Estadistica(xi, ni, xini , xinial2);
var SegundaFila = new Estadistica(xi1, ni1, xini1 , xini1al2);
var TerceraFila = new Estadistica(xi2, ni2, xini2 , xini2al2);
var CuartaFila = new Estadistica(xi3, ni3, xini3 , xini3al2);
var QuintaFila = new Estadistica(xi4, ni4, xini4 , xini4al2);
var SextaFila = new Estadistica(xi5, ni5, xini5, xini5al2);
/////Resultados y Separación////
var FilaParaSepararNi = new Estadistica('--------','--------', '--------' , '-------');
var FilaParaSumarNi = new Estadistica('Resultados de sumatorios =',(Number(ni) + Number(ni1) + Number(ni2) + Number(ni3) + Number(ni4) + + Number(ni5)) , xini + xini1 + xini2 + xini3 + xini4 + xini5 , 
xinial2 + xini1al2 + xini2al2 + xini3al2 +xini4al2 + xini5al2);




console.table([PrimeraFila,SegundaFila, TerceraFila, CuartaFila, QuintaFila, SextaFila, 
FilaParaSepararNi, ,FilaParaSumarNi,
]);
const resultadosNI = ni + ni1 + ni2 + ni3 + ni4 + ni5 
const resultadosXINI = xini + xini1 + xini2 + xini3 + xini4 + xini5
const media = resultadosXINI / resultadosNI
const moda = Math.max(ni, ni1 , ni2 , ni3 , ni4 , ni5 )
const sumatorio = xinial2 + xini1al2 + xini2al2 + xini3al2 +xini4al2 + xini5al2
const N = ni + ni1 + ni2 + ni3 + ni4 + ni5
const mediaCuadrado = Math.pow(media, 2)

const varianza = sumatorio / N - mediaCuadrado
const DesviacionTipica = Math.sqrt(sumatorio / N - mediaCuadrado)
console.log(`La varianza es ${varianza}`)
console.log(`La desviación tipica es = ${DesviacionTipica}`)
console.log(`La media al ^2 es ${mediaCuadrado}`)
console.log(`La moda es ${moda}`)
console.log('La media es igual a = ' + media)
    

    ///Fuentes: stackoverflow.com y https://developer.mozilla.org/es/docs
