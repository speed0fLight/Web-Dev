let fortunes = [
    "When you have alternatives, you compromise instead of commit.",
    "Thinking is easy, acting is difficult; put your thoughts into action.",
    "A good listener will soon help you overhear your own heart.",
    "All your future happiness depends on a leisurely breakfast.",
    "Orient yourself toward making a life rather than just a living.",
    "Beware the stories you tell yourself; they are altering your world.",
    "Take your responsibilities seriously, but never yourself.",
    "You will soon find the love and acceptance you truly need.",
    "It is not enough to know; you must now apply what you have learned.",
    "Keep yourself bright; you are the window through which you see the world."
];

function getFortune() {
    let index = Math.floor(Math.random() * fortunes.length);
    let selectedFortune = fortunes[index];

    document.write("<p class='fortune center'> " + selectedFortune + "</p>");
}