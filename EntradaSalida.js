function main()
{
    let palabraEntrada1 = "Hola", palabraEntrada2 = "Roma";
    revision(palabraEntrada1,palabraEntrada2);
}

function revision(palabra1,palabra2)
{
    let palabraSalida1 = "", palabraSalida2 = "";
    let comparador1 = palabra2.split('').sort().join('').toLowerCase();
    let comparador2 = palabra1.split('').sort().join('').toLowerCase();
    for(let i=0;i<comparador2.length;i++)
    {
        if(comparador1[i]!==comparador2[i])
        {
            //If was implemented this way so it's cleaner and each condition applies different for the word is comparing
            if(comparador1[i]) palabraSalida1 += comparador1[i];
            if(comparador2[i]) palabraSalida2 += comparador2[i];
        }
    }
    console.log(palabraSalida1);
    console.log(palabraSalida2);
}
main();
