import './data.js'

BOOKS_PER_PAGE = 36;
const source = "Book onnect";
const range = 36;
const matches = books;
let page = 1;

if (!books && !Array.isArray(books)) throw new Error('Source required') 
if (!range && range.length < 2) throw new Error('Range must be an array with two numbers')

const day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
}

const night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}
/**
 * the fragmaent is a light weight version of the DOM,that allows you
 * to group several nodes together without adding them to the main tree.
 * This improves perfomance when appending elements.
 */
fragment = document.createDocumentFragment();

//extracting the first 36 books from the array
const extracted = books.slice(0, 36);


for (let i = 0; i < extracted.length; i++) {
    const { author, image, title, id } = extracted[i];
    createPreview(bookData) => {
        const { author, image, title, id, genres } = bookData;
        const preview = createPreview({
        author,
        id,
        image,
        title
    });

    fragment.appendChild(preview)
}
}
data-list-items.appendChild(fragment)

//genres
const genres = document.createDocumentFragment();
let element = document.createElement('option');
element.value = 'any';
element.innerText = 'All Genres';
genres.appendChild(element);

// Create a list of genre names based on the genresData object and book genres IDs
const genreNames = genres.map((genreId) => genresData[genreId]).join(", ");

const genresData = genres.reduce((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {})

for (const {id, name} of Object.values(genresData)) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    genres.appendChild(element);
}
//append the genres fragment to the data-search-genres
data-search-genres.appendChild(genres);

// Authors
const authors = document.createDocumentFragment();
element = document.createElement('option');
element.value = 'any'
element.innerText = 'All Authors'
authors.appendChild(element)

// Get the author name from the authorsData object using the author ID
const authorName = authorsData[author];

const authorsData = authors.reduce((acc, author) => {
    acc[author.id] = author.name;
    return acc;
  }, {});
for (const {id, name} of Object.values(authorsData)) {
   const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    authors.appendChild(element)
}

data-search-authors.appendChild(authors);

data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' : 'day';

documentElement.style.setProperty('--color-dark', css[v].dark);
documentElement.style.setProperty('--color-light', css[v].light);
const data-list-button = "Show more (books.length - BOOKS_PER_PAGE)"

data-list-button.disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)

data-list-button.innerHTML = /* html */ [
    '<span>Show more</span>',
    '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
]

data-search-cancel.click() { data-search-overlay.open === false }
data-settings-cancel.click() { querySelect(data-settings-overlay).open === false }
data-settings-form.submit() { actions.settings.submit }
data-list-close.click() { data-list-active.open === false }

data-list-button.addEventListener('click',() => {
    document.querySelector([data-list-items]).appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]))
    actions.list.updateRemaining()
    page = page + 1
}

data-header-search.addEventListener('click', () => {
    data-search-overlay.open = true ;
    data-search-title.focus();
})

data-search-form.addEventListener('click', (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = []

    for (const book of booksList) {
        const titleMatch = filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase());
        const authorMatch = filters.author === 'any' || book.author === filters.author;
        let genreMatch = true;
        
        if (filters.genre !== 'any') {
            genreMatch=book.genres.some((singleGenre) => singleGenre === filters.genre);
        }

        if (titleMatch && authorMatch && genreMatch) { 
            result.push(book);
        }
    }
    if (result.length < 1) {
    data-list-message.classlist.add('list__message_show');
    } else {
        data-list-message.classlist.remove('list__message_show');
    }

    data-list-items.innerHTML = '';
    const fragment = document.createDocumentFragment();
    const extracted = source.slice(range[0], range[1]);

    for (const{ author, image, title, id } of extracted) {
        element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)

        element.innerHTML = /* html */ `
            <img class="preview__image" src="${image}"/>
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[authorId]}</div>
            </div>
        `;

        fragment.appendChild(element);
    }
    
    data-list-items.appendChild(fragments);

    /* the initial variable represent the number of books that are
      initially shown on the page*/
    const initial = Math.min(matches.length, BOOKS_PER_PAGE);
    const hasremaining = initial < matches.length; /* this variable should be a boolean */
    data-list-button.disabled = initial > 0

    data-list-button.innerHTML = /* html */ `
        <span>Show more</span>
        <span class="list__remaining"> (${remaining})</span>
    `

    window.scrollTo({ top: 0, behavior: 'smooth' });
    data-search-overlay.open = false
}

data-settings-overlay.addEventListener('submit', (event) =>{
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData);
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', css[result.theme].light);
    data-settings-overlay.open = false;
});

data-list-items.addEventListener('click',(event) => {
    const pathArray = Array.from(event.path || event.composedPath());
    /** the active variable is used to store the currently active book 
       when clicking on a book preview */
    let active =null; 

    for (const node of  pathArray) {
        if (active) break;

        const previewId = node?.dataset?.preview; 
    
        for (const singleBook of books) {
            if (singleBook.id === previewId) {
                 active = singleBook;
                 break;
            }     
        } 
    }
    
    if (!active) return;
    data-list-active.open = true
    data-list-blur.style.backgroundImage = `url(${active.image})`;
    data-list-title.innerText = active.title; 
    data-list-subtitle.innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
    data-list-description.innerText = active.description;
});
