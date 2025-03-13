function main()
{
    let numero = 371, potencia=0;
    potencia = numero.toString().length;
    if(calcular(numero,potencia))
    {
        console.log(`${numero} es numero Armstrong`);
    }
    else
    {
        console.log(`${numero} no es numero Armstrong`);
    }
}

function calcular(n,p)
{
    let resultado=0;
    let separador = n.toString().split("");
    for(let i=0;i<separador.length;i++)
    {
        resultado = Math.pow(separador[i],p) + resultado;
    }
    if(resultado===n)
    {
        return true;
    }
}

main();