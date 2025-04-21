function main()
{
    // Good: "Dwarfs", "Elfs", "Humans", "Seraphims"
    // Evil: "Orcs", "Goblins", "Demons", "Trolls"
    const goodArmy = ["Dwarfs", "Humans", "Seraphims"];
    const badArmy = ["Orcs", "Goblins", "Demons"];
    fight(goodArmy, badArmy);
}

function fight(gArmy, bArmy)
{
    const armies = {
        "Dwarfs": 2,
        "Elfs": 3,
        "Humans": 1,
        "Seraphims": 5,
        "Orcs": 3,
        "Goblins": 1,
        "Demons": 4,
        "Trolls": 3
    };

    let good = 0, evil = 0;

    for (let unit of gArmy)
    {
        if (armies[unit])
        {
            good += armies[unit];
        }
    }

    for (let unit of bArmy)
    {
        if (armies[unit])
        {
            evil += armies[unit];
        }
    }
    winner(good, evil);
}

function winner(good, evil)
{
    if (good === evil)
    {
        console.log("It's a draw");
    }
    else if (good > evil)
    {
        console.log("Good guys win");
    }
    else
    {
        console.log("Evil guys win");
    }
}

main();