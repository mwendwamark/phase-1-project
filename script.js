// const quoteList = document.getElementById('quote-list');
// const addQuoteForm = document.getElementById('add-quote-form');

// function renderQuote(quote) {
//   const li = document.createElement('li');
//   const header = document.createElement('h2');
//   const quoteText = document.createElement('p');
//   const deleteButton = document.createElement('button');

//   header.textContent = quote.author;
//   quoteText.textContent = quote.text;
//   deleteButton.textContent = 'Delete';
//   deleteButton.addEventListener('click', () => {
//     deleteQuote(quote.id);
//     alert(`Quote "${quote.text}" by ${quote.author} has been deleted.`);
//   });

//   li.appendChild(header);
//   li.appendChild(quoteText);
//   li.appendChild(deleteButton);

//   quoteList.appendChild(li);
// }

// function renderQuotes(quotes) {
//   quoteList.innerHTML = '';
//   quotes.forEach((quote) => {
//     renderQuote(quote);
//   });
// }

// function addQuote(author, text) {
//   fetch('http://localhost:3000/quotes',
//  {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       author: author,
//       text: text
//     })
//   })
//   .then(response => response.json())
//   .then(() => {
//     fetchQuotes();
//   });
// }

// function deleteQuote(id) {
//   fetch(`http://localhost:3000/quotes ${id}`, {
//     method: 'DELETE'
//   })
//   .then(response => response.json())
//   .then(() => {
//     fetchQuotes();
//   });
// }

// function fetchQuotes() {
//   fetch('http://localhost:3000/quote')
//   .then(response => response.json())
//   .then(quotes => {
//     renderQuotes(quotes);
//   });
// }

// addQuoteForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const authorInput = addQuoteForm.elements.author;
//   const textInput = addQuoteForm.elements.text;
//   addQuote(authorInput.value, textInput.value);
//   authorInput.value = '';
//   textInput.value = '';
// });

// fetchQuotes();
