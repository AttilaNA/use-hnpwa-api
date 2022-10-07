using System;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;

namespace HackerNewsClient.Controllers;

public class ApiController : Controller
{
    public string Top()
    {
        var client = new HttpClient();
        return client.GetStringAsync(new Uri("https://api.hnpwa.com/v0/news/1.json")).Result;
    }
}