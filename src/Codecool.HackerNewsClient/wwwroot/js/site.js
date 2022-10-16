// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let topNewsAnchor = document.querySelector("a.nav-link.text-dark.top-news");
topNewsAnchor.addEventListener("click", ShowTopNews);

async function ShowTopNews(anchor){
    let response = await apiGet("/Api/Top/");
    console.log(response);
    let newsDiv = document.querySelector("body > div > main > div.news");
    emptyContainer(newsDiv);
    fillContainerWithResponse(newsDiv ,response);
}

async function apiGet(url) {
    let response = await fetch(url, {
        method: "GET",
    });
    if (response.ok) {
        return response.json();
    }
}

function emptyContainer(container){
    container.replaceChildren();
}

function fillContainerWithResponse(container, response){
    for (let i = 0; i < response.length; i += 4){
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0 + i; j < 4 + i && j < response.length; j++) {
            let card = `<div class="col-12 col-md-3">
                            <div class="card">
                                <div class="card-body">
                                    <a href="${response[j]['Url']}" class="btn btn-primary">${response[j]['Title']}</a><br><br>
                                    <h5 class="card-title">${response[j]['User']}</h5>
                                    <p class="card-text">${response[j]['Time_Ago']}</p>
                                </div>
                            </div>
                        </div>`
            row.insertAdjacentHTML('beforeend', card);
        }
        container.insertAdjacentHTML('beforeend', '<br>');
    }
}
