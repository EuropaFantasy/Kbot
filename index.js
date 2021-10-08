const Discord = require("discord.js");
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS] });
require("dotenv").config();

// Notre préfixe de commande
const prefixCmd = '!';

client.on("ready", () => {
    console.log("I'm ready !");
});

client.on("message", msg => {

    // Si le message n'est pas préfixé ou qu'il vient d'un autre bot, nous l'ignorons
    if(!msg.content.startsWith(prefixCmd) || msg.author.bot) return

    // Si nous arrivons jusque ici, alors c'est une commande

    // Nous convertissons la commande sous forme de tableau en prenant soin de retirer le préfixe
    const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
    // Extraction du premier élément de 'args', ce qui correspond à la commande
    const command = args.shift().toLowerCase();

    // À ce stade, args est un tableau ne contenant que les arguments étant donné que la commande a été extraite de celui-ci

    // On se sert maintenant de la variable 'command' pour le test
// ...

let result = 0;
let str = ">>> Je vois que tu n'es pas doué en math <@" + msg.author.id + ">, laisse-moi t'aider :\n";

args.forEach((element, index, arr) => {
    result += Number(element);
    if(Number(element) < 0){
        element = "(" + element + ")";
    }
    if(index !== arr.length - 1){
        str += element + " + ";
    } else {
        str += element + " = ";
    }
});

str += result.toString();

msg.channel.send(str);

// ...

});

client.login(process.env.BOT_TOKEN);