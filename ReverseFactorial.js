function main()
{
    let numero = 5
    factorial(numero);
}

function factorial(n)
{
    let resultado=1;
    if(n===0 || n<0)
    {
        console.log("No tiene factorial");
    }
    else
    {
        for(let i=1;i<=n;i++)
        {
            resultado=i*resultado;
        }
        console.log(`El factorial de: ${n} es ${resultado}`);
    }
}
main();