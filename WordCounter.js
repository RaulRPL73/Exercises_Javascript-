function main ()
{
    let contador=0, palabra="Palabra", letra;
    let letrasContadas={}; // This saves every word so it doen't repeat itself
    palabra=palabra.toLocaleLowerCase();

    for(let i=0;i<palabra.length;i++)
    {
        letra = palabra[i];
        if(letrasContadas[letra]) continue; //Skips the for if it already has count the letter

        for(let j=0;j<palabra.length;j++)
        {
            comparador=palabra[i];
            if(letra==palabra[j])
            {
                contador++;
            }
        }
        console.log("La palabra: "+palabra[i]+" se repite: "+contador);
        letrasContadas[letra] = true; //Counts the letter as counted
        contador=0;
    }
}

main();