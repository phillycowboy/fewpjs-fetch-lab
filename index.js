function fetchBooks() {
 return fetch('https://anapioficeandfire.com/api/books').then((res) =>{
    return res.json()
  }).then((json) => {
    renderBooks(json)
  })
}

function renderBooks(json) {
  for(let book of json){
  const ul = document.createElement('ul')
  const li = document.createElement('li')
  document.body.appendChild(ul);
    li.innerText = book.name;
    ul.appendChild(li);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
