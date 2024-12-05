function testar(){
    let contHomer=0;
    let contMargie=0;
    let contBart=0;
    let contLisa=0;

    let radios = document.querySelectorAll('input[type="radio"]')
    console.log(radios)

    radios.forEach(e =>{

        if(e.checked) {
            if(e.value == "Homer"){
                contHomer++;
            }
            else if(e.value == "Margie"){
                contMargie++;
            }
            else if(e.value == "Lisa"){
                contLisa++;
            }
            else if(e.value == "Bart"){
                contBart++;
            }
        }
    })
    let resultado = `Homer = ${contHomer} <br> Margie =${contMargie} <br> Bart = ${contBart} <br> Lisa = ${contLisa}`;
    
    document.getElementById("resultado").innerHTML = "Surpresa";

    localStorage.setItem('homer', contHomer)
    localStorage.setItem('margie', contMargie)
    localStorage.setItem('lisa',contLisa)
    localStorage.setItem('bart',contBart)
           
    let maior =0
    let pagina 

    if(contBart > contHomer && contBart > contLisa && contBart> contMargie){
        pagina = 'bart'
    }






        setTimeout(()=>{
                window.open(pagina+'.html')
        },5000 )
}
       