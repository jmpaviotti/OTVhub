// Functions
function insertPlayer(name, container) {
    // Inserts the html elements required for a twitch player embed into DOM
    const parent = document.createElement("div");
    const child = document.createElement("div");

    parent.setAttribute("class", "grid-item");
    child.setAttribute("id", "player_" + name);

    parent.append(child);
    container.append(parent);
}

function calcPlayerDimensions() {
    // Calculates size of twitch player embeds based on the main container
    const box = document.querySelector('#twitch');
    return {width: box.offsetWidth * 0.32, height: box.offsetHeight * 0.46}
}

function resizePlayer(player, dimensions) {
    // Resizes a twitch player embed
    player.setHeight(dimensions.height);
    player.setWidth(dimensions.width);
}

// Variables
const options = [], players = [], channel_names = ['fedmyster', 'fedmyster2', 'lilypichu', 'pokimane', 'scarra', 'yvonnie'];
const container = document.querySelector("#twitch");
let default_volume = 0.8;

// Create players and add them to list
for(let i = 0; i < channel_names.length; i++) {  

    insertPlayer(channel_names[i], container) // Inserts twitch player boxes into DOM

    options.push({
        ...calcPlayerDimensions(),
        channel: channel_names[i]
    });

    players.push( new Twitch.Player('player_' + channel_names[i], options[i]) );
}

// Autopause players
players.forEach(player => player.addEventListener(Twitch.Player.READY, function() {
    player.pause();
}));

// Resize players when user resizes window
window.onresize = function() {
    const dimensions = calcPlayerDimensions();
    players.forEach(player => resizePlayer(player, dimensions));     
}