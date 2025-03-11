function main()
{
    let palabra = "Anita lava la tina", palindromo = "", reverso = "";
    palindromo = palabra.toLowerCase().replace(/[^a-z]/g, '');
    console.log(palindromo);
    if(comprobador(palindromo))
    {
        console.log("Es palindromo");
    }
    
    else
    {
        console.log("No es palindromo");
    }
}

function comprobador(expresion)
{
    let palabraComparada="";
    palabraComparada=expresion.split('').reverse().join('');
    console.log(palabraComparada);
    if(palabraComparada==expresion)
    {
        return true;
    }

    else
    {
        return false;
    }
}

main();