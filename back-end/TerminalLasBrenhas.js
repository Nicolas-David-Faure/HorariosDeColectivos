const Municipios = [{
    ciudades : "Las Breñas",
        empresas :{ empresa: "Expreso del plata",
            horarios:{turno: "mañana",  salida :"8am", ultimaParada: "Saenz Peña"},
            horarios:{turno: "mediodia",salida :"12pm", ultimaParada: "Saenz Peña"},
            horarios:{turno: "tarde",   salida :"7:30pm", ultimaParada: "Gancedo"},
            horarios:{turno: "noche",   salida :"22pm", ultimaParada: "Gancedo"},
                                },
        empresas :{ empresa: "El bambi",
            horarios:{turno: "mañana",  salida :"8am", ultimaParada: "Saenz Peña"},
            horarios:{turno: "mediodia",salida :"12pm", ultimaParada: "Saenz Peña"},
            horarios:{turno: "tarde",   salida :"7:30pm", ultimaParada: "Gancedo"},
            horarios:{turno: "noche",   salida :"22pm", ultimaParada: "Gancedo"},
                                },
        empresas :{ empresa: "El 12 de octubre",
            horarios:{turno: "mañana",  salida :"8am", ultimaParada: "Saenz Peña"},
            horarios:{turno: "mediodia",salida :"12pm", ultimaParada: "Saenz Peña"},
            horarios:{turno: "tarde",   salida :"7:30pm", ultimaParada: "Gancedo"},
            horarios:{turno: "noche",   salida :"22pm", ultimaParada: "Gancedo"},
        }               
                            ,

  
 ciudades: "Charata",
            empresas :{ empresa: "Expreso del plata",
            horarios:{turno: "mañana",  salida :"7:30am", ultimaParada: "Saenz Peña"},
            horarios:{turno: "mediodia",salida :"11:30pm", ultimaParada: "Saenz Peña"},
            horarios:{turno: "tarde",   salida :"8pm", ultimaParada: "Gancedo"},
            horarios:{turno: "noche",   salida :"22:30pm", ultimaParada: "Gancedo"},
},
        empresas :{ empresa: "El bambi",
            horarios:{turno: "mañana",  salida :"7:30am", ultimaParada: "Saenz Peña"},
            horarios:{turno: "mediodia",salida :"11:30pm", ultimaParada: "Saenz Peña"},
            horarios:{turno: "tarde",   salida :"8pm", ultimaParada: "Gancedo"},
            horarios:{turno: "noche",   salida :"22:30pm", ultimaParada: "Gancedo"},
},
        empresas :{ empresa: "El 12 de octubre",
            horarios:{turno: "mañana",  salida :"7:30am", ultimaParada: "Saenz Peña"},
            horarios:{turno: "mediodia",salida :"11:30pm", ultimaParada: "Saenz Peña"},
            horarios:{turno: "tarde",   salida :"8pm", ultimaParada: "Gancedo"},
            horarios:{turno: "noche",   salida :"22:30pm", ultimaParada: "Gancedo"},
},        
    } ]      




const ciudadDeSalida = document.querySelector('#input_1');

const ciudadDeLlegada = document.querySelector("#input_2");
const boton = document.querySelector('#boton_buscar');
const resultado = document.querySelector('#informacion-de-colectivos');

console.log(Municipios[0])









function aDondeVa(){
const salida = ciudadDeSalida.value.toLowerCase()
        const llegada = ciudadDeLlegada.value.toLowerCase()
        
    for(horarios of Municipios.terminales.empresas.horarios){
        
        if(nombreCiudad.indexOf(salida) !== -1){
            resultado.innerHTML += 
            `<li class="section_info_li"><span class="section__info_color-ciudad">${ciudad.ciudad}</span> hacia Gancedo
             - Hora de salida: <span class="section__info_color-hora">${ciudad.Hora}</span> (aprox)-- 
             Companía: <span class="section__info_color-compania">${ciudad.compania}</span></li> `;
        }
    }


}






