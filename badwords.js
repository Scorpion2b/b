function badword() {
	const swearWords = ["PD", "POULOULOU", "BUMBUMTAM", "SALE ARABE", "SALE ARABE", "SALE ARABE", "CONNARD", "BATARD", "FOUTRE", "VA TE FAIRE", "SUCE", "BITE", "FILS DE PUTE", "ENCULE", "SALE NEGRE","SALE NOIR","SALE JUIF","NAZI","SALOPE","SALOP","SALOPARD","TCHOIN","TEPU","PUTE","CATIN","MANGE TES MORT","NIQUE"];
	return(swearWords);
}

function badword_punition(juge){

	message.reply('Vous n\'ête pas autorisé à dire ceci !');
  	message.delete();

  	var vérif = message.author.id;

  	console.log('avant');

  	console.log(juge);

  	for (var i = 0; i < juge; i++) 
  	{
  		if (casier[i] === vérif) 
  		{
  			amende[i]++;
  			i = juge;
  		}
  		else
  		{	
  			casier[juge] = vérif;
  			juge++;
  			i = juge;
  		}
  	}

  	for (var i = 0; i < juge; i++) 
  	{
  		if (amende[i] > 3) 
  		{
  			message.reply('Vous avez été mute.');

  			var myRole = message.guild.roles.find("name", "Muet").id; 
  			const guildMember = message.member; 
  			guildMember.addRole(myRole);

  		}
  	}
}
