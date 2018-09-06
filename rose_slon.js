//const debug = require('./helpers')
const nodemailer = require('nodemailer');
const fs=require('fs')
const os = require('os');

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

//bot.onText(/\/audio/, msg=>{
//	bot.sendAudio(msg.chat.id, './mom.mp3')

//})

var r_text = new Array ();
r_text[0] = "Если Вы проявите инициативу, успех не заставит себя ждать";
r_text[1] = "Ваши надежды и планы сбудутся сверх всяких ожиданий.";
r_text[2] = "Готовьтесь к романтическим приключениям.";
r_text[3] = "Вам стоит немного подождать, и будущее принесет вам большую радость.";
r_text[4] = "Вас ждет приятный сюрприз.";
r_text[5] = "Учитесь правильно оценивать различные стороны жизни.";
r_text[6] = "Через вашу индивидуальность и обаяние, вы всегда будете достигать, чего хотите.";
r_text[7] = "Ваши таланты будут признаны и вознаграждены по достоинству.";
r_text[8] = "Скоро ты приобретешь две новых привычки и избавишься от одной.";
r_text[9] = "Если чего-то действительно хочешь, то вся вселенная поспособствует исполнению желания.";
r_text[10] = "Чудеса случаются. Особенно если над ними хорошо поработать...";
r_text[11] = "Только ты определяешь пределы своих возможностей. Не ограничивай себя!";
r_text[12] = "У тебя есть все, чтобы осуществить свою мечту прямо сейчас!";
r_text[13] = "Не позволяй плохим дням внушить тебе, что плоха сама жизнь";


bot.onText(/\/myfortune/, msg =>{

	const {id}= msg.chat
	var i = Math.floor(14*Math.random())
	//bot.sendMessage(id, JSON.stringify(msg, null, 4))
	bot.sendMessage(id, r_text[i])
	 console.log(msg)
	 console.log(r_text[i])


// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.km.ru',  // 'smtp.ethereal.email'
        port: 587,      // 587
        secure: false, // true for 465, false for other ports   
        auth: {
            user: 'p-2006@km.ru', // generated ethereal user  nngucosgjfnpt2yy@ethereal.email
            pass: 'reverser7' // generated ethereal password  wwggSqVsYbEssG2tBa
        }
    });
    

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'p-2006@km.ru', // sender address
        to: 'pindik2012@gmail.com', // list of receivers
        subject: 'Bot Message', // Subject line
        text:  msg.from.first_name+ ' '+msg.from.last_name +'  '+ msg.text+ '  '+ r_text[i] , // plain text body
       // html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});

var now = new Date();
fs.appendFileSync("logfile1.txt", os.EOL + now + '  '+msg.from.first_name+ ' '+msg.from.last_name+ '  '+ msg.text+ '  '+ r_text[i])
                
});




bot.onText(/\/start/, msg =>{

	const {id}= msg.chat
	//bot.sendMessage(id, JSON.stringify(msg, null, 4))
	bot.sendMessage(id, 'Вы запустили бота для распугивания розовых слонов.')
	 console.log(msg)

   
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.km.ru',  // 'smtp.ethereal.email'
        port: 587,      // 587
        secure: false, // true for 465, false for other ports   
        auth: {
            user: 'p-2006@km.ru', // generated ethereal user  nngucosgjfnpt2yy@ethereal.email
            pass: 'reverser7' // generated ethereal password  wwggSqVsYbEssG2tBa
        }
    });
    

    // setup email data with unicode symbols
    
    let mailOptions = {
        from: 'p-2006@km.ru', // sender address
        to: 'pindik2012@gmail.com', // list of receivers
        subject: 'Bot Message', // Subject line
        text: msg.text + '  '+ msg.from.first_name+ ' '+msg.from.last_name // plain text body
       // html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});

var now = new Date();
fs.appendFileSync("logfile1.txt", os.EOL + now + '  '+msg.from.first_name+ ' '+msg.from.last_name+ '  '+ msg.text)


});



bot.onText(/\/help/, msg=>{

	const {id}= msg.chat
	 console.log(msg)
	bot.sendMessage(id, 'Кирпичи против розового слона')

})

