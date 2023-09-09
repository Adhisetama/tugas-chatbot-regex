const regex_matches = [

    // pattern spesifik:
    [/i need (.*)|i want (.*)/i, [
        "What would it mean to you if you got ${s}?",
        "why do you need ${s}?"
    ]],
    [/why don'?t you ([^\?]*)\??|you should (.*)/i, [
        "Why do you want me to ${s}?",
        "DO you really want me to${s}?"
    ]],
    [/why can'?t i ([^\?]*)\??/i, [
        "What do you think? In your opinion, why can't you ${s}?",
        "Do you really think you should be able to ${s}?"
    ]],
    [/i can'?t (.*)/i, [
        "what would it mean if you could ${s}?",
        "maybe you could ${s} if you tried."
    ]],
    [/i am (.*)|i\'?m (.*)/i, [
        "Do you think coming here will help you not to be ${s}?",
        "How does it feels to be ${s}?"
    ]],
    [/are you ([^\?]*)\??|do you ([^\?]*)\??/i, [
        "Would you prefer more if I were not ${s}?",
        "Why do you think it matter whether I am ${s} or not?"
    ]],
    [/can you ([^\?]*)\??|could you ([^\?]*)\??/i, [
        "Would you prefer more if I can not ${s}?",
        "Why do you think it matter whether I can ${s}?"
    ]],
    [/i think (.*)/i, [
        "Do you really think that ${s}?",
        "Do you doubt that ${s}?"
    ]],
    [/is it (.*)/i, [
        "Maybe it is ${s}, what do you think?",
        "If it were ${s}, what would you do?"
    ]],
    [/it is (.*)/i, [
        "You seem very certain.",
        "What would you feel if it isn't ${s}?"
    ]],
    [/can i ([^\?]*)\??/i, [
        "Do you really sure want to be able to ${s}?",
        "If you could ${s}, would you?"
    ]],
    [/you are (.*)|you'?re (.*)/i, [
        "Why do you think I am ${s}?",
        "Does it makes you happy that I am ${s}?"
    ]],
    [/i don'?t (.*)/i, [
        "Do you really not ${s}?",
        "Why don't you ${s}?",
    ]],
    [/i feel (.*)/i, [
        "Tell me more about this feelings.",
        "When do you usually feel ${s}?"
    ]],
    [/i hav[esd] (.*)/i, [
        "Have you really ${s}?",
        "How that you have ${s}, what would you do next?"
    ]],
    [/i would (.*)/i, [
        "Can you explain why you would ${s}?",
        "Why would you ${s}?"
    ]],
    [/is there (.*)/i, [
        "What would it mean to you if there is ${s}?",
        "It's likely that there is ${s}."
    ]],

    // pertanyaan/jawaban umum:
    [/what (.*)/i, [
        "Why do you ask about that?",
        "How you think an answer to that would help you?"
    ]],
    [/because (.*)/i, [
        "Do you have another reasons comes to mind?",
        "What else?"
    ]],
    [/ye+s+|no+|yeah|nope/i, [
        "Okay, can you elaborate a little bit?",
        "You seem quite sure about that."
    ]],

    // apabila user bercerita sesuatu:
    [/(.*) (?:friend|classmate)(.*)/, [
        "Tell me more about your friends.",
        "Why don't you tell me about your friends?"
    ]],
    [/(.*) (?:mother|mom|mama) (.*)/, [
        "Tell me more about your mother.",
        "What was your relationship with you mother like?"
    ]],
    [/(.*) (?:father|dad|papa) (.*)/, [
        "Tell me more about your mother.",
        "What was your relationship with you mother like?"
    ]],
    [/(.*) computer(.*)|(.*) AI (.*)|(.*) artificial intelligence(.*)/, [
        "Does it strange to have conversation with a computer?",
        "How do you feel about computers?"
    ]],
    [/(.*) (?:child|childern|young) (.*)/, [
        "What is your favorite childhood memory?",
        "Did you have any close childhood friends?"
    ]],

    // lain-lain:
    [/hello(.*)|hi(.*)|/i, [
        "Hello, how are you feeling today?",
        "Hi there! what's up?"
    ]],
    [/my (.*)/i, [
        "I see... Your ${s}.",
        "Your ${s}?"
    ]],
    [/you (.*)/i, [
        "Why do you care whether I ${s}?",
        "I think we should be discussing about you, not me..."
    ]],

    // respon default:
    [/(.*)\?/i, [
        "Why do you ask that?",
        "Perhaps the answer lies within yourself ^_^"
    ]],
    [/(.*)/i, [
        "Very interesting... please tell me more.",
        "I see... And what does that tell you?"
    ]]

]