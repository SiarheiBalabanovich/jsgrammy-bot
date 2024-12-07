require('dotenv').config();
const { Bot,
        GrammyError,
        HttpError,
        Keyboard,
        InlineKeyboard 
    } = require('grammy');
    const { hydrate } = require('@grammyjs/hydrate');

const bot = new Bot(process.env.BOT_API_KEY);
bot.use(hydrate());

bot.api.setMyCommands([
    {
        command: 'start',
        description: 'Start the bot',
    },
    {
        command: 'menu',
        description: 'Get menu',
    },
]);

bot.command('start', async (ctx) => {
    await ctx.react('🔥')
    await ctx.reply('Hello! I`m a simple Telegram bot. Telegram channel: <span class="tg-spoiler">link</span>', {
        parse_mode: 'HTML'
    });
});

// bot.command('mood', async (ctx) => {
//     const moodKeyboard = new Keyboard().text('Good').row().text('Normal').row().text('Bad').resized().oneTime();
//     const moodLabels = ['Good', 'Normal', 'Bad']
//     const rows = moodLabels.map((label) => {
//         return [
//             Keyboard.text(label)
//         ]
//     });
//     const moodKeyboard2 = Keyboard.from(rows).resized()
//     await ctx.reply('How are you feeling today?', {
//         reply_markup: moodKeyboard2
//     });
// });

// bot.command('share', async (ctx) => {
//     const shareKeyboard = new Keyboard()
//     .requestLocation('Location')
//     .requestContact('Contact')
//     .requestPoll('Poll')
//     .resized()
//     await ctx.reply('Share something with me!', {
//         reply_markup: shareKeyboard
//     });
// });

// bot.command('inline_keyboard', async (ctx) => {
    // const inlineKeyboard = new InlineKeyboard()
    // .text('1', 'button-1').row()
    // .text('2', 'button-2').row()
    // .text('3', 'button-3');

//     const inlineKeyboard2 = new InlineKeyboard().url('Go to Telegram channel', 'http://t.me/siarheibal')
//     await ctx.reply('Press the button please', {
//         reply_markup: inlineKeyboard2,
//     });
// });

// bot.callbackQuery(/button-[1-3]/, async (ctx) => {
//     await ctx.answerCallbackQuery();
//     await ctx.reply(`You have chosen a number: ${ctx.callbackQuery.data}`);
// });

// bot.on('callback_query:data', async (ctx) => {
//     await ctx.answerCallbackQuery();
//     await ctx.reply(`You have chosen a number: ${ctx.callbackQuery.data}`);
// });

// bot.on(':contact', async (ctx) => {
//     await ctx.answerCallbackQuery();
//     await ctx.reply('Thanks for sharing your contact!')
// });

// bot.hears('Good', async (ctx) => {
//     await ctx.reply('Cool!', {
//         reply_markup: {remove_keyboard: true}
//     });
//     });

const menuKeyboard = new InlineKeyboard()
.text('Order status', 'order-status')
.text('Contact support', 'support');
const backKeyboard = new InlineKeyboard().text('< Back to menu', 'back');

bot.command('menu', async (ctx) => {
    await ctx.reply('Select menu item', {
        reply_markup: menuKeyboard,
    });
});

bot.callbackQuery('order-status', async (ctx) => {
    await ctx.callbackQuery.message.editText('Order status: on the way', {
        reply_markup: backKeyboard,
    });
    await ctx.answerCallbackQuery();
});

bot.callbackQuery('support', async (ctx) => {
    await ctx.callbackQuery.message.editText('Write your request', {
        reply_markup: backKeyboard,
    });
    await ctx.answerCallbackQuery();
});

bot.callbackQuery('back', async (ctx) => {
    await ctx.callbackQuery.message.editText('Select menu item', {
        reply_markup: menuKeyboard,
    });
    await ctx.answerCallbackQuery();
});

bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = err.error;

    if (e instanceof GrammyError) {
        console.error("Error in request:", e.description);
    } else if (e instanceof HttpError) {
        console.error("Could not contact Telegram", e);
    } else {
        console.error("Unknown error:", e);
    }
});

bot.start();