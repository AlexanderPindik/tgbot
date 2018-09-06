//const debug = require('./helpers')
const fs=require('fs')
const TelegramBot= require ('node-telegram-bot-api');
const TOKEN ='612268838:AAHK5N7uY0w-rmFyQ9a_AGJnv-vB2L6N2Vs';

console.log('Bot is starting...............................')
const bot = new TelegramBot (TOKEN, {
	polling : {
		interval:300,
		autoStart:true,
		params: {
			setTimeout:30
		}
	}});



bot.onText(/\/contact/, msg=>{


bot.sendContact(msg.chat.id, '89217504454', 'Alexander', {
	last_name: 'Pink Slon'
})

})