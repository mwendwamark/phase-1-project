// Define a variable to store the list of quotes
let quotes = [];


const quoteForm = document.querySelector('form');
const quoteList = document.querySelector('#quote-list');
quoteForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  
  const quoteInput = document.querySelector('#quote');
  const authorInput = document.querySelector('#author');
  const quoteText = quoteInput.value;
  const authorText = authorInput.value;
  

  const newQuote = {
    quote: quoteText,
    author: authorText
  };
  quotes.push(newQuote);
  
  // Clear the form inputs
  quoteInput.value = '';
  authorInput.value = '';
  
  // Update the quote list on the page
  renderQuotes();
});

// Add an event listener to the quote list to handle delete button clicks
quoteList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    // Get the index of the quote in the array
    const quoteIndex = event.target.parentElement.dataset.index;
    
    // Remove the quote from the array
    quotes.splice(quoteIndex, 1);
    
    // Update the quote list on the page
    renderQuotes();
  }
});

// Define a function to render the quotes on the page
function renderQuotes() {
  // Clear the existing quote list
  quoteList.innerHTML = '';
  
  // Loop through the quotes array and create a list item for each quote
  for (let i = 0; i < quotes.length; i++) {
    const quote = quotes[i];
    
    // Create the list item element and set its dataset index to the current index in the array
    const li = document.createElement('li');
    li.dataset.index = i;
    
    // Create the quote and author elements and add them to the list item
    const quoteText = document.createElement('span');
    quoteText.textContent = quote.quote;
    const authorText = document.createElement('span');
    authorText.textContent = quote.author;
    li.appendChild(quoteText);
    li.appendChild(authorText);
    
    // Create the delete button element and add it to the list item
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    li.appendChild(deleteBtn);
    
    // Add the list item to the quote list
    quoteList.appendChild(li);
  }
}

// Call the renderQuotes function initially to display any existing quotes
renderQuotes();
