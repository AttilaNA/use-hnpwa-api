// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

init();

function init(){
    makeTopNewsClickable();
}

function makeTopNewsClickable(){
    const tag = document.querySelector("a.nav-link.text-dark.top-news");
    tag.addEventListener("click", getNews);
}

async function getNews(){
    const response = await fetch('/Home/TopNews/' )
    console.log(await response.json());
}
