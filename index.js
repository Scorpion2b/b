const Discord = require("discord.js");
const bot = new Discord.Client();




bot.on("ready", () => {
    console.log("I am ready!");
    bot.user.setActivity('BDBot | *help');
});

const prefix = "*";

var questions = new Array(),
reponses = new Array(),
temoin = 0;




bot.on("message", (message) => {

    const argus = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = argus.shift().toLowerCase();
    
    let sender = message.author; 
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    if (message.content.startsWith(prefix + "help"))    {
        message.delete();
        message.channel.send({embed: {
        color:  3447003,
        author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
        },
        title: 'Commandes de BDBot:',
        description: 'Liste des commandes pour BDBot',

        fields: [{
            name: "Commande Modérateur",
             value: "[RIEN]"
        },

        {
            name: "Commande Youtubeur",
            value: "\n- *yt [lien de la vidéo] : Envoie une notification pour les abonné(e)"
        },
        {
            name: "Commande Sponsor",
            value: "[RIEN]"
        },

        {
            name: "Commande Abonné(e)s",
            value: "[RIEN]",
        }

        ],
        timestamp: new Date(),

        footer: {
            icon_url: bot.user.avatarURL,
            text: "© BlackDard"
        }
        }})
    }




// Youtube
    
    else if (command === 'yt') {
        
            let lien = args[0];

            message.delete(); 
            if (!message.member.roles.find("name", "🎥Youtubeur🎥")) { 
                message.channel.send('Vous navais pas la permissions de faire ça.'); 
                return; // this returns the code, so the rest doesn't run.
            }
            else if (message.member.roles.find("name", "BlackDard")) { 
                message.channel.send(':loudspeaker: Sortie d\'une nouvelle vidéo de ℬ𝓵𝓪𝓬𝓴𝓓𝓪𝓻𝓭 \n:arrow_right: Nous vous souhaitons un excellent visionnage @everyone! \n' + lien);
                return; // this returns the code, so the rest doesn't run.
            }
            else if (message.member.roles.find("name", "JPTeam")) { 
                message.channel.send(':loudspeaker: Sortie d\'une nouvelle vidéo de 𝓙𝓟𝓣𝒆𝓪𝓶 \n:arrow_right: Nous vous souhaitons un excellent visionnage @everyone! \n' + lien);
                return; // this returns the code, so the rest doesn't run.
            }
        }
    
    
    
    

// Purge
    else if (message.content.startsWith(prefix + 'clean')) { 
        async function purge() {
            message.delete(); 

            if (!message.member.roles.find("name", "Master_Bot")) { 
                message.channel.send('Vous navais pas la permissions de faire ça.'); 
                return; // this returns the code, so the rest doesn't run.
            }

            if (isNaN(args[0])) {
                message.channel.send('Rentrer le nombre de ligne à supprimer. \n Usage: ' + prefix + 'clean <ligne>'); 
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); 
            console.log(fetched.size + ' messages found, deleting...');

            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

        }
    
        purge();
    message.channel.send('Messages Supprimés.');
    
     

    }
    
    else if (message.content.startsWith("Messages Supprimés"))      {
     setTimeout(nomdetafonction, 5000);
     function nomdetafonction() {
    
    }
        message.delete();
    }




    //////Apprentisage auto //////

    else if (message.content.startsWith(prefix + "liste"))      {
            if (!message.member.roles.find("name", "BDBot"))
                {
                    for (var i = 0; i < temoin; i++)
                    {
                        message.channel.send(questions[i] + ' -> ' + reponses[i]);
                    }
                }else{}
        } else
    
    if (message.content.startsWith(prefix + "learn"))
        {
            if (!message.member.roles.find("name", "BDBot"))
                {
                    var split = message.content.split(" ");
                    var firstpart = split.indexOf('start');
                    var secondpart = split.indexOf('return');

                    if (split.indexOf('end'))
                        {
                            var endpart = split.indexOf('end');
                        }
                    else
                        {
                            var endpart = split.length;
                        }
                    

                    if ((!split.indexOf('start')) || (!split.indexOf('return')))
                        {
                            // pas complet
                        }

                    else
                        {
                            var start = '';
                            var retour = '';
                            for (var i = 1; i < secondpart-firstpart; i++)
                                {
                                    if (start === '')
                                        {
                                            start = split[firstpart+i];
                                        }
                                    else
                                        {
                                            start = start + ' ' + split[firstpart+i];
                                        }
                                }
                            questions[temoin] = start;

                            for (var i = 1; i < endpart-secondpart; i++)
                                {
                                    if (retour === '')
                                        {
                                            retour = split[secondpart+i]
                                        }
                                    else
                                        {
                                            retour = retour + ' ' + split[secondpart+i]
                                        }
                                }
                            reponses[temoin] = retour;
                            temoin++;
                        }
                }

            else{}
        } else

    if ((questions) && (reponses)) {
        if (!message.member.roles.find("name", "BDBot")) {
            for (var i = 0; i < temoin; i++)
                {
                    
                    if (message.content.search(questions[i]) >= 0)
                        {
                            message.channel.send(reponses[i]);
                            i = temoin;                                                                             
                        }
                    else{}                  
                }
        }
        else{}
        }


    });

bot.login(process.env.TOKEN);
