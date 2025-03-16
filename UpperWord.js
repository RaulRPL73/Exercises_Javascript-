function main()
{
    let palabra="hola mundo";
    mayuscula(palabra);
}

function mayuscula(word)
{
    let resultado="";
    let palabraM=word.split("");
    for(let i=0;i<palabraM.length;i++)
    {
        if(i===0 || palabraM[i-1]===' ')
        {
            resultado += palabraM[i].toUpperCase();
        }
        else
        {
            resultado += palabraM[i];
        }
    }
    console.log(resultado);
}

main();