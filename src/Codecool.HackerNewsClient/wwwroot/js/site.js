// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let topNewsAnchor = document.querySelector("a.nav-link.text-dark.top-news");
topNewsAnchor.addEventListener("click", topNews);

async function topNews(anchor){
    let response = await apiGet("/Api/Top/");
    response.forEach(x => console.log(x));
}

async function apiGet(url) {
    let response = await fetch(url, {
        method: "GET",
    });
    if (response.ok) {
        return response.json();
    }
}
