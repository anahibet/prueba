

let autosImportados= require('./etapa1')
let persona={
nombre: "juan",
capacidadDePagoEnCuotas: 200000,
capacidadDePagoTotal: 5000000,
}

let auto={
marca:"Ford",
modelo:"Fiesta",
precio:100000,
km:200,
color:"Azul",
cuotas:12,
anio:2019,
patente:"APL123",
vendido:false
}

let concesionaria= {
autos:autosImportados,
buscarAuto:function(patente){
let autoBuscado=this.autos.find(row=>row.patente==patente)
if (autoBuscado) return autoBuscado
else return null
},
venderAuto:function(patente){
let autoBuscado=this.buscarAuto(patente)
if(autoBuscado!==null) autoBuscado.vendido = true
return autoBuscado
},
autosParaLaVenta:function(){
let autoALaVenta=this.autos.filter(row=>row.vendido==false)
return autoALaVenta
},
autosNuevos:function(){
let autoCero=this.autosParaLaVenta().filter(row=>row.km<100)
return autoCero

},
listaDeVentas:function(){
let vendidos=this.autos.filter(row=>row.vendido==true)
return vendidos.map(row=>row.precio)

},
totalDeVentas:function(){
total=0
ventasTotales=this.listaDeVentas().reduce((acum,currentValue)=>acum+currentValue,total)
return ventasTotales

},
puedeComprar:function(auto,persona){
    if(auto.precio<=persona.capacidadDePagoTotal&&persona.capacidadDePagoEnCuotas>=(auto.precio/auto.cuotas))
    return true
    else return false
    },
    autosQuePuedeComprar:function(persona){
    let autosSinVender=this.autosParaLaVenta().filter(auto=>this.puedeComprar(auto,persona))
    return autosSinVender
    }

}






console.log(concesionaria.autosQuePuedeComprar(persona))

console.log(concesionaria.venderAuto("JJK116"))
//console.log(concesionaria.totalDeVentas())
//array.reduce(function(acum,currentValue){acum+currentValue,0});
//console.log(concesionaria.totalDeVentas())
//console.log(concesionaria.autos)

//console.log(concesionaria.buscarAuto("APL123"))

//console.log(concesionaria.venderAuto("APL123"))
//console.log(concesionaria.autosParaLaVenta())
//console.log(concesionaria.autosNuevos())
//console.log(concesionaria.listaDeVentas())


