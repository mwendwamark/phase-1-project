
const characterButton = document.querySelector("button[type='menu']");
const characterList = ["Murray", "Eleven", "Hopper", "Jonathan", "Joyce", "Steve", "Mike", "Dustin", "Nancy", "Will","Erica"];
let characterIndex = 0;

characterButton.addEventListener("click", () => {
  if (characterIndex < characterList.length) {
    const character = characterList[characterIndex];
    if (!document.querySelector(`#quote-list li[data-character='${character}']`)) {
      const li = document.createElement("li");
      li.textContent = character;
      li.dataset.character = character;
      document.querySelector("#quote-list").appendChild(li);
    }
    characterIndex++;
  }
});



document.addEventListener('DOMContentLoaded', () => {

  
  const fetchQuotes = () => {
    fetch('http://localhost:3000/quotes')

      .then(response => response.json())
      .then(data => {
      
        console.log(data);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  //Adding a new quote to the server
  const addQuote = (newQuote) => {
    fetch('http://localhost:3000/quotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newQuote)
    })
      .then(response => response.json())
      .then(data => {
      
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Updating a quote on the server
  const updateQuote = (quoteToUpdate, updatedQuote) => {
    fetch(`http://localhost:3000/quotes/${quoteToUpdate}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedQuote)
    })
      .then(response => response.json())
      .then(data => {
      
        console.log(data);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  //Removing a quote from the server
  const deleteQuote = (quoteToDelete) => {
    fetch(`http://localhost:3000/quotes/${quoteToDelete}`, {
      method: 'DELETE'
    })
      .then(response =>  response.json())
      .then(data =>{
        console.log(data)
      })

      .catch(error => {
        console.error('Error deleting quote:', error);
      });
  };

  
fetchQuotes();



// Add the form submit event to add a new quote
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const quoteInput = document.querySelector('#quote');
  const authorInput = document.querySelector('#author');
  const newQuote = {
    quote: quoteInput.value,
    author: authorInput.value
  };
  addQuote(newQuote);
  quoteInput.value = '';
  authorInput.value = '';
});

// Handle the input change event to update a quote
const ul = document.querySelector('#quote-list');
ul.addEventListener('change', (event) => {
  const quoteId = event.target.dataset.id;
  const quoteField = event.target.dataset.field;
  const updatedQuote = {};
  updatedQuote[quoteField] = event.target.value;
  updateQuote(quoteId, updatedQuote);
});

// Handle the button click event to delete a quote
ul.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const quoteId = event.target.parentElement.dataset.id;
    deleteQuote(quoteId);
    event.target.parentElement.remove();
  }
});

});



  