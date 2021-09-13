console.log('Guten Nacht');
const Discord = require('discord.js');
const fsLibrary  = require('fs');
const bot = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const { time } = require('console');
var cambio;
var lore = 0;

bot.on('ready', () => {
	var si = 0;

	nombreChange();
	function nombreChange() {
		var hours = (new Date()).getHours();
		var minutes = (new Date()).getMinutes();
		var seconds = (new Date()).getSeconds();
		var randum = Math.round(Math.random()*6);
		switch (randum) {
			case 0:
				bot.user.setActivity('Velar por la seguridad de los Angarianos')
				break;
			case 1:
				bot.user.setActivity('Overseeing')
				break;
			case 2:
				bot.user.setActivity('Acatar la ley del Jaza')
				break;
			case 3:
				bot.user.setActivity('Hidden: Souce Beta 4b')
				break;	
			case 4:
				bot.user.setActivity('Ser el Rey de los Muertos mientras Helska no esta...')
				break;
			case 5:	
				bot.user.setActivity('Los dias del Martin Pescador')
				break;
			case 6:	
				bot.user.setActivity('La Batalla del Paso de Kalik')
				break;
		}
		console.log('Bot.log: Cambio ' + hours + ' ' + minutes + ' ' + seconds);
		si = setTimeout(nombreChange, 600000);

	}
	
	
	
});

bot.on('guildMemberAdd', member => {
	const rango = member.guild.roles.cache.get('733798957972586536');
	const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
	if (!channel){
		return;
	}
	member.roles.add(rango);
	channel.send(`Guten Tag, ${member}`);
});

bot.on('messageReactionAdd', (cosa, si) => {
	console.log("si");
	cosa.message.content = cosa.message.content.toLowerCase();
	const rol = cosa.message.guild.roles.cache.get("713557845278457868");
	if (rol.members.get(si.id) && cosa.message.channel.name != 'fuera-de-la-ley') {
		cosa.remove();
		return 0;
	}
	if (cosa.message.channel.name == "roles-☧") {
		if (cosa.message.content.includes("suka")) {
			cosa.message.guild.members.cache.get(si.id).roles.add(cosa.message.guild.roles.cache.get('750041083949613156'));
		}
		if (cosa.message.content.includes("uwu")) {
			cosa.message.guild.members.cache.get(si.id).roles.add(cosa.message.guild.roles.cache.get('750050442561585233'));
		}
	}

});

bot.on('messageReactionRemove', (cosa, is) =>{
    console.log("si");
});

bot.on('messageReactionRemove', (cosa, si) => {
	console.log("no");
	cosa.message.content = cosa.message.content.toLowerCase();
	if (cosa.message.channel.name == "roles-☧") {
		if (cosa.message.content.includes("suka")) {
			cosa.message.guild.members.cache.get(si.id).roles.remove(cosa.message.guild.roles.cache.get('750041083949613156'));
		}
		if (cosa.message.content.includes("uwu")) {
			cosa.message.guild.members.cache.get(si.id).roles.remove(cosa.message.guild.roles.cache.get('750050442561585233'));
		}
	}

});

bot.on('messageDelete', message => {
	fsLibrary.appendFile('registro.txt', 'El mensaje con la ID : ' + message.id + ' Fue borrado' + "\n", (error) => {
    	if (error) throw err;
	});
});

bot.on('messageUpdate', message => {


		fsLibrary.appendFile('registro.txt', 'El mensaje con la ID : ' + message.id + ' Fue editado a : ' + message.edits[0].content + "\n", (error) => {
			if (error) throw err;
		});		


});

