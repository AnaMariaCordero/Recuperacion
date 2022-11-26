let ListaDeResultadosDeJuegos = [];

const resultados = [
    {idEquipo1: 1, nombre1: 'Qatar', golesEquipo1: 0, idEquipo2: 2, nombre2: 'Ecuador', golesEquipo2: 2},
    {idEquipo1: 3, nombre1: 'Inglaterra', golesEquipo1: 6, idEquipo2: 4, nombre2: 'Iran', golesEquipo2: 2},
    {idEquipo1: 5, nombre1: 'Senegal', golesEquipo1: 0, idEquipo2: 6, nombre2: 'Paises Bajos', golesEquipo2: 2},
    {idEquipo1: 7, nombre1: 'USA', golesEquipo1: 1, idEquipo2: 8, nombre2: 'Gales', golesEquipo2: 1},
    {idEquipo1: 9, nombre1: 'Argentina', golesEquipo1: 1, idEquipo2: 10, nombre2: 'Arabia Saudita', golesEquipo2: 2},
];

InsertarDatosDeResultadosAutomaticamente();
function InsertarDatosDeResultadosAutomaticamente(){
    for (var i in resultados) {
        GuardarDatosDeLosResultados(resultados[i].idEquipo1,resultados[i].nombre1,resultados[i].golesEquipo1,resultados[i].idEquipo2,resultados[i].nombre2,resultados[i].golesEquipo2);
    }
    DesplegarTablaDeResultados();
}
function GuardarDatosDeLosResultados(idEquipo1, nombre1, golesEquipo1, idEquipo2, nombre2,golesEquipo2){
    ListaDeResultadosDeJuegos.push(
        {
            idEquipo1: idEquipo1,nombre1: nombre1,golesEquipo1: golesEquipo1,idEquipo2: idEquipo2,nombre2: nombre2,golesEquipo2: golesEquipo2
        }
    );
}
function DesplegarTablaDeResultados(){
    let datosFinales = '';
    for (extrartorDeDatos of ListaDeResultadosDeJuegos) {
        datosFinales +=
        `
        <tr>
        <td>${extrartorDeDatos.nombre1}</td>
        <td>${extrartorDeDatos.golesEquipo1} - ${extrartorDeDatos.golesEquipo2}</td>
        <td>${extrartorDeDatos.nombre2}</td>
        </tr>
        `
    }
    document.getElementById('detalleDeLaTablaDeGoles').innerHTML = datosFinales;
}