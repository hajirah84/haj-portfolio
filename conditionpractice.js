let mood = 'sleepy'
let tiredness = '6'
let isNight = true;
if (mood === 'sleepy' && tiredness > 8 && isNight) {
    console.log ('time to sleep')
}
else {console.log ('You can stay awake for a bit longer');

}

let stoplight = 'green'
let pedestrians = 'yes'
if (stoplight === 'green' && pedestrians === 'no') {
    console.log ('go');
}
else if (stoplight != 'green' || pedestrians === 'yes')
    {console.log ('be careful');

} 
else if (stoplight = 'yellow') {
    console.log ('Slow Down');
}
else if (stoplight = 'red') {
    console.log ('Stop');
}

