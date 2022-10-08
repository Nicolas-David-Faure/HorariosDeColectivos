



let ciudades = ["las brenas","charata","saenz pena","tres isletas", "castelli"]
let ExpresoDelPlataNoche = [
    {ciudad:"Saenz Peña",  Hora: "20pm"  , id: 0, orden: 0,compania: "Expreso Del Plata"},
    {ciudad:"Napenay",     Hora: "20:30pm",id: 1, orden: 1,compania: "Expreso Del Plata"},
    {ciudad:"Avia Terai",  Hora: "20:50pm",id: 2, orden: 2,compania: "Expreso Del Plata"},
    {ciudad:"Campo Largo", Hora: "21:10pm",id: 3, orden: 3,compania: "Expreso Del Plata"},
    {ciudad:"Corzuela",    Hora: "21:35pm",id: 4, orden: 4,compania: "Expreso Del Plata"},
    {ciudad:"Las Breñas",  Hora: "22pm"   ,id: 5, orden: 5,compania: "Expreso Del Plata"},
    {ciudad:"Charata",     Hora: "22:30pm",id: 6, orden: 6,compania: "Expreso Del Plata"},
    {ciudad:"Pinedo",      Hora: "22:55pm",id: 7, orden: 7,compania: "Expreso Del Plata"},
    {ciudad:"Gancedo",     Hora: "23:20pm",id: 8, orden: 8,compania: "Expreso Del Plata"}

];

const sugeridosLlegada = document.getElementById('section__api_principal_recomendations2')
const sugeridosSalida = document.getElementById('section__api_principal_recomendations')
const ciudadDeSalida = document.querySelector('#input_1');
const ciudadDeLlegada = document.querySelector("#input_2");
const boton = document.querySelector('#boton_buscar');
const resultadoSalida = document.querySelector('#informacion-de-colectivos-salida');
const resultadoLlegada = document.querySelector('#informacion-de-colectivos-llegada');
let ordenDeSalida = 0;
let ordenDeLlegada = 0;
let elementoRecomendado = document.getElementsByClassName('section__api_principal_recomendations_text')
        /*Filtrar ciudades de salida*/
const filtrarSalida = () =>{
    resultadoSalida.innerHTML = "";
    sugeridosSalida.innerHTML = "";
    filtrarLlegada();

    let texto = ciudadDeSalida.value.toLowerCase();
    if(texto.length >= 1){
        for(let ciudad of ExpresoDelPlataNoche){
                let nombreCiudad = ciudad.ciudad.toLowerCase(); 
                
                
                
                if(nombreCiudad.indexOf(texto) !== -1){
                    
                    sugeridosSalida.innerHTML += `<p id="section__api_principal_recomendations_text" class="section__api_principal_recomendations_text">${ciudad.ciudad}</p>`
                    
                    ordenDeSalida = ciudad.orden
                    resultadoSalida.innerHTML += 
                    `<li class="section_info_li"><span class="section__info_color-ciudad">${ciudad.ciudad}</span> hacia Gancedo
                    <br>- Hora de salida: <span class="section__info_color-hora">${ciudad.Hora}</span> (aprox)-. 
                    <br>- Companía: <span class="section__info_color-compania">${ciudad.compania}</span></li> `;

                }
            }
    }
    
       
    }
    /*Filtrar sugeridos */
    sugeridosSalida.addEventListener('click',(e)=>{
            ciudadDeSalida.value = e.target.innerHTML
            filtrarSalida();
            
        sugeridosSalida.innerHTML = '';  
        ciudadDeSalida.focus();
    
    })

    
        
    
    

    /*Filtrar ciudades de llegada */

    const filtrarLlegada = () =>{
        resultadoLlegada.innerHTML = "";
         let texto = ciudadDeLlegada.value.toLowerCase();
         sugeridosLlegada.innerHTML = '';
    
      
        
        if(texto.length >= 1 && ciudadDeSalida.value.toLowerCase().length > 1){
            for(let ciudad of ExpresoDelPlataNoche){
                    let nombreCiudad = ciudad.ciudad.toLowerCase(); 
                    ordenDeLlegada = ciudad.orden
                    
                   
                    if(nombreCiudad.indexOf(texto) !== -1 && ordenDeLlegada > ordenDeSalida){
                        
                        
                        sugeridosLlegada.innerHTML += `<p id="section__api_principal_recomendations_text" class="section__api_principal_recomendations_text2">${ciudad.ciudad}</p>`
                        
                        resultadoLlegada.innerHTML += 
                        `<li class="section_info_li"><span class="section__info_color-ciudad">${ciudad.ciudad}</span>
                        <br>- Hora de llegada: <span class="section__info_color-hora">${ciudad.Hora}</span> (aprox)-.
                       <br>- Companía: <span class="section__info_color-compania">${ciudad.compania}</span></li> `;
    
                    }
                }
        }else if (ciudadDeSalida.value.toLowerCase().length == 0 && texto.length >= 1){
            resultadoLlegada.innerHTML += `<p class="section-ciudad-de-llegada-p">¡¡Debe ingresar una ciudad de salida...!!</p>`
        }


    }
    
    sugeridosLlegada.addEventListener('click',(e)=>{
        ciudadDeLlegada.value = e.target.innerHTML
        filtrarLlegada()
        sugeridosLlegada.innerHTML = '';  
        ciudadDeLlegada.focus();

})
    ciudadDeSalida.addEventListener('keyup',filtrarSalida);
    ciudadDeLlegada.addEventListener('keyup',filtrarLlegada)
      
        

    

    
    



