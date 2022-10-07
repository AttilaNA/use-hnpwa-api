using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyModel;
using Newtonsoft.Json;
using HackerNewsClient.Models;

namespace HackerNewsClient.Controllers;

public class ApiController : Controller
{
    public string Top()
    {
        var client = new HttpClient();
        var response = client.GetStringAsync("https://api.hnpwa.com/v0/news/1.json").Result;
        return response;
    }
}