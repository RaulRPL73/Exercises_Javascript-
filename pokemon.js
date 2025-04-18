function main()
{
    let pokemon1=["Water",80,30], pokemon2=["Fire",50,50];
    battle(pokemon1,pokemon2);
}

function battle(pokemon1,pokemon2)
{
    const type = {
        "Fire":true,
        "Grass":true,
        "Water":true,
        "Eletric":true
    };
    let typing =0;

    if(type[pokemon1[typing]] && type[pokemon1[typing]])
    {
        console.log(`Damage done ${calculateDamage(pokemon1,pokemon2)}`);
    }
}

function calculateDamage(pokemon1, pokemon2) 
{
    const effectiveness = {
        "Fire": { "Fire": 1, "Water": 0.5, "Grass": 2, "Electric": 1 },
        "Water": { "Fire": 2, "Water": 1, "Grass": 0.5, "Electric": 1 },
        "Grass": { "Fire": 0.5, "Water": 2, "Grass": 1, "Electric": 1 },
        "Electric": { "Fire": 1, "Water": 2, "Grass": 0.5, "Electric": 1 }
    }; 
    const typeEffect = effectiveness[pokemon1[0]][pokemon2[0]];

    return 50 * (pokemon1[1] / pokemon2[2]) * typeEffect;
}

main();