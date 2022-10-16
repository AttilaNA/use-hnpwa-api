// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

init();

function init(){
    let topNewsAnchor = document.querySelector("a.nav-link.text-dark.top-news");
    topNewsAnchor.addEventListener("click", ShowTopNews);
    let newestAnchor = document.querySelector("a.nav-link.text-dark.newest");
    newestAnchor.addEventListener("click", ShowNewestNews);
    let jobsAnchor = document.querySelector("a.nav-link.text-dark.jobs");
    jobsAnchor.addEventListener("click", ShowJobs);
}

async function ShowTopNews(){
    let response = await apiGet("/Api/Top/");
    let newsDiv = document.querySelector("body > div > main > div.news");
    emptyContainer(newsDiv);
    fillContainerWithResponse(newsDiv ,response);
    showPagination(newsDiv, response);
    let previous = document.querySelector("li.page-item.previous");
    previous.addEventListener("click", ShowTop);
    let next = document.querySelector("li.page-item.next");
    next.addEventListener("click", ShowTop);
}

async function ShowNewestNews(){
    let response = await apiGet("/Api/Newest/");
    let newsDiv = document.querySelector("body > div > main > div.news");
    emptyContainer(newsDiv);
    fillContainerWithResponse(newsDiv ,response);
    showPagination(newsDiv, response);
    let previous = document.querySelector("li.page-item.previous");
    previous.addEventListener("click", ShowNewest);
    let next = document.querySelector("li.page-item.next");
    next.addEventListener("click", ShowNewest);
}

async function ShowJobs(){
    let response = await apiGet("/Api/Jobs/");
    let newsDiv = document.querySelector("body > div > main > div.news");
    emptyContainer(newsDiv);
    fillContainerWithResponse(newsDiv ,response);
    showPagination(newsDiv, response);
    let previous = document.querySelector("li.page-item.previous");
    previous.addEventListener("click", ShowJobsPerPage);
    let next = document.querySelector("li.page-item.next");
    next.addEventListener("click", ShowJobsPerPage);
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
    container.setAttribute("data-current-page", 1);
    for (let i = 0; i < response.length; i += 4){
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0 + i; j < 4 + i && j < response.length; j++) {
            if (response[j]['User'] != null){
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
            } else {
                let card = `<div class="col-12 col-md-3">
                                <div class="card">
                                    <div class="card-body">
                                        <a href="${response[j]['Url']}" class="btn btn-primary">${response[j]['Title']}</a><br><br>
                                        <p class="card-text">${response[j]['Time_Ago']}</p>
                                    </div>
                                </div>
                            </div>`
                row.insertAdjacentHTML('beforeend', card);
            }
        }
        container.insertAdjacentHTML('beforeend', '<br>');
    }
}

function showPagination(container, response){
    let previous = document.querySelector("li.page-item.previous");
    let next = document.querySelector("li.page-item.next");
    
    if (previous || next){
        deletePagination();
    }
    
    let previousSide;
    let nextSide;
    
    if (response.length === 30){
        if (parseInt(container.dataset.currentPage) === 1){
            previousSide = 1;
            nextSide = 2;
        } else {
            previousSide = parseInt(container.dataset.currentPage) - 1;
            nextSide = parseInt(container.dataset.currentPage) + 1;
        }
    } else {
        previousSide = parseInt(container.dataset.currentPage) - 1;
        nextSide = parseInt(container.dataset.currentPage);
    }
    
    let pagination = `<nav class="navigation" aria-label="Page navigation example">
                        <ul class="pagination">
                          <li class="page-item previous"><a class="page-link" data-side="${previousSide}">Previous</a></li>
                          <li class="page-item next"><a class="page-link" data-side="${nextSide}">Next</a></li>
                        </ul>
                      </nav>`
    container.insertAdjacentHTML('beforebegin', pagination);
}

function deletePagination(){
    let parent = document.querySelector("main.pb-3");
    let pagination = document.querySelector("nav.navigation");
    parent.removeChild(pagination);
}

async function ShowTop(button){
    let response = await apiGet(`/Api/Top?Page=${button.target.dataset.side}`);
    let newsDiv = document.querySelector("body > div > main > div.news");
    emptyContainer(newsDiv);
    fillContainerWithResponse(newsDiv ,response);
    newsDiv.dataset.currentPage = button.target.dataset.side;
    showPagination(newsDiv, response);
    let previous = document.querySelector("li.page-item.previous");
    previous.addEventListener("click", ShowTop);
    let next = document.querySelector("li.page-item.next");
    next.addEventListener("click", ShowTop);
}

async function ShowNewest(button){
    let response = await apiGet(`/Api/Newest?Page=${button.target.dataset.side}`);
    let newsDiv = document.querySelector("body > div > main > div.news");
    emptyContainer(newsDiv);
    fillContainerWithResponse(newsDiv ,response);
    newsDiv.dataset.currentPage = button.target.dataset.side;
    showPagination(newsDiv, response);
    let previous = document.querySelector("li.page-item.previous");
    previous.addEventListener("click", ShowNewest);
    let next = document.querySelector("li.page-item.next");
    next.addEventListener("click", ShowNewest);
}

async function ShowJobsPerPage(button){
    let response = await apiGet(`/Api/Jobs?Page=${button.target.dataset.side}`);
    let newsDiv = document.querySelector("body > div > main > div.news");
    emptyContainer(newsDiv);
    fillContainerWithResponse(newsDiv ,response);
    newsDiv.dataset.currentPage = button.target.dataset.side;
    showPagination(newsDiv, response);
    let previous = document.querySelector("li.page-item.previous");
    previous.addEventListener("click", ShowJobsPerPage);
    let next = document.querySelector("li.page-item.next");
    next.addEventListener("click", ShowJobsPerPage);
}