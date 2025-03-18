function main()
{
    const track = "_";
    const decision = ["run"];
    const action = decision[0].toLowerCase();
    const result = marathon(action, track);
    if (result === true) 
    {
        console.log("Track complete");
    } 
    else if (typeof result === "string") 
    {
        console.log(result);
    } 
    else 
    {
        console.log("Obstacle encountered");
    }
}

function marathon(movement,obstacle)
{
    const actions = {
        "run_":true,
        "run|":"/",
        "jump|":true,
        "jump_":"x"
    };

    return actions[movement+obstacle] ?? false;
}

main();