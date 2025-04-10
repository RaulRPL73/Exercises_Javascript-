function main()
{
    const word = "How's it going?";
    separate(word);
}

function separate(word)
{
    let fragmented = word.split(" ");
    for(let value of fragmented)
    {
        console.log(value);
    }
    console.log("Fragmented word: ", fragmented);
}
main();