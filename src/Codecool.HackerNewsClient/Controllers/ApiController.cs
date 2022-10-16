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
    public string Top(string page)
    {
        var side = page == null ? 1 : Int32.Parse(page);
        var client = new HttpClient();
        var response = client.GetStringAsync($"https://api.hnpwa.com/v0/news/{side}.json").Result;
        var deserializedResponse = JsonConvert.DeserializeObject<List<News>>(response);
        return JsonConvert.SerializeObject(deserializedResponse);
    }
}