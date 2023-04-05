const quoteList = document.querySelector('#quote-list');

async function getQuotes() {
  const response = await fetch('http://localhost:3000/quotes');
  const quotes = await response.json();
  return quotes;
}

async function addQuote(author, quote) {
  await fetch('http://localhost:3000/quotes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ author, quote, likes: 0 })
  });
  const newQuote = await response.json();
  return newQuote;
}

async function updateQuote(id, likes) {
  const response = await fetch(`http://localhost:3000/quotes/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ likes })
  });
  const updatedQuote = await response.json();
  return updatedQuote;
}

async function deleteQuote(id) {
  const response = await fetch(`http://localhost:3000/quotes/${id}`, {
    method: 'DELETE'
  });
  const deletedQuote = await response.json();
  return deletedQuote;
}

function renderQuote(quote) {
  const li = document.createElement('li');
  li.innerHTML = `
    <h3>${quote.author}</h3>
    <p>${quote.quote}</p>
    <button class="like-button" data-id="${quote.id}">&#x1F44D;</button>
    <span class="like-counter">${quote.likes}</span>
    <button class="delete-button" data-id="${quote.id}">Delete</button>
  `;
  quoteList.appendChild(li);
}

async function renderQuotes() {
  quoteList.innerHTML = '';
  const quotes = await getQuotes();
  quotes.forEach(renderQuote);
}

async function handleSubmit(event) {
  event.preventDefault();
  const authorInput = document.querySelector('#author');
  const quoteInput = document.querySelector('#quote');
  const author = authorInput.value;
  const quote = quoteInput.value;
  await addQuote(author, quote);
  authorInput.value = '';
  quoteInput.value = '';
  await renderQuotes();
}

async function handleDelete(event) {
  if (event.target.classList.contains('delete-button')) {
    const id = event.target.dataset.id;
    await deleteQuote(id);
    await renderQuotes();
  }
}

async function handleLike(event) {
  if (event.target.classList.contains('like-button')) {
    const id = event.target.dataset.id;
    const quote = await updateQuote(id, parseInt(event.target.nextElementSibling.innerText) + 1);
    event.target.nextElementSibling.innerText = quote.likes;
  }
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

quoteList.addEventListener('click', handleDelete);
quoteList.addEventListener('click', handleLike);

(async function init() {
  await renderQuotes();
})();