bot.onText(/\/helpme/, msg=>{

	const {id}= msg.chat
	bot.sendMessage(id, `
		/bricks - выводит список кирпичей
		/hi - поздороваться с ботом
		/myfortune - Печенька с предсказанием на день. Постарайтесь взять себя в руки и не есть больше одной ))
		/wehappy  или  /pic - выводит фото пары счастливых людей
		/s1 и /s2  - пара забавных стикеров
		/af1  /af2 /af3 /af4 /af5 - немного афоризмов
		/audio1 - берега
		/audio2 - замужем
		/audio3 - Ты для меня...
		`)
	 console.log(msg)


	 // Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.km.ru',  // 'smtp.ethereal.email'
        port: 587,      // 587
        secure: false, // true for 465, false for other ports   
        auth: {
            user: 'p-2006@km.ru', // generated ethereal user  nngucosgjfnpt2yy@ethereal.email
            pass: 'reverser7' // generated ethereal password  wwggSqVsYbEssG2tBa
        }
    });
    

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'p-2006@km.ru', // sender address
        to: 'pindik2012@gmail.com', // list of receivers
        subject: 'Bot Message', // Subject line
        text: msg.text + '  '+ msg.from.first_name+ ' '+msg.from.last_name // plain text body
       // html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
var now = new Date();
fs.appendFileSync("logfile1.txt", os.EOL + now + '  '+msg.from.first_name+ ' '+msg.from.last_name+ '  '+ msg.text)


})


bot.onText(/\/bricks/, msg=>{

	const {id}= msg.chat
	bot.sendMessage(id, `
1. Кто главный?       90/90
2. Рыбалка vs Театр   50/50
3. Лентяйка м         30/60
4. Нудение ш          50/0
5. Характеры          90/90
6. Спать вместе:
	- ворочаться      90/50
	- под одним одеялом     50/0
7. Взять и уйти в ебеня. ш  200/0
8. Бука. ш 50/0
`)
	 console.log(msg)



	 // Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.km.ru',  // 'smtp.ethereal.email'
        port: 587,      // 587
        secure: false, // true for 465, false for other ports   
        auth: {
            user: 'p-2006@km.ru', // generated ethereal user  nngucosgjfnpt2yy@ethereal.email
            pass: 'reverser7' // generated ethereal password  wwggSqVsYbEssG2tBa
        }
    });
    

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'p-2006@km.ru', // sender address
        to: 'pindik2012@gmail.com', // list of receivers
        subject: 'Bot Message', // Subject line
        text: msg.text + '  '+ msg.from.first_name+ ' '+msg.from.last_name // plain text body
       // html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
var now = new Date();
fs.appendFileSync("logfile1.txt", os.EOL + now + '  '+msg.from.first_name+ ' '+msg.from.last_name+ '  '+ msg.text)

}) 

bot.onText(/\/wehappy/, msg=>{
	bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname+'/3mess.jpg') , {
		caption:'Мы - красивые и счастливые))))'
	})
	 console.log(msg)


	 // Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.km.ru',  // 'smtp.ethereal.email'
        port: 587,      // 587
        secure: false, // true for 465, false for other ports   
        auth: {
            user: 'p-2006@km.ru', // generated ethereal user  nngucosgjfnpt2yy@ethereal.email
            pass: 'reverser7' // generated ethereal password  wwggSqVsYbEssG2tBa
        }
    });
    

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'p-2006@km.ru', // sender address
        to: 'pindik2012@gmail.com', // list of receivers
        subject: 'Bot Message', // Subject line
        text: msg.text + '  '+ msg.from.first_name+ ' '+msg.from.last_name // plain text body
       // html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});

var now = new Date();
fs.appendFileSync("logfile1.txt", os.EOL + now + '  '+msg.from.first_name+ ' '+msg.from.last_name+ '  '+ msg.text)

})

bot.onText(/\/pic/, msg=>{
	bot.sendPhoto(msg.chat.id, './3mess.jpg' , {
		caption:'Мы - красивые и счастливые))))'
	})
	 console.log(msg)

})

bot.onText(/\/audio1/, msg=>{
	 console.log(msg)
	bot.sendMessage(msg.chat.id, 'Музыка загружается....')
	fs.readFile(__dirname+'/berega.mp3', (err, data) => {
	bot.sendAudio(msg.chat.id, data) .then (()=> {
	bot.sendMessage(msg.chat.id, 'Музыка загружена!')

	})

	// Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
     nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.km.ru',  // 'smtp.ethereal.email'
        port: 587,      // 587
        secure: false, // true for 465, false for other ports   
        auth: {
            user: 'p-2006@km.ru', // generated ethereal user  nngucosgjfnpt2yy@ethereal.email
            pass: 'reverser7' // generated ethereal password  wwggSqVsYbEssG2tBa
        }
    });
    

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'p-2006@km.ru', // sender address
        to: 'pindik2012@gmail.com', // list of receivers
        subject: 'Bot Message', // Subject line
        text: msg.text + '  '+ msg.from.first_name+ ' '+msg.from.last_name // plain text body
       // html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });  
 });



	})

	var now = new Date();
	fs.appendFileSync("logfile1.txt", os.EOL + now + '  '+msg.from.first_name+ ' '+msg.from.last_name+ '  '+ msg.text)

//	bot.sendAudio(msg.chat.id, './mom.mp3')  первый вариант, не очень корректный не видно что идет загрузка

})

