document.addEventListener('DOMContentLoaded',()=>{
const quoteList = document.querySelector('#quote-list');
const quotes = {
  "quotes": [
    {
      "quote": "Friends don't lie",
      "author": "ELEVEN",
      "id": 1,
      "likes": 0,
      
    },
    {
      "quote": "Mornings are for coffee and contemplation.?",
      "author": "HOPPER",
      "id": 2,
      "likes": 0,
      
    },
    {
      "quote": "If anyone asks where I am, I've left the country.",
      "author": "MIKE",
      "id": 3,
      "likes": 0,
      "url":""
    },
    {
      "quote": "You shouldn't like things because people tell you you're supposed to.",
      "author": "ROBIN",
      "id": 4,
      "likes": 0,
      
    },
    {
      "quote": "Nobody normal ever accomplished anything meaningful in this world",
      "author": "JONATHAN",
      "id": 5,
      "likes": 0
    },
    {
      "quote": "I am on a curiosity voyage, and I need my paddles to travel. These books…these books are my paddles",
      "author": "DUSTIN",
      "id": 6,
      "likes": 0
    },
    {
      "quote": "Science is neat, but I'm afraid it's not very forgiving.",
      "author": "MR. CLARKE",
      "id": 7,
      "likes": 0
    },
    {
      "quote": "Ask for forgiveness, not permission",
      "author": "NANCY",
      "id": 8,
      "likes": 0
    },
    {
      "quote": "You keep trying things on until something feels like you.",
      "author": "MAX",
      "id": 9,
      "likes": 0
    },
    {
      "author": "STEVE",
      "quote": "Use the shampoo and conditioner and when your hair’s damp, not wet, okay? When it’s damp, you do four puffs of the Farrah Fawcett spray.",
      "id": 10,
      "likes": 0
    },
    {
      "author": "ERICA",
      "quote": "You can't spell America wihtout Erica",
      "id": 11,
      "likes": 0
    },
    {
      "author": "MURRAY",
      "quote": "My fingers are like arrows! My arms, like iron! My feet, like spears! Resist, and I will end you",
      "id": 12,
      "likes": 0
    },
    {
      "author": "JOYCE",
      "quote": "I need this phone and two weeks' advance. And a pack of Camels",
      "id": 13,
      "likes": 0
    },
    {
      "author": "WILL",
      "quote": "When you’re different, sometimes you feel like a mistake. But you make her feel like she’s not a mistake at all. Like she’s better for being different.",
      "id": 14,
      "likes": 0
    }
  ]
};


function renderQuote(quote) {

  const quoteContainer = document.createElement('li');
  quoteContainer.classList.add('quote-card');
  quoteContainer.dataset.id = quote.id;

  const quoteText = document.createElement('blockquote');
  quoteText.classList.add('blockquote');

  const quoteQuote = document.createElement('p');
  quoteQuote.classList.add('mb-0');
  quoteQuote.textContent = quote.quote;

  const quoteAuthor = document.createElement('footer');
  quoteAuthor.classList.add('blockquote-footer');
  quoteAuthor.textContent = quote.author;

  const likeBtn = document.createElement('button');
  likeBtn.classList.add('btn', 'btn-success');
  likeBtn.textContent = `Likes: ${quote.likes}`;

  quoteText.appendChild(quoteQuote);
  quoteText.appendChild(quoteAuthor);
  quoteContainer.appendChild(quoteText);
  quoteContainer.appendChild(likeBtn);

  quoteList.appendChild(quoteContainer);
}

function addQuote(e) {
  e.preventDefault();
  const quoteInput = document.querySelector('#quote-input');
  const authorInput = document.querySelector('#author-input');
  const quote = {
    quote: quoteInput.value,
    author: authorInput.value,
    id: quotes.quotes.length + 1,
    likes: 0
  };
  quotes.quotes.push(quote);
  renderQuote(quote);
  quoteInput.value = '';
  authorInput.value = '';
}

quotes.quotes.forEach(quote => {
  
});

const addQuoteForm = document.querySelector('form');
addQuoteForm.addEventListener('submit', addQuote);
quotes.quotes.forEach(quote => {
    const quoteContainer = document.createElement('li');
    quoteContainer.classList.add('quote-card');
    quoteContainer.dataset.id = quote.id;
  
    const quoteText = document.createElement('blockquote');
    quoteText.classList.add('blockquote');
  
    const quoteQuote = document.createElement('p');
    // quoteQuote.classList.add('mb-0');
    quoteQuote.textContent = quote.quote;
  
    const quoteAuthor = document.createElement('footer');
    quoteAuthor.classList.add('blockquote-footer');
    quoteAuthor.textContent = quote.author;
  
    const likeBtn = document.createElement('button');
    likeBtn.classList.add('btn', 'btn-success');
    likeBtn.textContent = `Likes: ${quote.likes}`;
    likeBtn.addEventListener('click', () => {
      quote.likes++;
      likeBtn.textContent = `Likes: ${quote.likes}`;
    });
  
    quoteText.appendChild(quoteQuote);
    quoteText.appendChild(quoteAuthor);
    quoteContainer.appendChild(quoteText);
    quoteContainer.appendChild(likeBtn);
  
    quoteList.appendChild(quoteContainer);

    
  });
})
  
