const Discord = require("discord.js");
const bot = new Discord.Client();


bot.on("ready", () => {
    console.log("I am ready!");
    bot.user.setActivity('BDBot | *help');
});

const prefix = "*";




bot.on("join",() => {
	var dt = new Date();
  var heure = dt.getHours();
  var minutes = dt.getMinutes();
  var timeday = "[" + heure + ":" + minutes + "] ";
  let guild = member.guild;
  console.log(timeday + "[Join Guild] " + member.user.username + " joined " + guild);

  /* message de bienvenue */
  member.send("Bienvenue sur **'Communauté -- BlackDard'** \n > N'oublie pas de bien prendre connaissence du salon #ｒｅｇｌｅｍｅｎｔ avant de faire une erreur ! \n > Les membres du staff ainsi que moi même sont la pour vous aider si jamais vous a des questions. :wink: \n")
	
  /* rank de la personne a son arriver */
  if (guild.roles.exists("name", "Abonnés")) {
    let joinRole = guild.roles.find('name', 'Abonnés');
    member.edit({
        roles: [joinRole]
      })
  }
});




bot.on("message", (message) => {

	//tableau badwords

	var casier = new Array();
	var amende = new Array();

	var juge = 1;

	var fs = require("fs"); 

	eval(fs.readFileSync('badwords.js')+'');

	const swearWords = badword();


	const argus = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = argus.shift().toLowerCase();
	var msg = message.content.toUpperCase();
    
    let sender = message.author; 
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    
    if (message.channel.type === "dm") 
    {
  		if (message.author === bot.user) 
  		{
  		
  		} 
  		else 
  		{
    		console.log("<Private>: " + message.author.username + ": " + message.content)
    		message.channel.sendMessage("Je suis désactivée en message privés, dommage :wink:")
  		}
	} 

    
    else if (message.content.startsWith(prefix + "help"))    {
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
    



// Mot interdit

    else if( swearWords.some(word => msg.includes(word)) ) {

  		badword_punition(juge);
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
    


    });

bot.login(process.env.TOKEN);
