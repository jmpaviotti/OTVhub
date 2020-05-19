const options = [], players = [], channel_names = ['fedmyster', 'fedmyster2', 'lilypichu', 'scarra', 'pokimane', 'yvonnie'];
var temp;

for(let i = 0; i < channel_names.length; i++) {    
    options.push({
        width: 400,
        height: 300,
        channel: channel_names[i],
    });

    players.push( new Twitch.Player('player_' + channel_names[i], options[i]) );
}