function badword() {
	const swearWords = ["PD", "POULOULOU", "BUMBUMTAM", "SALE ARABE", "SALE ARABE", "SALE ARABE", "CONNARD", "BATARD", "FOUTRE", "VA TE FAIRE", "SUCE", "BITE", "FILS DE PUTE", "ENCULE", "SALE NEGRE","SALE NOIR","SALE JUIF","NAZI","SALOPE","SALOP","SALOPARD","TCHOIN","TEPU","PUTE","CATIN","MANGE TES MORT","NIQUE"];
	return(swearWords);
}

function badword_punition(){

	message.reply("Vous n'ête pas autorisé à dire ceci !");
  	message.delete();

  	var vérif = message.author.id;
  	for(i=0 ; i < juge ; i++)
  	{
  		if (casier[i] === vérif) 
  		{
  			amende[i]++;
  			i = juge;
  		}
  		else
  		{
  			juge++;
  			casier[juge] = vérif;
  			i = juge;
  		}
  	}

  	for(i=0 ; i < juge ; i++)
  	{
  		if (amende[i] > 3) 
  		{
			message.send('coucou tu va prendre cher !');
  			i = juge;
  		}
  		else
  		{}
  	}
}
