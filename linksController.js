// document.getElementById("type").textContent = linksContent[0].type;
// document.getElementById("title").textContent = linksContent[0].title;
// document.getElementById("url").textContent = linksContent[0].url;

document.getElementById("links").innerHTML = links
  .map((link) => {
    return `
      <div class="link-container">
      <h2 class="link-title">${link.title}</h2>
      <p class="link-description">${link.description}</p>
       <footer>
        <p class="link-type">${link.type}</p>
        <a class="link-url" href="${link.url}" target="_blank"> 
          <img
          src="/assets/icons/link.svg"
          alt="Acesse o link"
          />
          Acessar
        </a>
       </footer>
      </div>
    `;
  })
  .join("");
