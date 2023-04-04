
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


})


  