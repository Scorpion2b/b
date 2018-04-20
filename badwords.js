function badword() {
	const swearWords = ["PD", "POULOULOU", "BUMBUMTAM", "SALE ARABE", "SALE ARABE", "SALE ARABE", "CONNARD", "BATARD", "FOUTRE", "VA TE FAIRE", "SUCE", "BITE", "FILS DE PUTE", "ENCULE", "SALE NEGRE","SALE NOIR","SALE JUIF","NAZI","SALOPE","SALOP","SALOPARD","TCHOIN","TEPU","PUTE","CATIN","MANGE TES MORT","NIQUE"];
	return(swearWords);
}

function badword_punition(){

	message.reply("Vous n'ête pas autorisé à dire ceci !");
  	message.delete();
  	if (!userData[sender.id]) userData[sender.id] = {
		messageSent: 0
  	}

  	userData[sender.id].messagesSent++;
  	fs.writeFile('userData.json' , JSON.stringify(userData), (err) =>{
  		if (err) console.error(err);
  	});

}
