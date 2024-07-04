document.addEventListener('DOMContentLoaded', function() {
    const answers = [
        "Yes", "No", "Maybe", "Ask again later", "Definitely", 
        "Absolutely not", "Sure", "I don't think so", "Without a doubt", 
        "Certainly", "Most likely", "Unlikely", "Try again", 
        "Very doubtful", "Yes, but not now", "No, but maybe later", 
        "It is certain", "Cannot predict now", "Outlook not so good", 
        "Outlook good", "Yes, in due time", "No, not at this moment", 
        "Yes, definitely", "My sources say no", "Signs point to yes", 
        "Don’t count on it", "Yes, in the near future", 
        "No, in the near future", "Ask again soon", "Very likely", 
        "Highly unlikely", "Yes, absolutely", "No way", 
        "You can rely on it", "Don't bet on it", "Yes, the stars align", 
        "Not at all", "It is decided", "Uncertain", "All signs point to yes", 
        "No chance", "It is assured", "Not likely", "Yes, the odds favor it", 
        "Not this time", "Yes, in your favor", "No, against the odds", 
        "Yes, but with conditions", "No, with certainty"
    ];

    window.generateAnswer = function() {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const answer = answers[randomIndex];
        document.getElementById('oracle-answer').innerText = answer;
    };
});
