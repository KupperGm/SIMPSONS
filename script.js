function testar() {
    let contHomer = 0;
    let contMargie = 0;
    let contBart = 0;
    let contLisa = 0;
    
   
    let radios = document.querySelectorAll('input[type="radio"]');
    let totalSelecionados = 0;

    
    radios.forEach(e => {
        if (e.checked) {
            totalSelecionados++;
            if (e.value == "Homer") {
                contHomer++;
            }
            else if (e.value == "Margie") {
                contMargie++;
            }
            else if (e.value == "Lisa") {
                contLisa++;
            }
            else if (e.value == "Bart") {
                contBart++;
            }
        }
    });

   
    if (totalSelecionados < 10) {
        alert("Alguma pergunta não foi respondida, por favor complete o Quiz!");
        return; 
    }

    
    function calcularPersonagem() {
        let resultado = `Homer = ${contHomer} <br> Margie = ${contMargie} <br> Bart = ${contBart} <br> Lisa = ${contLisa}`;
        document.getElementById("resultado").innerHTML = "Contabilizando resultados, aguarde 5 segundos!";

        console.log(resultado);

        localStorage.setItem('homer', contHomer);
        localStorage.setItem('margie', contMargie);
        localStorage.setItem('lisa', contLisa);
        localStorage.setItem('bart', contBart);

        let pagina;

        if (contBart > contHomer && contBart > contLisa && contBart > contMargie) {
            pagina = 'bart';
        } else if (contHomer > contBart && contHomer > contLisa && contHomer > contMargie) {
            pagina = 'homer';
        } else if (contLisa > contBart && contLisa > contHomer && contLisa > contMargie) {
            pagina = 'lisa';
        } else if (contBart == contHomer || contBart == contLisa || contBart == contMargie) {
            pagina = 'barbie';
        } else if (contHomer == contLisa || contHomer == contMargie) {
            pagina = 'barbie';
        } else if (contLisa == contMargie) {
            pagina = 'barbie';
        } else {
            pagina = 'margie';
        }

       
        setTimeout(() => {
            window.open(pagina + '.html');
        }, 5000);
    }

    
    calcularPersonagem();
}

   
       