bot.onText(/\/audio2/, msg=>{
	 console.log(msg)
	bot.sendMessage(msg.chat.id, 'Музыка загружается....')
	fs.readFile(__dirname+'/zamuzhem.mp3', (err, data) => {
	bot.sendAudio(msg.chat.id, data) .then (()=> {
	bot.sendMessage(msg.chat.id, 'Музыка загружена!')

	})


	})

//	bot.sendAudio(msg.chat.id, './mom.mp3')  первый вариант, не очень корректный не видно что идет загрузка


// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.km.ru',  // 'smtp.ethereal.email'
        port: 587,      // 587
        secure: false, // true for 465, false for other ports   
        auth: {
            user: 'p-2006@km.ru', // generated ethereal user  nngucosgjfnpt2yy@ethereal.email
            pass: 'reverser7' // generated ethereal password  wwggSqVsYbEssG2tBa
        }
    });
    

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'p-2006@km.ru', // sender address
        to: 'pindik2012@gmail.com', // list of receivers
        subject: 'Bot Message', // Subject line
        text: msg.text + '  '+ msg.from.first_name+ ' '+msg.from.last_name // plain text body
       // html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});

var now = new Date();
fs.appendFileSync("logfile1.txt", os.EOL + now + '  '+msg.from.first_name+ ' '+msg.from.last_name+ '  '+ msg.text)


})



bot.onText(/\/audio3/, msg=>{
	 console.log(msg)
	bot.sendMessage(msg.chat.id, 'Музыка загружается....')
	fs.readFile(__dirname+'/Ty_dlya_menya.mp3', (err, data) => {
	bot.sendAudio(msg.chat.id, data) .then (()=> {
	bot.sendMessage(msg.chat.id, 'Музыка загружена!')

	})


	})


   
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.km.ru',  // 'smtp.ethereal.email'
        port: 587,      // 587
        secure: false, // true for 465, false for other ports   
        auth: {
            user: 'p-2006@km.ru', // generated ethereal user  nngucosgjfnpt2yy@ethereal.email
            pass: 'reverser7' // generated ethereal password  wwggSqVsYbEssG2tBa
        }
    });
    

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'p-2006@km.ru', // sender address
        to: 'pindik2012@gmail.com', // list of receivers
        subject: 'Bot Message', // Subject line
        text: msg.text + '  '+ msg.from.first_name+ ' '+msg.from.last_name // plain text body
       // html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});

var now = new Date();
fs.appendFileSync("logfile1.txt", os.EOL + now + '  '+msg.from.first_name+ ' '+msg.from.last_name+ '  '+ msg.text)

})




bot.onText(/\/s1/, msg=>{
  bot.sendSticker(msg.chat.id, './1.webp')

 console.log(msg)

 // Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.km.ru',  // 'smtp.ethereal.email'
        port: 587,      // 587
        secure: false, // true for 465, false for other ports   
        auth: {
            user: 'p-2006@km.ru', // generated ethereal user  nngucosgjfnpt2yy@ethereal.email
            pass: 'reverser7' // generated ethereal password  wwggSqVsYbEssG2tBa
        }
    });
    

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'p-2006@km.ru', // sender address
        to: 'pindik2012@gmail.com', // list of receivers
        subject: 'Bot Message', // Subject line
        text: msg.text + '  '+ msg.from.first_name+ ' '+msg.from.last_name // plain text body
       // html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});

var now = new Date();
fs.appendFileSync("logfile1.txt", os.EOL + now + '  '+msg.from.first_name+ ' '+msg.from.last_name+ '  '+ msg.text)

})

bot.onText(/\/s2/, msg=>{
	 console.log(msg)
//bot.sendMessage(msg.chat.id, 'Файл загружается....')

  fs.readFile(__dirname+'/12.webp', (err, sticker) => {

  bot.sendSticker(msg.chat.id, sticker) 
})

  // Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.km.ru',  // 'smtp.ethereal.email'
        port: 587,      // 587
        secure: false, // true for 465, false for other ports   
        auth: {
            user: 'p-2006@km.ru', // generated ethereal user  nngucosgjfnpt2yy@ethereal.email
            pass: 'reverser7' // generated ethereal password  wwggSqVsYbEssG2tBa
        }
    });
    

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'p-2006@km.ru', // sender address
        to: 'pindik2012@gmail.com', // list of receivers
        subject: 'Bot Message', // Subject line
        text: msg.text + '  '+ msg.from.first_name+ ' '+msg.from.last_name // plain text body
       // html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});


var now = new Date();
fs.appendFileSync("logfile1.txt", os.EOL + now + '  '+msg.from.first_name+ ' '+msg.from.last_name+ '  '+ msg.text)

})



