console.log('this is a joke generatior')

var jokes = [
     
        {
            "category": "Pun",
            "type": "single",
            "joke": "I have these weird muscle spasms in my gluteus maximus.\nI figured out from my doctor that everything was alright:\nHe said \"Weird flex, butt okay.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 82,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "single",
            "joke": "Two fish in a tank. One turns to the other and says, \"Do you know how to drive this thing?\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 185,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "single",
            "joke": "Today, my son asked \"Can I have a book mark?\" and I burst into tears.\n11 years old and he still doesn't know my name is Brian.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 200,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "Two reasons I don't give money to homeless people.\n1) They are going to spend it all on drugs and alcohol\n2) I am going to spend it all on drugs and alcohol.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 72,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "I visited my friend at his new house. He told me to make myself at home. So I threw him out. I hate having visitors.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": true,
            "id": 304,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "single",
            "joke": "I was struggling to figure out how lightning works, but then it struck me.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 220,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "I hate double standards. Burn a body at a crematorium, you're \"being a respectful friend.\" Do it at home and you're \"destroying evidence.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "safe": false,
            "id": 274,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "single",
            "joke": "I was reading a great book about an immortal dog the other day. It was impossible to put down.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 236,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "Relationship Status: just tried to reach for my dog's paw and he pulled it away so I pretended I was reaching for the remote.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "racist": false,
                "sexist": false,
                "political": false,
                "explicit": false
            },
            "id": 195,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "What does the MacBook have in common with Donald Trump?\n\nI would tell you....\nBut I don't compare apples to oranges.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": true,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 233,
            "safe": false,
            "lang": "en"
        },

        {
            "category": "Pun",
            "type": "single",
            "joke": "How do you make holy water? You boil the hell out of it.",
            "flags": {
                "nsfw": false,
                "religious": true,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 202,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "single",
            "joke": "Two fish in a tank. One turns to the other and says, \"Do you know how to drive this thing?\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 185,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Algorithm: A word used by programmers when they don't want to explain how their code works.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 51,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Debugging is like being the detective in a crime movie where you're also the murderer at the same time.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 42,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "Yo mama is so old, she knew Burger King while he was still a prince.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": true,
            "id": 306,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "Never date a baker. They're too kneady.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": true,
            "id": 271,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "I didn't vaccinate my 10 kids and the one that survived is fine!",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 96,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 123,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "single",
            "joke": "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 191,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "single",
            "joke": "I have a joke about trickle down economics, but 99% of you will never get it.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 238,
            "safe": true,
            "lang": "en"
        },

        {
            "category": "Misc",
            "type": "single",
            "joke": "Relationship Status: just tried to reach for my dog's paw and he pulled it away so I pretended I was reaching for the remote.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "racist": false,
                "sexist": false,
                "political": false,
                "explicit": false
            },
            "id": 195,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "My ex had an accident. I told the paramedics the wrong blood type for her. She'll finally experience what rejection is really like.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 152,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "What does the MacBook have in common with Donald Trump?\n\nI would tell you....\nBut I don't compare apples to oranges.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": true,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 233,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "single",
            "joke": "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 204,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Eight bytes walk into a bar.\nThe bartender asks, \"Can I get you anything?\"\n\"Yeah,\" reply the bytes.\n\"Make us a double.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 34,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "My wife and I have reached the difficult decision that we do not want children.\nIf anybody does, please just send me your contact details and we can drop them off tomorrow.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 257,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Four engineers get into a car. The car won't start.\nThe Mechanical engineer says \"It's a broken starter\".\nThe Electrical engineer says \"Dead battery\".\nThe Chemical engineer says \"Impurities in the gasoline\".\nThe IT engineer says \"Hey guys, I have an idea: How about we all get out of the car and get back in\".",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 132,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 23,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "I visited my friend at his new house. He told me to make myself at home. So I threw him out. I hate having visitors.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": true,
            "id": 304,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 123,
            "safe": true,
            "lang": "en"
        }

]



function generator() {
    let j = jokes[Math.floor(Math.random() * (jokes.length))]
    document.getElementById("jokespace").innerHTML = j.joke;
}

