import { livros } from './array_livros.js';

function normalizeAuthorName(name) {
  const prefixes = ["Cap PM ", "Ten.Cel PM", "MJ PM ", "Ten PM", "Cel PM", "Sd PM", "Mjr PM", "1º Ten PM"];
  for (const prefix of prefixes) {
    if (name.startsWith(prefix)) {
      return name.replace(prefix, "").trim();
    }
  }
  return name;
}

function renderBooks(bookArray = livros) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  let currentRow;
  bookArray.forEach((livro, index) => {
    if (index % 4 === 0) {
      currentRow = document.createElement("div");
      currentRow.className = "book-row";
      bookList.appendChild(currentRow);
    }

    const article = document.createElement("article");
    article.id = "style_book";
    article.setAttribute("data-title", livro.titulo);
    article.setAttribute("data-author", livro.autor.name);

    article.innerHTML = `
      <div class="book-container" onclick="toggleExpand(this, ${index})">
        <div class="container_img">
          <img class="feniximg" src="${livro.imagem.src}" alt="${livro.imagem.alt}">
${livro.tag ? '<div class="new-tag"><span>Novo</span><img src="img/new.svg" alt="Novo"></div>' : ''}
        </div>
        <div class="author">
          <div class="name_book">
            <h2 class="book-title">${livro.titulo}</h2>
          </div>
          <h3 class="book-subtitle">${livro.autor.name}</h3>
        </div>
        <button class="arrow_button" style="display: none;" onclick="toggleExpand(this.parentElement, ${index}); event.stopPropagation();">
          <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="24px" style="fill: black;">
            <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"/>
          </svg>
        </button>
      </div>
    `;

    currentRow.appendChild(article);

    // Adiciona uma nova div abaixo de cada grupo de 5 livros
    if ((index + 1) % 4 === 0 || index === bookArray.length - 1) {
      const additionalDiv = document.createElement("div");
      additionalDiv.className = "additional-div";
      additionalDiv.id = `additional-div-${Math.floor(index / 4)}`;
      additionalDiv.innerHTML = ""; // Inicialmente vazia
      bookList.appendChild(additionalDiv);
    }
  });
}

