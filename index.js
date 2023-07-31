const { Telegraf } = require('telegraf');
require('dotenv').config()


const bot = new Telegraf(process.env.BOT_TOKEN);
const ShortSellingAwnser = require('./data/anwsers')

const questions = require('./data/questions');

bot.hears('/Question1', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs1)
})

bot.hears('/Question2', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs2)
})

bot.hears('/Question3', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs3)
})

bot.hears('/Question4', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs4)
})

bot.hears('/Question5', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs5)
})

bot.hears('/Question6', (ctx) => {  
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs6)
})

bot.hears('/Question7', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs7)
})

bot.hears('/Question8', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs8)
})

bot.hears('/Question9', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs9)
})

bot.hears('/Question10', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs10)
})

bot.hears('/Question11', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs11)
})

bot.hears('/Question12', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs12)
})

bot.hears('/Question13', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs13)
})

bot.hears('/Question14', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs14)
})

bot.hears('/Question15', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs15)
})

bot.hears('/Question16', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs16)
})

bot.hears('/Question17', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs17)
})

bot.hears('/Question18', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs18)
})

bot.hears('/Question19', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs19)
})

bot.hears('/Question20', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs20)
})

bot.hears('/Question21', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs21)
})

bot.hears('/Question22', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs22)
})

bot.hears('/Question23', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs23)
})

bot.hears('/Question24', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs24)
})

bot.hears('/Question25', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs25)
})

bot.hears('/Question26', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs26)
})

bot.hears('/Question27', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs27)
})

bot.hears('/Question28', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs28)
})

bot.hears('/Question29', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs29)
})

bot.hears('/Question30', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs30)
})

bot.hears('/Question31', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs31)
})

bot.hears('/Question32', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs32)
})

bot.hears('/Question33', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs33)
})

bot.hears('/Question34', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs34)
})

bot.hears('/Question35', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs35)
})

bot.hears('/Question36', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs36)
})

bot.hears('/Question37', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs37)
})

bot.hears('/Question38', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs38)
})

bot.hears('/Question39', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs39)
})

bot.hears('/Question40', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs40)
})

bot.hears('/Question41', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs41)
})

bot.hears('/Question42', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs42)
})

bot.hears('/Question43', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs43)
})

//General Awnsers

bot.hears('/GeneralQuestion1', (ctx) => {
    ctx.reply(ShortSellingAwnser.GeneralAwnsers.awnserG1)
})
bot.hears('/GeneralQuestion2', (ctx) => {
    ctx.reply(ShortSellingAwnser.GeneralAwnsers.awnserG2)
})
bot.hears('/GeneralQuestion3', (ctx) => {
    ctx.reply(ShortSellingAwnser.GeneralAwnsers.awnserG3)
})

//PIVOT Awnsers

bot.hears('/PivotQuestion1', (ctx) => {
    ctx.reply(ShortSellingAwnser.PivotAwnsers.awnserP1)
})
bot.hears('/PivotQuestion2', (ctx) => {
    ctx.reply(ShortSellingAwnser.PivotAwnsers.awnserP2)
})
bot.hears('/PivotQuestion3', (ctx) => {
    ctx.reply(ShortSellingAwnser.PivotAwnsers.awnserP3)
})
bot.hears('/PivotQuestion4', (ctx) => {
    ctx.reply(ShortSellingAwnser.PivotAwnsers.awnserP4)
})
bot.hears('/PivotQuestion5', (ctx) => {
    ctx.reply(ShortSellingAwnser.PivotAwnsers.awnserP5)
})
bot.hears('/PivotQuestion6', (ctx) => {
    ctx.reply(ShortSellingAwnser.PivotAwnsers.awnserP6)
})
bot.hears('/PivotQuestion7', (ctx) => {
    ctx.reply(ShortSellingAwnser.PivotAwnsers.awnserP7)
})
bot.hears('/PivotQuestion8', (ctx) => {
    ctx.reply(ShortSellingAwnser.PivotAwnsers.awnserP8)
})






bot.action('shortSelling', (ctx) => {
    ctx.reply(ShortSellingAwnser.ShortSellingAwnsers.awnserSs1)
})

bot.action('shortSellingQuestions', (ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, questions.ShortSellingQuestions,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "More Questions", callback_data: 'moreShortSellingQuestions' }
                    ],
                ]
            }
        })
})

bot.action('GeneralQuestions', (ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, questions.GeneralQuestions)
})

bot.action('PivotQuestions', (ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, questions.PivotQuestions)
})


bot.action('moreShortSellingQuestions', (ctx) => {
    ctx.reply(questions.moreShortSellingQuestions)
})

bot.hears('/More_Question', (ctx) => {
    ctx.reply(questions.moreShortSellingQuestions)
})



bot.action('categories', ctx => {
    let startMessage = `
    Expand your horizons 🌟 Click for a wider range of course categories!
    `
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Short Selling Questions", callback_data: 'shortSellingQuestions' }
                    ],
                    [
                        { text: 'General Questions', callback_data: 'GeneralQuestions' }
                    ],
                    [
                        { text: 'PIVOT Questions', callback_data: 'PivotQuestions' }
                    ]
                ]
            }
        })
})

bot.hears('Start', ctx => {
    let startMessage = `
    Welcome ${ctx.from.first_name} ${ctx.from.last_name} to the Rob Booker ChatBot World 🌍🤖
    `
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "What is short selling?", callback_data: 'shortSelling' }
                    ],
                    [
                        { text: 'Categories', callback_data: 'categories' }
                    ]
                ]
            }
        })
})

bot.hears('start', ctx => {
    let startMessage = `
    Welcome ${ctx.from.first_name} ${ctx.from.last_name} to the Rob Booker ChatBot World 🌍🤖
    `
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "What is short selling?", callback_data: 'shortSelling' }
                    ],
                    [
                        { text: 'Categories', callback_data: 'categories' }
                    ]
                ]
            }
        })
})

bot.command('start', ctx => {
    let startMessage = `
    Welcome ${ctx.from.first_name} ${ctx.from.last_name} to the Rob Booker ChatBot World 🌍🤖
    `
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "What is short selling?", callback_data: 'shortSelling' }
                    ],
                    [
                        { text: 'Categories', callback_data: 'categories' }
                    ]
                ]
            }
        })
})

bot.help((ctx) => {
    let startMessage = `
    Welcome ${ctx.from.first_name} ${ctx.from.last_name} to the Rob Booker ChatBot World 🌍🤖
    `
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "What is short selling?", callback_data: 'shortSelling' }
                    ],
                    [
                        { text: 'Categories', callback_data: 'categories' }
                    ]
                ]
            }
        })
})


bot.launch()