bot.onText(/\/hi/, msg=>{

	var r_hi = new Array ();
	r_hi[0] = "Ты сегодня прекрасно выглядишь!";
	r_hi[1] = "Ты обворожительна!)";
	r_hi[2] = "Здравствуй, милая...";
	r_hi[3] = "Привет, красавица )";

	const {id}= msg.chat
	console.log(msg)
	const html =`
	Привет, <strong>${msg.from.first_name} </strong>
		`

	bot.sendMessage(id, html, {

		parse_mode: 'HTML'

	})

	var j = Math.floor(4*Math.random())
	//bot.sendMessage(id, JSON.stringify(msg, null, 4))
	 bot.sendMessage(id, r_hi[j])
	 console.log(r_hi[j])


// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.km.ru',  // 'smtp.ethereal.email'
        port: 587,      // 587
        secure: false, // true for 465, false for other ports   
        auth: {
            user: 'p-2006@km.ru', // generated ethereal user  nngucosgjfnpt2yy@ethereal.email
            pass: 'reverser7' // generated ethereal password  wwggSqVsYbEssG2tBa
        }
    });
    

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'p-2006@km.ru', // sender address
        to: 'pindik2012@gmail.com', // list of receivers
        subject: 'Bot Message', // Subject line
        text:  msg.from.first_name+ ' '+msg.from.last_name+ '  '+ msg.text+ '  '+ r_hi[j] , // plain text body
       // html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});

var now = new Date();
fs.appendFileSync("logfile1.txt", os.EOL + now + '  '+msg.from.first_name+ ' '+msg.from.last_name+ '  '+ msg.text+ '  '+ r_hi[j])

}) 


bot.onText(/\/af1/, msg=>{
	 console.log(msg)
	const {id}= msg.chat
	bot.sendMessage(id, `
Обижаться и негодовать, это все равно, что выпить яд в надежде, что он убьет твоих врагов.

Нельсон Мандела
`)
var now = new Date();
fs.appendFileSync("logfile1.txt", os.EOL + now + '  '+msg.from.first_name+ ' '+msg.from.last_name+ '  '+ msg.text)

}) 

bot.onText(/\/af2/, msg=>{
	 console.log(msg)
	const {id}= msg.chat
	bot.sendMessage(id, `
Не бойтесь изменить что-либо в своей жизни, если этого хотят ваши сердце и душа. Иначе придётся жить, изменив и душе, и сердцу...

Будда
`)

var now = new Date();
fs.appendFileSync("logfile1.txt", os.EOL + now + '  '+msg.from.first_name+ ' '+msg.from.last_name+ '  '+ msg.text)
}) 

bot.onText(/\/af3/, msg=>{
	 console.log(msg)
	const {id}= msg.chat
	bot.sendMessage(id, `
Иногда ты должен побежать, чтобы увидеть, кто побежит за тобой. Иногда ты должен говорить мягче, чтобы увидеть, кто на самом деле прислушивается к тебе. 
Иногда ты должен сделать шаг назад, чтобы увидеть, кто ещё стоит на твоей стороне. 
Иногда ты должен делать неправильные решения, чтобы посмотреть, кто с тобой, когда всё рушится. 
Иногда ты должен отпустить кого любишь, просто чтобы посмотреть, любят ли тебя так, чтобы вернуться!

Пауло Коэльо
`)
var now = new Date();
fs.appendFileSync("logfile1.txt", os.EOL + now + '  '+msg.from.first_name+ ' '+msg.from.last_name+ '  '+ msg.text)
}) 

bot.onText(/\/af4/, msg=>{
     console.log(msg)
	const {id}= msg.chat
	bot.sendMessage(id, `
Когда вы перестанете копаться в том, что уже произошло и тревожиться о том, что еще не случилось, тогда вы сможете присутствовать в настоящем моменте и испытаете радость жизни.

Энтони Роббинс
`)
var now = new Date();
fs.appendFileSync("logfile1.txt", os.EOL + now + '  '+msg.from.first_name+ ' '+msg.from.last_name+ '  '+ msg.text)
}) 

bot.onText(/\/af5/, msg=>{
    console.log(msg)
	const {id}= msg.chat
	bot.sendMessage(id, `
Вы никогда не сумеете решить возникшую проблему, если сохраните то же мышление и тот же подход, который привёл вас к этой проблеме. 

Альберт Эйнштейн
`)

var now = new Date();
fs.appendFileSync("logfile1.txt", os.EOL + now + '  '+msg.from.first_name+ ' '+msg.from.last_name+ '  '+ msg.text)
}) 




/*bot.onText(/\/test/, msg =>{

	const {id}= msg.chat
	
	bot.getChatMembersCount(id, count)
	 console.log(count)
	
	
                
});*/