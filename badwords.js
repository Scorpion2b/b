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

  		console.log('dedant');
  		if (casier[i] === vérif) 
  		{
  			console.log('dedans 2');
  			amende[i]++;
  			i = juge;
  		}
  		else
  		{	
  			console.log('dedans 3');
  			casier[juge] = vérif;
  			juge++;
  			i = juge;
  		}
  	}

  	for (var i = 0; i < juge; i++) 
  	{
  		console.log('après');
  		message.channel.send(casier[i]);
  		message.channel.send(amende[i]);

  	}
}
