function main()
{
    let enunciado = "[ 3 * ( 5 + 1 ) { 7 } ]", separador;
    separador=enunciado.split(' ').join('');
    if(verificador(separador))
    {
        console.log("Esta balanceada");
    }

    else
    {
        console.log("No esta balanceada");
    }
}

function verificador(expresion) 
{
    const comprobador = [];
    const pares = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const value of expresion) 
        {
            if (value === '(' || value === '[' || value === '{') 
            {
                comprobador.push(value);
            }

            else if (value === ')' || value === ']' || value === '}') 
            {
                if (comprobador.pop() !== pares[value]) 
                {
                    return false;
                }
            }
    }
    return comprobador.length === 0;
}
main();