
let deckLibros = document.querySelector("#deck-libros");

let libros = [];

//Fetch a libros.json para obtener los libros
fetch('libros.json')
.then(response => response.json())
.then(data => {
    libros = data;
    console.log(libros);
    printBooks();
});

/** Funcion para devolver información de un libro segun su nombre API openlibrary.org */
const getBookInfo = async (book) => {
    const url = `https://openlibrary.org/search.json?q=${book}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.docs[0];
}


// Funcion que recorre el array e imprime la información de cada libro
const printBooks = async () => {
    for (let i = 0; i < libros.length; i++) {
        const book = await getBookInfo(libros[i].titulo);
        const { title, author_name, cover_i } = book;
        const cover = getCoverLibro(book);

        let libroCard = document.createElement("div");
        libroCard.innerHTML += `
            <div class="card-libro">
                <img src="${cover}" class="card-img-top" alt="${title}">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${author_name}</p>
                    <p>Valoración: ${libros[i].valoracion}/10</p>
                </div>
            </div>
        `;
        deckLibros.appendChild(libroCard);
    }
}

// Funcion para devolver la imagen de portada de un libro segun su nombre. Si no tiene imagen de portada devuelve una imagen por defecto
const getCoverLibro = (libro) => {
    if (libro.cover_i) {
        return `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`;
    } else {
        return 'https://via.placeholder.com/150x180?text=No+Image';
    }
}





printBooks();
