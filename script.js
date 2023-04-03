const quotesUrl = "http://localhost:3000/quotes"

// Fetch all quotes
async function fetchQuotes() {
  const response = await fetch(quotesUrl)
  const quotes = await response.json()
  return quotes
}

// Add a quote
async function addQuote(quote, author) {
  const response = await fetch(quotesUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      quote: quote,
      author: author
    })
  })
  const newQuote = await response.json()
  return newQuote
}

// Delete a quote
async function deleteQuote(id) {
  const response = await fetch(`${quotesUrl}/${id}`, {
    method: 'DELETE'
  })
  return response.ok
}
