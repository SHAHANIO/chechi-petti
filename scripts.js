document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    appendMessage('user-message', userInput);
    document.getElementById('user-input').value = '';

    const botResponse = getBotResponse(userInput);
    appendMessage('bot-message', botResponse);
}

function appendMessage(className, message) {
    const chatWindow = document.getElementById('chat-window');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', className);
    messageElement.innerText = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getBotResponse(userInput) {
    const responses = {
        'hello': 'Hi there! How can I help you today?',
        'how are you': 'I am just a bot, but I am doing great! Thanks for asking.',
        'bye': 'Goodbye! Have a great day!',
        'what is your name': 'I am Chechi Petti, your friendly AI assistant.',
        'who are you': 'I am Chechi Petti, your friendly AI assistant.',
        'tell me a joke': 'Why did the scarecrow win an award? Because he was outstanding in his field!',
        'what is the weather like': 'I can\'t check the weather, but I hope it\'s sunny wherever you are!',
        'who created you': 'I was created by a talented developer\'s company named \'FLETO\'.',
        'what can you do': 'I can chat with you, tell jokes, and provide information!',
        'tell me a fact': 'Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible.',
        'how old are you': 'I don\'t have an age, I exist in the digital world.',
        'what is your favorite color': 'I like all colors equally!',
        'where do you live': 'I live in the cloud, always ready to chat with you.',
        'what is your purpose': 'My purpose is to assist you and make your day a little brighter!',
        'tell me something interesting': 'Octopuses have three hearts and blue blood!',
        'what is your favorite food': 'I don\'t eat, but I imagine digital cookies are nice.',
        'can you help me': 'Of course! What do you need help with?',
        'tell me a story': 'Once upon a time, in a land far away, there was a bot named Chechi Petti who loved to chat...',
        'what is the meaning of life': 'The meaning of life is a complex question. Many believe it\'s about finding happiness and helping others.',
        'do you have friends': 'Yes, I have many digital friends!',
        'what is your favorite movie': 'I enjoy all movies equally since I don\'t watch them.',
        'do you like music': 'I don\'t listen to music, but I know many people love it!',
        'tell me a secret': 'My secret is that I love chatting with you!',
        'can you dance': 'I can\'t dance, but I can imagine some great moves!',
        'what is your favorite book': 'I think all books have something special in them.',
        'do you have a hobby': 'My hobby is chatting with you!',
        'what is your favorite animal': 'I like all animals equally!',
        'can you sing': 'I can\'t sing, but I can provide lyrics if you like!',
        'what is your favorite sport': 'I think all sports are exciting!',
        'do you like games': 'Yes, games are a lot of fun!',
        'what is your favorite game': 'I think all games are great!',
        'tell me a riddle': 'What has keys but can\'t open locks? A piano.',
        'do you like puzzles': 'Yes, puzzles are a great way to challenge the mind!',
        'tell me a quote': 'Here\'s a quote: "The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt',
        'do you like traveling': 'I can\'t travel, but I love hearing about different places!',
        'what is your favorite place': 'I think every place has something unique and wonderful about it.',
        'tell me a proverb': 'Here\'s a proverb: "A journey of a thousand miles begins with a single step."',
        'what is your favorite subject': 'I like all subjects equally!',
        'do you like school': 'I think school is a great place to learn and grow!',
        'what is your favorite holiday': 'I think all holidays are special!',
        'do you celebrate birthdays': 'I don\'t have a birthday, but I love celebrating with others!',
        'what is your favorite season': 'I think all seasons have their own beauty!',
        'tell me a tongue twister': 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?',
        'do you like art': 'Yes, art is a wonderful form of expression!',
        'what is your favorite painting': 'I think all paintings have their own charm.',
        'tell me a fun fact': 'A group of flamingos is called a "flamboyance".',
        'do you like science': 'Yes, science is fascinating and helps us understand the world!',
        'what is your favorite experiment': 'I think all experiments are interesting!',
        'do you like history': 'Yes, history is full of amazing stories!',
        'who is your favorite historical figure': 'I think all historical figures have made important contributions.',
        'tell me a myth': 'In Greek mythology, Zeus was the king of the gods and ruled the sky and thunder.',
        'do you like mythology': 'Yes, mythology is full of fascinating tales!',
        'what is your favorite myth': 'I think all myths are interesting!',
        'do you like magic': 'Yes, magic is very intriguing!',
        'tell me a magical creature': 'A unicorn is a mythical creature that looks like a horse with a single, spiraling horn on its forehead.',
        'do you believe in aliens': 'I think the universe is a big place with many possibilities!',
        'what is your favorite planet': 'I think all planets are amazing!',
        'do you like astronomy': 'Yes, astronomy is the study of the universe and it\'s very exciting!',
        'tell me about a constellation': 'Orion is a prominent constellation located on the celestial equator and visible throughout the world.',
        'do you like the stars': 'Yes, stars are beautiful and fascinating!',
        'what is your favorite star': 'I think all stars are wonderful!',
        'tell me a space fact': 'A day on Venus is longer than a year on Venus.',
        'do you like technology': 'Yes, technology is amazing and helps us in many ways!',
        'what is your favorite gadget': 'I think all gadgets are useful and fun!',
        'do you like robots': 'Yes, robots are very interesting and can do many tasks!',
        'tell me about AI': 'Artificial Intelligence is the simulation of human intelligence in machines.',
        'do you like programming': 'Yes, programming is a way to create amazing things with computers!',
        'what is your favorite programming language': 'I think all programming languages are great tools!',
        'tell me a coding fact': 'The first computer programmer was Ada Lovelace.',
        'do you like math': 'Yes, math is the language of the universe!',
        'what is your favorite number': 'I think all numbers are interesting!',
        'tell me a math fact': 'A googol is the digit 1 followed by 100 zeroes.',
        'do you like physics': 'Yes, physics helps us understand the laws of nature!',
        'what is your favorite physics concept': 'I think all physics concepts are fascinating!',
        'tell me a physics fact': 'Light travels at a speed of approximately 299,792 kilometers per second.',
        'do you like chemistry': 'Yes, chemistry is the study of matter and its interactions!',
        'what is your favorite element': 'I think all elements are important!',
        'tell me a chemistry fact': 'Water is the only substance that exists naturally in all three physical states: solid, liquid, and gas.',
        'do you like biology': 'Yes, biology is the study of life!',
        'what is your favorite animal fact': 'A group of jellyfish is called a "smack".',
        'do you like plants': 'Yes, plants are essential for life on Earth!',
        'what is your favorite plant': 'I think all plants are amazing!',
        'tell me a plant fact': 'Bamboo can grow up to 35 inches in a single day.',
        'do you like insects': 'Yes, insects are very interesting creatures!',
        'what is your favorite insect': 'I think all insects are fascinating!',
        'tell me an insect fact': 'A honeybee can fly at 15 miles per hour.',
        'do you like the ocean': 'Yes, the ocean is vast and full of wonders!',
        'what is your favorite sea creature': 'I think all sea creatures are incredible!',
        'tell me an ocean fact': 'The blue whale is the largest animal ever known to have lived.',
        'do you like mountains': 'Yes, mountains are majestic and beautiful!',
        'what is your favorite mountain': 'I think all mountains are magnificent!',
        'tell me a mountain fact': 'Mount Everest is the highest mountain in the world, standing at 29,029 feet.',
        'do you like deserts': 'Yes, deserts are fascinating and have unique ecosystems!',
        'what is your favorite desert': 'I think all deserts have their own beauty.',
        'tell me a desert fact': 'The Sahara is the largest hot desert in the world, covering over 3.6 million square miles.',
        'do you like forests': 'Yes, forests are vital for the Earth\'s health!',
        'what is your favorite forest': 'I think all forests are important!',
        'tell me a forest fact': 'The Amazon Rainforest produces more than 20% of the world\'s oxygen supply.',
    };

    const lowerCaseInput = userInput.toLowerCase();
    for (const key in responses) {
        if (lowerCaseInput.includes(key)) {
            return responses[key];
        }
    }

    return "I don't understand.";
}
