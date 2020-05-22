const options = [], players = [], channel_names = ['fedmyster', 'fedmyster2', 'lilypichu', 'scarra', 'pokimane', 'yvonnie'];
let default_volume = 0.8;

for(let i = 0; i < channel_names.length; i++) {    
    options.push({
        width: 400,
        height: 300,
        channel: channel_names[i],
    });

    players.push( new Twitch.Player('player_' + channel_names[i], options[i]) )
};

players.forEach(player => player.addEventListener(Twitch.Player.READY, function() {
    player.pause();
}));




