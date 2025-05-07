function main()
{
    //Name, Age
    const kid1 = ["Edna",16], kid2 = ["Charlie",6];
    let trickOrtreat = false; //True = Trick, False = Treat
    trickOrtreat=random(trickOrtreat);
    if(trickOrtreat)
    {
        Trick(kid1,kid2);
    }
    else
    {
        Treat(kid1,kid2);
    }
}

function Trick(kid1,kid2)
{
    const tricks = {
        1:"🎃",
        2:"👻", 
        3:"💀",
        4:"🕷", 
        5:"🕸",
        6:"🦇"
    };
    let scare = 0;
    scare=scares(kid1);
    console.log(`${kid1[0]} got scared by: ${tricks[scare]}`);
    scare=scares(kid2);
    console.log(`${kid2[0]} got scared by: ${tricks[scare]}`);
    
}

function scares(victim)
{
    let result = 0;
    for(let value in victim[0])
    {
        if(value%2==0)
        {
            result++;
        }
    }
    return result;
}

function Treat(kid1,kid2)
{
    const treats = {
        1:"🍰",
        2:"🍬", 
        3:"🍡",
        4:"🍭", 
        5:"🍪",
        6:"🍫"
    };
    let candy = 0;
    candy=reward(kid1);
    console.log(`${kid1[0]} got this candy: ${treats[candy]}`);
    candy=reward(kid2);
    console.log(`${kid2[0]} got this candy: ${treats[candy]}`);
}

function reward(kid)
{
    let value=kid[1], prize=0;
    while(value>0)
    {
        if(value%3===0 && value<10)
        {
            prize++;
        }
        value--;
    }
    return prize;
}

function random(ToT)
{
    ToT = Math.random()> 0.5 ? true : false;
    return ToT;
}

main();