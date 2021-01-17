

const links = document.querySelectorAll(".alternate-style"),
      totalLinks = links.length;

  

function setActiveStyle(color){
    for(let i = 0; i < totalLinks; i++){
        if(color === links[i].getAttribute("title")){
            links[i].removeAttribute("disabled");

            //Guardamos el color del tema en el localstorage
            var colorTheme = links[i].title;
            if(colorTheme === 'pink'){
                localStorage.setItem('colorTheme', 'pink');
            }else if(colorTheme === 'blue'){
                localStorage.setItem('colorTheme', 'blue');
            }else if(colorTheme === 'orange'){
                localStorage.setItem('colorTheme', 'orange');
            }else if(colorTheme === 'yellow'){
                localStorage.setItem('colorTheme', 'yellow');
            }else if(colorTheme === 'green'){
                localStorage.setItem('colorTheme', 'green');
            }else{
                console.log('ningun color elegido');
            }
    
        }else{
            links[i].setAttribute("disabled", "true");
        }
    }
}

var colorLocal = localStorage.getItem('colorTheme');
for(let i = 0; i < totalLinks; i++){
    if(colorLocal === links[i].getAttribute("title")){
        links[i].removeAttribute("disabled");
    }else{
        links[i].setAttribute("disabled", "true");
    }
}


/*
if(localStorage.getItem('colorTheme') == 'pink'){
    console.log('a elegido el color pink');

}else if(localStorage.getItem('colorTheme') == 'blue'){
    console.log('a elegido el color blue');
}else if(localStorage.getItem('colorTheme') == 'orange'){
    console.log('a elegido el color orange');
}else if(localStorage.getItem('colorTheme') == 'yellow'){
    console.log('a elegido el color yellow');
}else if(localStorage.getItem('colorTheme') == 'green'){
    console.log('a elegido el color green');
}
*/


//body skin

const bodySkin = document.querySelectorAll(".body-skin"),
    totalBodySkin = bodySkin.length;

    for(let i = 0; i < totalBodySkin; i++){
        bodySkin[i].addEventListener("change", function(){
            if(this.value === "dark"){
                document.body.className = "dark";

                //Guardamos el color del tema en el localstorage

                if(document.body.classList.value === 'dark'){
                    localStorage.setItem('dark-mode', 'true');
                }else{
                    localStorage.setItem('dark-mode', 'false');
                }

            }else if(this.value === "light"){
                document.body.className = "light";

                //Guardamos el color del tema en el localstorage

                if(document.body.classList.value === 'light'){
                    console.log(document.body.classList.value);
                    localStorage.setItem('dark-mode', 'false');
                }else{
                    localStorage.setItem('dark-mode', 'true');
                }
            }
        })
    }

    //Obteniendo el modo actual del localstorage

    var colorOscuro = document.getElementById('colorOscuro');
    var colorClaro = document.getElementById('colorClaro');

    if(localStorage.getItem('dark-mode') === 'true'){
        document.body.classList.add('dark');
        colorOscuro.checked = true;
        colorClaro.checked = false;
    }else{
        document.body.classList.remove('dark');
        colorClaro.checked = true;
        colorOscuro.checked = false;
    }


   


document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
















