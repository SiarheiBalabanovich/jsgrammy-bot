# GrammyJS Bot 🤖

### GrammyJS Bot is a Telegram bot built using [grammY](https://grammy.dev/), a lightweight and modern framework for developing Telegram bots. This bot demonstrates basic functionalities and can be easily extended for any purpose.

## 📋 Features
* Implemented commands:
* /start — Sends a welcome message with a reaction and text.
* /menu — Displays an inline keyboard with action buttons.
* Supports long-polling (the bot listens for updates from Telegram without using webhooks).
* Built with Node.js and uses CommonJS modules.
* Modular and clean codebase for easy modification and scalability.

## 🛠 Technologies
* Node.js (v18.20.2): Platform used to run the bot.
* grammY: Main framework for interacting with Telegram's API.
* dotenv: Manages environment variables (e.g., Telegram API key).
* nodemon (for local development): Automatically restarts the bot when code changes.

## ⚙️ Installation and Usage
### Step 1: Clone the repository
git clone https://github.com/your-username/your-repository.git
cd your-repository

### Step 2: Install dependencies
npm install

### Step 3: Create a .env file
Add your Telegram API key to the .env file:
BOT_API_KEY=<your_telegram_api_key>

### Step 4: Run the bot locally
npm start
The bot will start listening for updates using long-polling. Ensure your machine is connected to the internet.

## 🚀 Deploying to Railway
1. Push the project to a GitHub repository.
2. Link the project to Railway and add the BOT_API_KEY environment variable under the Variables section.
3. After deployment, share the link to your bot in Telegram.

## 🧪 Testing the Bot
* Access your bot in Telegram using the link: [@SBal_grammy_bot](https://t.me/SBal_grammy_bot).
* Use commands like `/start` and `/menu` to test its functionality.

## 🤝 Contributing
1. Fork this repository.
2. Create a new branch for your feature or fix.
3. Commit your changes with a clear description.
4. Open a Pull Request.

## 📜 License
 This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
