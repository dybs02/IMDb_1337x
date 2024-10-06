
const title = document.title.split(") - ")[0].replace("(", "");
const ul = document.querySelector('[data-testid="reviewContent-all-reviews"]');

console.log('title:', title);

if (title) {

  const link_1337x_2160p = document.createElement("a");
  link_1337x_2160p.href = `https://www.1337x.to/search/${title}+2160p/1/`;
  link_1337x_2160p.target = "_blank";
  link_1337x_2160p.textContent = "🔗 1337x (2160p)";
  link_1337x_2160p.style.backgroundColor = "#360606";
  link_1337x_2160p.style.marginLeft = "5px";

  ul.appendChild(link_1337x_2160p);

  const link_1337x_1080p = document.createElement("a");
  link_1337x_1080p.href = `https://www.1337x.to/search/${title}/1/`;
  link_1337x_1080p.target = "_blank";
  link_1337x_1080p.textContent = "🔗 1337x (1080p)";
  link_1337x_1080p.style.backgroundColor = "#360606";
  link_1337x_1080p.style.marginLeft = "5px";

  ul.appendChild(link_1337x_1080p);
}