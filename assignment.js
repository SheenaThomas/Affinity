function checkforracialslur(tweets, words) {
    if (!Array.isArray(tweets) || !Array.isArray(words)) {
        return 'input not array';
    }
    for (var i = 0; i < tweets.length; i++) {
        var count = 0;
        for (var j = 0; j < words.length; j++) {
            if (tweets[i].includes(words[j])) {
                count++;
            }
        }
        if (count === 0) {
            console.log(tweets[i] + " No profanity")
        }
        else if (count >= 1 && count <= 2) {
            console.log(tweets[i] + " Low profanity")
        }
        else
            console.log(tweets[i] + " High profanity")
    }
}

var tweets = ["You are racist", "You are a black idiot", "Arrogant racist idiot", " You are beautiful"];
var words = ["racist", "Arrogant", "idiot"];
checkforracialslur(tweets, words);