# Tasks

## Main page

Create a web application which renders news from the Hacker news site.

1. The opening page of the website (/) can be accessed.

2. There is a menu at the top of the page with the following elements.
	
	- Hackson news
	
	- Top news
	
	- Newest
	
	- Jobs

3. Clicking Hackson news redirects to the start page.

4. Clicking top news refreshes the inner content of the page with the top news without reloading the page. See details below.

5. Clicking jobs, refreshes the inner content of the page with the jobs without reloading the page. See details below.

6. There is a footer with the name and email address of the developer.

## Top news

Show top news from Hacker News site as cards next to each other.

1. Data from the '/https://api.hnpwa.com/v0/news/1.json' external endpoint is displayed properly on your web page, including respective title, timeAgo, author, and url data fields. - If the page 
parameter is not set, the first thirty elements are received and returned (that is, the first page). - If the parameter is set, the respective page is received ('GET /api/top?page=5' returns news 
from the fifth page).

2. This endpoint uses the data from Hacker News API (api.hnpwa.com), which is retrieved on the backend side. (See General requirements.)

3. The opening page of the website (/) loads the first thirty top news articles from hacker news.

4. The page has an HTML div element that contains the data in cards.

5. Every card shows the following information on a news article.
	
	- Title, which is also a link to the original article.
	
	- Author, the uploader, if available.
	
	- TimeAgo, which is the publication date.

6. The webpage follows a generic MVC design.

7. There is a next button above the cards. Clicking this button displays the next thirty news articles, if available.

8. There is a previous button above the cards. Clicking this button displays the previous thirty news articles, if available.

## Newest news

When I select Newest from the menu, the page content changes to newest news.

1. Data from the '/api/newest' external endpoint is displayed properly on the webpage, including the respective "title", "timeAgo", "author" and "url" data fields. - If the page parameter is not 
defined, the first thirty elements are received and returned (that is, the first page). - If the parameter is set, the respective page is received ('GET /api/newest?page=5' returns news from fifth 
page).

2. When clicking the Newest button in the menu, the page refreshes the content of the cards with the first thirty latest news articles.

3. The page has an HTML div element that contains the data in cards.

4. Every card shows the following information on a news article.
	
	- Title, which is also a link to the original article.
	
	- Author, the uploader, if available.
	
	- TimeAgo, which is the publication date.

5. There is a next button above the cards. Clicking this button displays the next thirty news articles, if available.

6. There is a previous button above the cards. Clicking this button displays the previous thirty news articles, if available.

## Job news

When I select Jobs from the menu the page content changes to job-related news.

1. Data from the '/api/jobs' external endpoint is displayed properly on the webpage, including the respective "title", "timeAgo", and "url" data fields. - If the page parameter is not defined, the 
first thirty elements are received and returned (that is, the first page). - If the page parameter is set, the page is received ('GET /api/jobs?page=5' returns news from the fifth page).

2. The page has an HTML div element that contains the data in cards.

3. Every card shows the following information on a job news article.
	
	- Title, which is also a link to the original article.
	
	- TimeAgo, which is the publication date.

4. There is a next button above the cards. Clicking this button displays the next thirty job news, if available.

5. There is a previous button above the table. Clicking this button displays the previous thirty job news, if available.
