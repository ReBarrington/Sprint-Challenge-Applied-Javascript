// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(function (response) {
    // handle success
    console.log(response.data.articles);
    const articles = Object.keys(response.data.articles).forEach((key, index) => {
        console.log(key, ' is key and ', response.data.articles[key], ' is arrItem[key' )
        const arr = response.data.articles[key];
        arr.forEach(objInArr => {
            document.querySelector('.cards-container').appendChild(createTabs(objInArr))
        }) 
    })
    console.log(response.data.articles + ' is response.data.articles')
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  
function createTabs(data) {
    // define elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div')
    const img = document.createElement('img');
    const authorName = document.createElement('span');
    // classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');
    img.setAttribute('src', data.authorPhoto)
    // text
    headline.textContent = data.headline;
    authorName.textContent = data.authorName;
    // structure
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgCont);
    imgCont.appendChild(img);
    author.appendChild(authorName);

    console.log(data.headline + " is a headline")

    return card;

}