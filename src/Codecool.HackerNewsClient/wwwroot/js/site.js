// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let topNewsAnchor = document.querySelector("a.nav-link.text-dark.top-news");
topNewsAnchor.addEventListener("click", topNews);

function topNews(anchor){
    let response = apiGet("/Api/Top/")
    console.log(response);
}

function apiGet(url) {
    let response = fetch(url, {
        method: "GET",
    });
    if (response.ok) {
        return response.json();
    }
}