function toggleExpand(element, index) {
  const additionalDivs = document.querySelectorAll(".additional-div");
  additionalDivs.forEach(div => div.innerHTML = ""); 

  const book_info_details = document.getElementById(`additional-div-${Math.floor(index / 4)}`);

  const elementHTML = element.outerHTML;

  const parser = new DOMParser();
  const doc = parser.parseFromString(elementHTML, "text/html");
  const h2Element = doc.querySelector("h2.book-title");
  const h2Text = h2Element ? h2Element.textContent : null;

  const livroMenu = livros.find((livro) => livro.titulo === h2Text);

  console.log(livroMenu);

  // Verifica se o botão SVG já está visível
  const arrowButton = element.querySelector('.arrow_button');
  if (arrowButton.style.display === 'block') {
    arrowButton.style.display = 'none'; 
    book_info_details.innerHTML = "";
    return;
  }

  // Esconde todos os botões de seta
  document.querySelectorAll('.arrow_button').forEach(button => button.style.display = 'none');

  arrowButton.style.display = 'block';

  book_info_details.innerHTML = `
  <div class="main_cointainer_details">
    <div class="details_book">
      <img class="detalis_img" src="${livroMenu.imagem.src}" alt="${livroMenu.imagem.alt}">
    </div>
    
    <div class="text_book">
      <p class="title_main_book_container">
        ${livroMenu.titulo}
      </p>
      
      <p class="author_style">
        <span class="por">Por</span> <span class="author_name">${livroMenu.autor.name}</span>
      </p>
      
      <p class="resume_book">
        ${livroMenu.desclivro}
      </p>
      
      <span class="about_author">
        <p><strong>Sobre o autor</strong></p>
        ${livroMenu.autor.descAutor}
      </span>

<!-- Adiciona o conteúdo extra apenas para os livros específicos logo após "Sobre o autor" -->
${livroMenu.titulo === "Legislação Policial Militar Anotada vol.2" || livroMenu.titulo === "Legislação Policial Militar Anotada" ? `
  <div class="additional_info">
    <p>Para maiores informações consulte o catálogo da Editora Atlas, <a href="http://www.atlasnet.com.br/cgi-bin/buscafinal.phtml?cod=8522429278" target="_blank">clique aqui</a>.</p>
    <p>Ou pelo telefone: 0800 17 1944.</p>
  </div>
` : ''}

${livroMenu.titulo === "Direitos Humanos - Perspectivas e reflexões para o século XXI" ? `
  <div class="additional_info">
    <p>Para maiores informações consulte o catálogo da LTR Editora, <a href="http://www.ltreditora.com.br/livros/direitos-humanos.html" target="_blank">clique aqui</a>.</p>
  </div>
` : ''}

${livroMenu.titulo === "Urbanização: Uma ferramenta dos direitos fundamentais na garantia da segurança pública" ? `
  <div class="additional_info">
    <p>Livro em formato digital, publicado pela Amazon Books, <a href="https://www.amazon.com.br/URBANIZA%C3%87%C3%83O-FERRAMENTA-DIREITOS-FUNDAMENTAIS-SEGURAN%C3%87A-ebook/dp/B016AX0TH4/ref=sr_1_4?ie=UTF8&qid=1476717316&sr=8-4&keywords=caradori" target="_blank">clique aqui</a>.</p>
  </div>
` : ''}

${livroMenu.titulo === "Estratégias de Policiamento Preventivo." ? `
  <div class="additional_info">
    <p>Para maiores informações, <a href="http://books.google.com/books?id=HXdE68HtvlEC&printsec=frontcover&hl=pt-BR#v=onepage&q&f=false" target="_blank">clique aqui</a>.</p>
  </div>
` : ''}

${livroMenu.titulo === "Artistas enfim: A Banda da Força Pública de São Paulo nos tempos da primeira República" ? `
  <div class="additional_info">
    <p>Para maiores informações, <a href="https://atenaeditora.com.br" target="_blank">clique aqui</a>.</p>
  </div>
` : ''}


${livroMenu.titulo === "Dicionário de Linguagem Castrense" ? `
  <div class="additional_info">
    <p>Para maiores informações, <a href="http://www.clubedeautores.com.br" target="_blank">clique aqui</a>.</p>
  </div>
` : ''}

${livroMenu.titulo === "Os Direitos Humanos e o conflito de civilizações" ? `
  <div class="additional_info">
    <p>Para maiores informações, <a href="https://www.amazon.com.br/OS-DIREITOS-HUMANOS-CONFLITO-CIVILIZA%C3%87%C3%95ES-ebook/dp/B00TWR86G2/ref=sr_1_1?ie=UTF8&qid=1476717207&sr=8-1&keywords=caradori" target="_blank">clique aqui</a>.</p>
  </div>
` : ''}

      ${livroMenu.titulo === "Manual de Apoio Jurídico Operacional" ? `
        <div class="additional_info">
          <p>Para saber mais sobre a obra:</p>
          <p>
            <a href="manual_livro/manual_apoio.zip" download="manual_apoio.zip" target="_blank">
              Clique aqui
            </a>
          </p>
        </div>
      ` : ''}

      ${livroMenu.titulo === "Noções de Direito Militar" ? `
        <div class="additional_info">
          <p>Para maiores informações, <a href="www.clubedeautores.com.br" target="_blank">clique aqui</a>.</p>
        </div>
      ` : ''}

            ${livroMenu.titulo === "Vocabulário Policial" ? `
        <div class="additional_info">
          <p>Para maiores informações enviar E-mail para: midiaempresarial@uol.com.br</p>
        </div>
      ` : ''}

      ${livroMenu.titulo === "Direitos e Vantagens dos Policiais Militares do Estado de São Paulo - 4ª Edição - Revista e Ampliada - Editora Atlas" ? `
        <div class="additional_info">
          <p>Para maiores informações, <a href="www.atlasnet.com.br/catalogo/c_catalogofinal.phtml?cod=8522423849" target="_blank">clique aqui</a>.</p>
          <p>Ou pelo telefone: 0800 17 1944.</p>

        </div>
      ` : ''}
            ${livroMenu.titulo === "Legislação Policial Militar Anotada 1ª" ? `
        <div class="additional_info">
          <p>Para maiores informações, <a href="www.atlasnet.com.br/catalogo/c_catalogofinal.phtml?cod=8522426694" target="_blank">clique aqui</a>.</p>
          <p>Ou pelo telefone: 0800 17 1944.</p>
        </div>` : ''}
    </div>
  </div>
`;
}

document.addEventListener("DOMContentLoaded", function () {
  renderBooks();

  const searchInput = document.querySelector(".search-input");
  searchInput.addEventListener("input", filterBooks);

  const sortDropdown = document.getElementById("sort-dropdown");
  sortDropdown.addEventListener("change", sortBooks);
});

function sortBooks() {
  const sortValue = document.getElementById("sort-dropdown").value;
  let sortedBooks = [...livros];

  if (sortValue === "recentes") {
    sortedBooks.sort((a, b) => new Date(b.data) - new Date(a.data));
  } else if (sortValue === "antigos") {
    sortedBooks.reverse(); // Inverte a lista para "Mais antigos"
  } else if (sortValue === "autor") {
    sortedBooks.sort((a, b) => normalizeAuthorName(a.autor.name).localeCompare(normalizeAuthorName(b.autor.name)));
  }

  renderBooks(sortedBooks);
}

function filterBooks() {
  const valorInput = document.querySelector(".search-input").value.toLowerCase();
  console.log(valorInput);

  const noResultsMessage = document.getElementById("no-results-message");
  noResultsMessage.style.display = "none";

  if (valorInput.length === 0) {
    renderBooks(livros);
    noResultsMessage.innerHTML = ""; 
    noResultsMessage.style.display = "none"; 
    return;
  }

  const filteredBooks = livros.filter(
    (book) =>
      book.titulo.toLowerCase().includes(valorInput) ||
      book.autor.name.toLowerCase().includes(valorInput)
  );
  console.log(filteredBooks);

  const bookList = document.getElementById("book-list");
  bookList.innerHTML = ""; 

  if (filteredBooks.length > 0) {
    renderBooks(filteredBooks);
    noResultsMessage.style.display = "none"; 
  } else {
    noResultsMessage.style.display = "block";
    noResultsMessage.innerHTML = `<img src="img/error.svg" alt="Erro" style="vertical-align: middle; margin-right: 5px;"> Não há resultado para a pesquisa "${valorInput}"`;
  }
}

window.toggleExpand = toggleExpand;