bot.on('message', message => {
	console.log(message.author.id);
	if (!message.guild) return;
	const userio = (message.mentions);
	var canal = message.member.voice.channel;
	const rol = message.guild.roles.cache.get("713557845278457868");
	registrar(message.content, message.createdAt.toString(), message.author.username, message.id);
	message.content = message.content.toLowerCase();
	console.log(message.content);
	const links = new String();
	const attach = new Discord.MessageAttachment('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Latin_capital_letter_F_with_hook_in_ARA.svg/500px-Latin_capital_letter_F_with_hook_in_ARA.svg.png');
	links[0] = 'https://media1.tenor.com/images/62d6e3d7fc6ec74f750218a3f75cd48e/tenor.gif';
	links[1] = 'https://media1.tenor.com/images/70f64f0edff1723f11d857ee2b1b1e62/tenor.gif';
	links[2] = 'https://media1.tenor.com/images/d5ca7202421bbfc1d6e380cfbcbc371a/tenor.gif';
	const links2 = new String();
	links2[0] ='https://cdn.discordapp.com/attachments/607662280045494272/725471727836069888/250.jpg';
	links2[1] ='https://cdn.discordapp.com/attachments/607662280045494272/725471728435986552/440ZJval.jpg';
	links2[2] ='https://cdn.discordapp.com/attachments/607662280045494272/725471730176622602/20200424185035_42307645_0_body.webp';
	links2[3] ='https://cdn.discordapp.com/attachments/607662280045494272/725471732663844864/20200608185851_20200608-185929.jpg';
	links2[4] ='https://cdn.discordapp.com/attachments/607662280045494272/725471732873429002/1663936177523718_c5_720x720.jpeg';
	links2[5] ='https://cdn.discordapp.com/attachments/607662280045494272/725471734144434226/EP9GuB2W4AAAQJR.jpg';
	links2[6] ='https://cdn.discordapp.com/attachments/607662280045494272/725471736933515314/images_1.jpg';
	links2[7] ='https://cdn.discordapp.com/attachments/607662280045494272/725471736576999515/EV5zJvrXgAEG7iL.jpg';
	links2[8] ='https://cdn.discordapp.com/attachments/607662280045494272/725471738074365952/images_2.jpg';
	links2[9] ='https://cdn.discordapp.com/attachments/607662280045494272/725471740008071199/images_3.jpg';
	links2[10] ='https://cdn.discordapp.com/attachments/607662280045494272/725471782064357397/images_7.jpg';
	links2[11] ='https://cdn.discordapp.com/attachments/607662280045494272/725471784740323358/images_8.jpg';
	links2[12] ='https://cdn.discordapp.com/attachments/607662280045494272/725471787004985496/images_9.jpg';
	links2[13] ='https://cdn.discordapp.com/attachments/607662280045494272/725471788565528697/images.jpg';
	const links3 = new String();
	links3[0] ='https://media1.tenor.com/images/2858b92f8df443e27c6a81f3ec3d8346/tenor.gif';
	links3[1] ='https://media1.tenor.com/images/1888c1dfacd21fb2181c0be2a1fe2a99/tenor.gif';
	links3[2] ='https://media1.tenor.com/images/bee02163a855b0da41a11e92169c266d/tenor.gif';
	links3[3] ='https://cdn.discordapp.com/attachments/696319147478351942/742163422333894727/fcb150289ec1dabaf8d2c0083ba971c5.png';
	links3[4] ='https://cdn.discordapp.com/attachments/696319147478351942/742163101293740114/fpEnhPG_d.png';
	var rand1 = Math.round(Math.random()*2);
	var rand2 = Math.round(Math.random()*13);
	var rand3 = Math.round(Math.random()*4);

	if (message.content.startsWith('-desmute') && message.mentions.users.lastKey() != undefined && !message.member.kickable && message.author.id != userio.users.lastKey()){
		if (userio.guild.members.cache.get(userio.users.lastKey()).roles.cache.get("713557845278457868") == undefined) {
			message.channel.send("El usuario seleccionado no esta muteado");

		}
		else{
		userio.guild.members.cache.get(userio.users.lastKey()).roles.remove(message.guild.roles.cache.get("713557845278457868"))
		.catch(err => {
			message.channel.send("No pude desmutearlo");
			console.error(err);
		});
		message.channel.send("Usuario desmuteado correctamente" + '<@' + message.mentions.users.lastKey() + '>')
		message.delete();
	}
	}
	else if(message.content.startsWith('-desmute') && message.mentions.users.lastKey() == undefined && !(message.author.bot)){
		message.reply('No se selecciono ningun usuario');
	}
	else if(message.content.startsWith('-desmute') && !(message.author.bot) && message.author.id == userio.users.lastKey()){
		message.channel.send("No se puede desmutear a si mismo");
	}

	if (message.content.startsWith('-mute') && message.mentions.users.lastKey() != undefined && !message.member.kickable){
		if (userio.guild.members.cache.get(userio.users.lastKey()).roles.cache.get("713557845278457868") != undefined) {
			message.channel.send("El usuario seleccionado ya esta muteado");

		}
		else{
		userio.guild.members.cache.get(userio.users.lastKey()).roles.add(message.guild.roles.cache.get("713557845278457868"))
		.catch(err => {
			message.channel.send("No pude mutearlo");
			console.error(err);
		});
		message.channel.send("Usuario muteado correctamente" + '<@' + message.mentions.users.lastKey() + '>');
		message.delete();
	}
	}
	else if(message.content.startsWith('-mute') && message.mentions.users.lastKey() == undefined && !(message.author.bot)){
		message.reply('No se selecciono ningun usuario');
	}

	if (rol.members.get(message.author.id) && message.channel.name != 'fuera-de-la-ley') {
		message.delete();
		return 0;
	}



	if(message.content.includes(' nadie') || message.content.includes('nadie ')){

		const embed = new MessageEmbed()
		// Set the title of the field
				.setTitle('Nadie:')
			// Set the color of the embed
				.setColor(0xff0020)
			// Set the main content of the embed

				.setImage(links2[rand2])

		message.channel.send(embed);

	}

	if ((message.content.includes("buenardo") || message.content.includes(" dou ") || message.content.includes("dou ") || message.content == "dou") && !message.content.includes("estadounidense") && message.channel.name != 'fuera-de-la-ley'  ) {
		if (message.content.includes("dou") ) {
			message.channel.send("https://cdn.discordapp.com/attachments/716502189941719142/740205375222972597/zombomeme04082020105139.jpg");
		}
		else{
			message.reply("be ashamed, A forbidden Word was said");
		}
		
		message.member.roles.add(rol);
	}

	if (message.content.startsWith('-spam') && message.mentions.users.lastKey() != undefined ){
		for (let i = 0; i < 3; i++) {
			const embed = new MessageEmbed()
		// Set the title of the field
				.setTitle("Bajate el LOL, ")
			// Set the color of the embed
				.setColor(0xff0020)
			// Set the main content of the embed
				.setDescription('<@' + userio.users.lastKey() + '>')

				.setImage(message.author.avatarURL())

			message.channel.send(embed);
		}
		message.delete();
	}
	else if(message.content.startsWith('-spam') && message.mentions.users.lastKey() == undefined && !(message.author.bot) && message.content.includes("big f")){
		message.reply(attach);
		message.reply(attach);
		message.reply(attach);
		message.delete();
	}
	else if(message.content.startsWith('-spam') && message.mentions.users.lastKey() == undefined && !(message.author.bot)){
		message.reply('No se selecciono ningun usuario');
	}

	if (message.content.startsWith('-praise') ){
		if (message.content.includes("odin")) {
			const embed = new MessageEmbed()
		// Set the title of the field
				.setTitle("ODIIIIIN")
			// Set the color of the embed
				.setColor(0xff0020)
			// Set the main content of the embed
				.setDescription('Odin esta con nosotros')

				.setImage("https://cdn.discordapp.com/attachments/696319147478351942/716375713569046629/20200522_160317.jpg")

			message.channel.send(embed);
		}
		else if (message.content.includes("jer jaza")) {
			const embed = new MessageEmbed()
			// Set the title of the field
					.setTitle("Aed bar Jer Jaza")
				// Set the color of the embed
					.setColor(0xff0020)
				// Set the main content of the embed
					.setDescription("You've been _Oppressed_")
	
					.setImage("https://cdn.discordapp.com/attachments/696289365353299972/741048768840990770/1506401862_17424751_10155275274153469_7395908416950889224_n.jpg");
	
				message.channel.send(embed);
		}
		else{
			message.reply('No se selecciono ningun dios');
		}
	}

	if (message.content.startsWith('-invocar') && message.mentions.users.lastKey() != undefined && message.channel.id == "728008072760393832" ){
		for (var i = 0; i < 3; i++) {
			message.channel.send("<@" + message.mentions.users.lastKey() + ">" + "<@" + message.mentions.users.lastKey() + ">" + "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">"+ "<@" + message.mentions.users.lastKey() + ">");
		}
		message.delete();
	}
	else if (message.content.startsWith('-invocar') && message.mentions.users.lastKey() == undefined && !(message.author.bot) && message.channel.id == "728008072760393832" && message.content.includes('@everyone')){
		for (var y = 0; y < 3; y++) {
		message.channel.send('@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone');	
		}
		message.delete();
	}
	else if (message.content.startsWith('-invocar') && message.mentions.users.lastKey() == undefined && !(message.author.bot) && message.channel.id == "728008072760393832"){
		message.reply('No se selecciono ningun usuario');
	}

	if (message.content.startsWith('-badmeme')){
		message.delete();
		var embed = new MessageEmbed()
		// Set the title of the field
				.setDescription('WARNING!!')
			// Set the color of the embed
				.setColor(0xff0020)

				.setImage("https://media.discordapp.net/attachments/199126650317832192/700029697408499772/Unfunny_Meme.gif");

			message.channel.send(embed);
	}

	if (message.content.startsWith('-cb')){
		message.delete();
		var embed = new MessageEmbed()
		// Set the title of the field
				.setDescription('WARNING CONTAINMENT BREACH!!')
			// Set the color of the embed
				.setColor(0xff0020)

				.setImage("https://cdn.discordapp.com/attachments/435938425196249108/580144727630807172/image0-4-2.png");

			message.channel.send(embed);
	}

	if (message.content.startsWith('-painfullmeme')){
		message.delete();
		var embed = new MessageEmbed()
		// Set the title of the field
				.setDescription('Thanks to you, I decided I want to die')
			// Set the color of the embed
				.setColor(0xff0020)

				.setImage("https://media1.tenor.com/images/432261184122de5c0142153dbeac3387/tenor.gif?itemid=13602646");

			message.channel.send(embed);
	}

	if (message.content.startsWith('-holymeme')){
		message.delete();
		const embed = new MessageEmbed()
		// Set the title of the field
		.setDescription('*AoE monk sounds intensifies*')
			// Set the color of the embed
				.setColor(0xff0020)

				.setImage("https://cdn.discordapp.com/attachments/696319147478351942/741820660334198855/20200808_214959.jpg")

			message.channel.send(embed);
	}

	if (!(message.author.bot)) {
		switch (lore) {
			case 1:
				switch (message.content) {
					case "1":
						message.reply("Elija una opcion:    1.Angaria   2.Pentarquia    3.Tulek    4.Tartaria    5.Alfaria   6.No-Muertos   7.Dragones   8.Kushanos");
						lore = 2;
						break;
					case '2':
						message.reply("Elija una opcion:    1.Angaria Imperial    2.Kaiserland    3.Federacion del norte    4.Kerykalkos    5.Franconnia   6.Zenousia   7.Terra Interioris   8.Terra Exterioris   9.Marcas Humanas   10.Sepiente de Tulek   11.Elfendir   12.Olkendir   13.Namenarndir   14.Humenandir   15.Drakkendir   16.Montes de Cyraenshe   17.Tierras Sombrias   18.La Gran Desolacion   19.Hunenstag   20.Protectorado   21.Alfaria Nova   22.Tartirennen   23.Tarterennen   24.Cinturon Kushano   25.Cinturon Exterior");
						lore = 3;
						break;
					case '3':
						message.reply("Elija una opcion:    1.Tiempos Primigeneos    2.Tiempos Ancestrales    3.Tiempos Antiguos    4.Llegada de los Humanos    5.El Gran Cataclismo   6.Tiempos Continentales   7.El Alzamiento del Imperio Angariano   8.Tiempos de Rojo y Granate   9.La Guerra Civil Angariana   10.Las Guerras de Sangre   11.Tiempos de la Gran Horda   12.Tiempos de la Expansion Imperial   13.Las Guerras Dimensionales");
						lore = 4;
						break;
					case '4':
						message.reply("Elija una opcion:    1.Los Campos de Helska    2.Jer-Jaza    3.Rhinnafurt    4.CenKeiser    5.Tartareningrado   6.Shar Shelaizer   7.La Capital de la Muerte   8.Yggdrassil   9.Terra   10.Cabeza   11.Alfa   12.Batalla de Jer-Jaza");
						lore = 5;
						break;
					case '5':
						message.reply("Elija una opcion:");
						lore = 6;
						break;

					default:
						message.reply("Seleccion invalida");
						lore = 0;
						break;
				}
				break;
			case 2:
				switch (message.content) {
					case "1":
						message.reply("Elija una opcion:    1.Historia   2.Gobierno y Politica    3.Organizacion Territorial    4.Economia    5.Cultura");
						lore = 7;
						break;
					case '2':
						message.reply("Elija una opcion:    1.Historia   2.Gobierno y Politica    3.Organizacion Territorial    4.Economia    5.Cultura");
						lore = 8;
						break;
					case '3':
						message.reply("Elija una opcion:    1.Historia   2.Gobierno y Politica    3.Organizacion Territorial    4.Economia    5.Cultura");
						lore = 9;
						break;
					case '4':
						message.reply("Elija una opcion:    1.Historia   2.Gobierno y Politica    3.Organizacion Territorial    4.Economia    5.Cultura");
						lore = 10;
						break;
					case '5':
						message.reply("Elija una opcion:    1.Historia   2.Gobierno y Politica    3.Organizacion Territorial    4.Economia    5.Cultura");
						lore = 11;
						break;
					case '6':
						message.reply("Elija una opcion:    1.Historia   2.Gobierno y Politica    3.Organizacion Territorial    4.Economia    5.Cultura");
						lore = 12;
						break;
					case '7':
						message.reply("Elija una opcion:    1.Historia   2.Gobierno y Politica    3.Organizacion Territorial    4.Economia    5.Cultura");
						lore = 13;
						break;
					case '8':
						message.reply("Elija una opcion:    1.Historia   2.Gobierno y Politica    3.Organizacion Territorial    4.Economia    5.Cultura");
						lore = 14;
						break;

					default:
						message.reply("Seleccion invalida");
						lore = 0;
						break;
				}
				break;
			case 3:
				
				break;
			case 4:
			
				break;
			case 5:
				
				break;
			case 6:
				
				break;
			case 7:
				switch (message.content) {
					case "1":
						message.reply("El surgimiento del Imperio Angariano delimito el final de los tiempos antiguos y el comienzo los tiempos continentales.");                                  
						message.reply("La civilizacion Angariana surgio en Sudentalfia ('El que esta mas al sur' en algun dialecto humano anterior al gran cataclismo), un planeta estepario que orbita la supergigante roja Jer-Jaza ('Gran Emperador' en angariano o 'Gran Sol' en angariano runico).");
						message.reply("Al principio los angarianos estaban esparcidos en tribus a lo largo del norte del planeta y principalmente en el macizo de Valeis.");
						message.reply("Las tribus se dividian segun a que animal y color adoraban. Los Akileos, que habitaban las estriaciones de la cordillera de los caidos, adoraban a las aguilas y el rojo, eran principalmente grandes guerreros. Los Zorenuskos (o pueblo de Valeis), que habitaban los muchos rios del macizo y las cuevas que ocuparon civilizaciones ancestrales, adoraban a los zorros y lobos y el verde, eran herreros y guerreros. Los Dorados, que habitaban el norte y la costa del macizo, adoraban el amarillo y los jabalies, grandes comerciantes y jinetes. Los Kerakinnen, habitaban la cordillera de los caidos, adoraban principalmente aves y el purpura, se cuenta que eran los mas sabios entre los angarianos. Los Sebastopolacos, habitaban las islas del norte del macizo antereriormente eran una subtribu de los akileos, adoraban animales marinos y el azul, comerciantes y guerreros.  Los Sudenffen, habitaban mas alla de la cordillera de los caidos y en lugares tan al sur y remotos como las estepas de tauretania o las costas del oceano del empereador, adoraban a los dragones y el naranja, eran grandes guerreros y expandieron el Ahurismo entre los angariano, la mayor parte de los sudeffen fue exterminada o esclivizada por el imperio tauretano y solo permanecieron los de mas al sur.");
						message.reply("En cierto punto las hostilidades entre los zorenuskos y el resto de tribus ascendio a tal nivel que la mayor parte de los zorenuskos tuvo que abandonar el continente y asentarse con el pueblo khazarino que les brindo asilo formando mas tarde los pueblos gemelos de Zaehringhen y Tutlinghen (Llamados simplemente pueblos de Valeis o pueblos gemelos).");                            
						message.reply("Mas tarde los pueblos gemelos invadirian el continente estableciendo el primer reino unificado de los angarianos, An-Garia('El Reino' en angariano antiguo o 'Los Gemelos' en angariano runico o 'El Estado' en angariano), la invasion fue perpetrada por los reyes gemelos de los pueblos gemelos, estableciendo una tradicion sobre los gemelos que perduraria en la cultura angariana.");
						message.reply("Pronto estallaron agresiones entre el nuevo reino angariano y sus vecinos tauretanos al sur. Los enfrentamientos llegaron a tal punto que la cordillera que rodea el macizo de Valeis paso a llamarse Cordillera de los Caidos en honor a los angarianos que cayeron defendiendo el reino durante numerosas guerras. Finalmente los tauretanos conquistaron gran parte del macizo y esclavizaron buena parte de la poblacion. Poco despues de este desafortunado suceso, el rey Jereqh de los akileos fue coronado. Durante su reinado el ejercito angariano vio importantes avances y se recuperaron las posesiones del macizo y hasta se llevo la guerra mas alla de la cordillera de los caidos. Desafortunadamente, Jereqh, murio en la batalla mas grande entre ambos bandos, la Batalla de los Campos de Helska, aun asi los angarianos vencieron. Poco despues fue coronado el hijo de Jereqh, Kerotopon, fue ampliamente cuestionado por no continuar la guerra mientras defendia el pais de no muertos levantados tras la gran batalla. Finalmente los nobles declararon no servir mas al rey comenzo un enfrentamiento entre lideres. Kerotopon fue asesinado durante la batalla de Taar-Non-Taka, sus hijos, Agathos y Agatha, consiguieron la victoria y fueron coronados no mucho despues. Tras largas guerras unificaron el reino, llevaron el ejercito angariano a su mejor estado y revivieron las tecnologias de los antiguos, entrando asi en una epoca de viajes espaciales. En poco tiempo los angarianos se hicieron con muchos de los antiguos territorios que los humanos aun poseian en la galaxia. Esto significo la creacion de un nuevo estado angariano, el Gran Sacro Imperio Angariano, fundado en honor a Ahura, diosa principal de la segunda religion angariano mas seguida, la primera es el culto a Jer-Jaza.");    
						message.reply("Siglos despues, en la guerra civil, el Sacro Imperio quedaria disuelto y el nuevo estado seria la Gran Hegemonia Imperial Angariana");
						lore = 0;
						break;
					case '2':
						message.reply("La Hegemonia Imperial Angariana utiliza un sistema federal-imperial que llaman hazarium o hazarato.");
						message.reply("Este sistema divide las regiones en 'hazaratos'('Gobernaciones' o 'provincias' en angariano), cada uno de estos es practicamente autogobernado, cada uno cuenta con sus propias leyes y sistemas, practicamente funcionan como un estado a parte, pero todos responden ante el emperador angariano en Angaria Imperial y el parlamento imperial");
						message.reply("Cada hazarato tiene la representacion de sus intereses en el parlamento imperial y, a su vez, un un enviado que se encarga de atender los problemas provinciales en nombre del imperio.");
						message.reply("Cada hazarato proporciona cierto valor en produccion economica o mano de obra en relacion a las fuerzas armadas del imperio.");
						message.reply("El emperador tiene poder absoluto e ilimitado en todo el imperio. Solo esta restringido por lo mas parecido que tienen los angarianos a una constitucion, el Pantheon Dorado, una recamara hecha de oro puro en la que el primer emperador esculpio las reglas que los emperadores deberian seguir en situaciones normales, si se rompe alguna regla debe tener una muy buena justificacion para que esto no termine en una guerra civil.");
						message.reply("Desde los Tiempos de Rojo y Granate, el gobierno perdio mucha cohesion lo cual se tradujo en enfrentamientos armados entre los hazaratos para lograr sus reclamaciones mientras Angaria Imperial acumulaba las riquezas en su territorio y mejoraba su propia infraestructura. En el sistema, los hazaratos se pueden enfrentar sin intervencion de Angaria Imperial pero la idea principal es que no lo hagan.");
						message.reply("El organo principal de legislacion es el Parlamento Imperial en el que estan representadas todas las tribus angarianas de Angaria Imperial y requiere al menos 60% de los votos a favor para aprovar cambios menores(relacionadas a hazaratos en concreto, modificaciones que no afecten todo el sistema, etc) y al menos un 51% y la aprovacion del emperador para cambios mayores(reformas militares, leyes que incluyen a todos los hazaratos, etc), de cualquier forma el emperador puede hacer decretos sin necesidad de consultar al parlamento, aunque debe tener una buena razon para ello. En un principio todos los cambios debian ser aprobados por el emperador y el parlamento era simplemente el concejo al que acudia el emperador para ser aconsejado.");
						message.reply("Socialmente, en Angaria Imperial, se dividen en: Badirak, personas indocumentadas y extranjeros que, a pesar de su estatus, cuentan con varios beneficios. Cittuel, los ciudadanos del imperio y la situacion mas comun. Gaza, similar a un noble, cualquier ciudadano puede rendir un examen complicado principalmente moral acerca de administracion, esta denominacion es un requisito si se desea ascender en la jerarquia de gobierno. Kommlerr, similares a los gaza pero apuntando a un matiz mas comercial, es una denominacion necesaria para poseer empresas medias y grandes.");
						message.reply("En Angaria Imperial, a la hora de elegir gobernantes regionales, toda la poblacion realiza votaciones, pero el peso del conjunto de todos los votos de los cittuel es tanto como el de los gaza, es decir, si hay 1000 cittuel y 20 gazas y todos los cittuel votan a favor y todos los gaza en contra, seria un empate.");
						message.reply("Para elegir un nuevo emperador, cada candidato que sea al menos gaza puede presentarse y cada hazarato elige alguno, la forma de emitir votos varia entre hazaratos. Anteriormente el emperador designaba a cualquier gaza que eligiera como su sucesor.");
						message.reply("Angaria Imperial posee dos reyes, el emperador y un gaza elegido por el resto de gazas. Antiguamente el segundo rey era el sucesor designado por el emperador.");
						message.reply("Las fuerzas armadas angarianas estan lideradas por el Kommanddo('Alto mando' en angariano aunque tiene un significado mas extenso), el cual se encarga a grandes rasgos de investigar culturalmente a los enemigos del imperio y dirigir el ejercito a nivel estrategico. Las fuerzas terrestres estan dividas en dos, las Legionis('legiones'), tropas de choque preparadas para hacer la mayor parte de las labores en el campo, y las Aentander('ejercito' o 'cuerpo guerrillero' en angariano), cuerpos de operaciones estrategicas a gran escala, usualmente marchan en conjunto con las legionis y les ofrecen apoyo. Las fuerzas aeronavales son denominadas Klassideransis('flota'). El Jer Jaza o emperador es el comandante en jefe de todas las fuerzas armadas, aunque este puesto se suele delegar a un Jer Kommanderr.");
						message.reply("El sistema de derecho angariano esta basado en el sistema romano y fuertemente modificado por los antiguos principios legales de la tribu de Tada-Jakist, una de las primeras tribus angarianas.");
						message.reply("El sistema legal angariano es operado principalmente por gazas, se suelen tener muy en cuenta las situaciones y los crimenes en si y se dan penas adecuadas a estos.");
						message.reply("Cada hazarato tiene su propio organo legislativo y judicial, aunque estos dependen en gran medida de Angaria Imperial.");
						message.reply("La cabeza de estado es el Jer Jaza o Gran Emperador y su sucesor el Jer Kaza o Gran Rey.");
						message.reply("En un principio, en la cultura, la palabra gaza se utilizo para referirse al rey pero con el tiempo se reemplazo por kaza. En los hazaratos se suele usar la palabra gaza para gobernador o baron, haza para duque, kaza para rey y jaza para emperador.");
						lore = 0;
						break;
					case '3':
						message.reply("Elija una opcion:    1.Historia   2.Gobierno y Politica    3.Organizacion Territorial    4.Economia    5.Cultura");
						lore = 0;
						break;
					case '4':
						message.reply("Elija una opcion:    1.Historia   2.Gobierno y Politica    3.Organizacion Territorial    4.Economia    5.Cultura");
						lore = 0;
						break;
					case '5':
						message.reply("Elija una opcion:    1.Historia   2.Gobierno y Politica    3.Organizacion Territorial    4.Economia    5.Cultura");
						lore = 0;
						break;

					default:
						message.reply("Seleccion invalida");
						lore = 0;
						break;
				}
				break;
			case 8:
				
				break;
			case 9:
					
				break;
			case 10:
					
				break;
			case 11:
				
				break;
			case 12:
				
				break;
			case 13:
					
				break;
			case 14:
					
				break;
			case 15:
					
				break;

			default:
				break;
		}

	}
	if (message.content.startsWith('-lore')) {
		message.reply("Elija una opcion:    1.Facciones    2.Regiones    3.Historia    4.Eventos y lugares    5.Personaje importantes");
		lore = 1;
	}

	if (message.content.startsWith('-celebrate') ){
		var texto = message.content.replace("-celebrate", "");
		if (message.content.includes("crabs")) {
			texto = texto.replace("crabs", "");
			texto = texto.toUpperCase();

			const embed = new MessageEmbed()
		// Set the title of the field
				.setTitle(texto)
			// Set the color of the embed
				.setColor(0xff0020)
			// Set the main content of the embed
				.setDescription('***DANCE***')

				.setImage("https://media1.tenor.com/images/d0aa8a1ad917506506993ab2f5232e42/tenor.gif")

			message.channel.send(embed);
			if (message.member.voice.channel != undefined) {
				clearTimeout(cambio);
				message.member.voice.channel.join().then(connection => {
					connection.play( ("Crab Rave but it's only the BEAT DROP.mp3")   );
				})
				.catch(err => {
					console.error(err);
				  });
				cambio = setTimeout(sacarPorMensage, 60000);
			}
		}
		else if (message.content.includes("seee")) {
			texto = texto.replace("seee", "");
			texto = texto.toUpperCase();

			const embed = new MessageEmbed()
		// Set the title of the field
				.setTitle(texto)
			// Set the color of the embed
				.setColor(0xff0020)
			// Set the main content of the embed
				.setDescription('***SEEEEEE***')

				.setImage("https://media1.tenor.com/images/e73d11cafea91d2504db6790bca9645f/tenor.gif?itemid=11733200.com/view/baby-scream-yeah-hockey-kid-angry-gif-11733200")

			message.channel.send(embed);
		}
		else{
			message.reply('No se selecciono ninguna imagen');
		}
	}

  	if (message.content === 'cual seria mi avatar') {
  		message.reply(message.author.displayAvatarURL());
	}

	if (message.content.includes('<@!696280609785511987>') || message.content.includes('<@696280609785511987>') && !(message.author.bot)) {
		message.reply('Que')
	}

	if (message.content.includes('@everyone')) {
		const embed = new MessageEmbed()
		// Set the title of the field
			// Set the color of the embed
				.setColor(0xff0020)
			// Set the main content of the embed

				.setImage(links3[rand3])

		message.channel.send(embed);
	}

	if (message.content == '-leave') {
		sacarPorMensage();
	}

	if (message.content == 'f'){
		message.reply('f');
	}

	if (message.content.includes(' eeee')   || message.content.includes('yay')  || message.content.includes('yey') ){
		const embed = new MessageEmbed()
		// Set the title of the field
				.setDescription("Happy <@" + message.author + '> noises')
			// Set the color of the embed
				.setColor(0xff0020)

				.setImage("https://cdn.discordapp.com/attachments/712020832649609272/727522777040420994/cover2.jpg")

			message.channel.send(embed);
	}

	if (message.content.includes(' sad') || message.content.includes('sad ') || message.content == ('sad')){
		const embed = new MessageEmbed()
		// Set the title of the field
				.setDescription("Sad <@" + message.author + '> noises')
			// Set the color of the embed
				.setColor(0xff0020)

				.setImage("https://cdn.discordapp.com/attachments/696282921018982413/727710051049144350/Screenshot_20200329-224555_Instagram.jpg")

			message.channel.send(embed);
	}

	if (message.content.includes('betrayer')){

			message.channel.send("https://cdn.discordapp.com/attachments/696289365353299972/732607314120409098/20200316_041251.jpg");
			message.delete();
	}

	if (message.content === 'big f'){
		message.reply(attach);
	}

	if(message.content == 'do a flip' || message.content == 'hace un backflip'){
		const embed = new MessageEmbed()
		// Set the title of the field
			.setTitle("***HACE UN BACKFLIP***")
			// Set the color of the embed
			.setColor(0xff0000)
			// Set the main content of the embed
			.setDescription('Cae sobre <@'+ message.author + '>, f')

			.setImage(links[rand1]);

		message.channel.send(embed);
	}

	if (message.content === 'buenardium') {
		message.react(message.guild.emojis.cache.get("712072365735149598"))
			.then(console.log)
			.catch(console.error);
	}
	function sacarPorMensage() {

		if (message.guild.channels.cache.find(channel => channel === canal) != 0){
			canal.leave();
		}
	}

});
// import fs module in which writeFile function is defined.
// Data which will need to add in a file.
// Write data in 'newfile.txt' .
function registrar(contenido, fecha, autor, id) {
	var registro = new String();
	registro = registro.concat('ID : ', id, ' ', fecha, autor, ":", contenido, "\n");
	fsLibrary.appendFile('registro.txt', registro, (error) => {
    	if (error) throw err;
	});
}






bot.on('message', message => {
	// Ignore messages that aren't from a guild
	if (!message.guild) return;
	message.content = message.content.toLowerCase();
	// If the message content starts with "!kick"
	if ( message.content === 'bajate el wow' || message.content === 'descargate el wow') {
	  // Assuming we mention someone in the message, this will return the user
	  // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
	  const user = message.author;
	  // If we have a user mentioned
	  if (user) {
		// Now we get the member from the user
		const member = message.guild.member(user);
		// If the member is in the guild
		if (member) {
		  /**
		   * Kick the member
		   * Make sure you run this on a member, not a user!
		   * There are big differences between a user and a member
		   */
		  member
			.kick('Por Fea')
			.then(() => {
			  // We let the message author know we were able to kick the person
			  message.reply(`Kickeado el feo de ${user.tag}`);
			})
			.catch(err => {
			  // An error happened
			  // This is generally due to the bot not being able to kick the member,
			  // either due to missing permissions or role hierarchy
			  message.reply('No pude sacarlo');
			  // Log the error
			  console.error(err);
			});
		}
	  }
	}
  });
bot.login('');