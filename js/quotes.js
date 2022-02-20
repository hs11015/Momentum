const quotes = [
    {
        quote: "A great secret of success is to go through life as a man who never gets used up.",
        author: "Albert Schweitzer"
    },
    {
        quote: "A goal without a plan is just a wish.",
        author: "Antoine de Saint-Exupery",
    },
    {
        quote: "You are built not to shrink down to less but to blossom into more.",
        author: "Oprah Winfrey",
    },
    {
        quote: "If you can concentrate always on the present, you'll be a happy man.",
        author: "Paulo Cuelho",
    },
    {
        quote: "Everything comes to him who hustles while he waits.",
        author: "Thomas A. Edison",
    },
    {
        quote: "Kites rise highest against the wind - not with it.",
        author: "Sir Winston Churchill",
    },
    {
        quote: "In the field of observation, chance favors only the prepared mind.",
        author: "Louis Pasteur",
    },
    {
        quote: "God doesn't require us to succeed; he only requires that you try.",
        author: "Mother Teresa",
    },
    {
        quote: "Just because something doesn't do what you planned it to do doesn't mean it's useless.",
        author: "Thomas A. Edison",
    },
    {
        quote: "When we do the best that we can, we never know what miracle is wrought in our life, or in the life of another.",
        author: "Helen Keller",
    },
    {
        quote: "Someone's sitting in the shade today because someone planted a tree a long time ago.",
        author: "Warren Buffett",
    },
    {
        quote: "Laughter is the tonic, the relief, the surcease for pain.",
        author: "Charlie Chaplin",
    },
    {
        quote: "We need men who can dream of things that never were.",
        author: "John F. Kennedy",
    },
    {
        quote: "Convictions are more dangerous enemies of truth than lies.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "Wheresoever you go, go with all your heart.",
        author: "Thomas A. Edison",
    },
    {
        quote: "Everything comes to him who hustles while he waits.",
        author: "Confucius",
    },
    {
        quote: "Hide not your talents. They for use were made. What's a sundial in the shade.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Genius is nothing but a great capacity for patience.",
        author: "Buffon",
    },
    {
        quote: "With regard to excellence, it is not enough to know, but we must try to have and use it.",
        author: "Aristotle",
    },
    {
        quote: "Employ thy time well, if thou meanest to get leisure.",
        author: "Benjamin Franklin",
    },
    {
        quote: "You may delay, but time will not.",
        author: "Benjamin Franklin",
    },
    {
        quote: "The best thing about the future is that it comes one day at a time.",
        author: "Abraham Lincoln",
    },
    {
        quote: "We can draw lessons from the past, but we cannot live in it.",
        author: "Lyndon B. Johnson",
    },
    {
        quote: "We know what we are, but not what we may be.",
        author: "William Shakespeare",
    },
]
// 총 34개의 quotes 준비 완료

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.random() * 34 : .random은 0~1 사이 수를 랜덤으로 출력, *34 해주면 0~34 사이의 수 랜덤 출력
// Math.round() : 반올림
// Math.ceil() : 무조건 올림
// Math.floor() : 무조건 내림

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)] // 0~33까지의 인덱스
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;