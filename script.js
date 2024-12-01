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
}
