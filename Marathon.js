function main()
{
    let track="_";
    const descicion = ["run"];
    action=descicion.toString().toLowerCase();
    track=track.toLowerCase();
    if(marathon(action,track))
    {
        console.log("Track complete");
    }
}

function marathon(movement,obstacle)
{
    if(movement==="run")
    {
        if(obstacle==="_")
        {
            return true;
        }
        else if(obstacle==="|")
        {
            console.log("/");
        }
    }
    else if(movement==="jump")
    {
        if(obstacle==="|")
        {
            return true;
        }
        else if(obstacle==="_")
        {
            console.log("x");
        }
    }
}

main();