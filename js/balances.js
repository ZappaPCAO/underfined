function getCVU(){
    const cvuVector = [];
    for (let i = 0; i < 10; i++) {
        const cvu = Math.floor(Math.random() * 10000000000000000).toString();
        cvuVector.push(cvu);
    }

    alert(`Nombre: Juan Perez \nCVU: ${cvuVector[Math.floor(Math.random() * cvuVector.length)]}`);
}

function realizarTransferencia(){
    prompt(`Ingrese el CVU al cual quiere transferir.`);
    //verificar cvu proxima entregas...
    let valorAtransferir =  prompt(`Ingrese la cantidad a transferir: `)

    while (isNaN(valorAtransferir)){
        valorAtransferir = prompt(`Ingrese una cantidad valida: `)
    }

    const saldoAct = document.getElementById("saldo");
    let cadenaAux = saldoAct.textContent.replace(".", "") //esto lo hago para respetar el formato español en la vista.
    let saldoNew = parseFloat(cadenaAux.replace(",", "."))
    
    if(saldoNew >= valorAtransferir)
        saldoNew = (saldoNew - valorAtransferir).toFixed(2);

    cadenaAux = (saldoNew.toString()).replace(".", ","); 

    saldoAct.textContent = setNuevoMonto(cadenaAux);
}

function ingresarDinero(){
    prompt(`Ingrese el CVU desde el cual quiere ingresar dinero: `);
    //verificar cvu proxima entregas...
    let valorAIngresar =  prompt(`Ingrese la cantidad a ingresar: `)
    //ver la forma de verificar el monto en futuraws entregas...

    while (isNaN(valorAIngresar)){
        valorAIngresar = prompt(`Ingrese una cantidad valida: `)
    }

    const saldoAct = document.getElementById("saldo");
    let cadenaAux = saldoAct.textContent.replace(".", "") //esto lo hago para respetar el formato moneda en la vista.
    let saldoNew = parseFloat(cadenaAux.replace(",", "."))
    
    saldoNew = (saldoNew + parseFloat(valorAIngresar)).toFixed(2);

    cadenaAux = (saldoNew.toString()).replace(".", ","); 
    
    saldoAct.textContent = setNuevoMonto(cadenaAux);
}

function setNuevoMonto(cadenaAux){
    let cont = 0, j = 0;
    let cadenaFinal = [""]
    for (let i = cadenaAux.length-4; i >= 0; i--) {
        cont++;
        cadenaFinal[j] = cadenaAux[i];
        
        if (cont == 3 && (i-1 >= 0)){
            cont = 0;
            j++;
            cadenaFinal[j] = '.';
        }
        j++;
    }
    cadenaFinal = cadenaFinal.reverse();
    for (let i = cadenaAux.length-3; i < cadenaAux.length; i++) {
        cadenaFinal[j] = cadenaAux[i];
        j++;        
    }
    return cadenaFinal.join('');
}
