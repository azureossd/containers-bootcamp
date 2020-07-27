using System.Text.Json;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Collections.Generic;

namespace dotnetcore_sample.Controllers
{
    public class Response
    {
        public string Message { get; set; }
        public string HostName { get; set; }
        public Dictionary<string, string> RequestHeaders { get; set; }
    }


    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {

        [HttpGet]
        public ActionResult Get()
        {
            Dictionary<string, string> headers = new Dictionary<string, string>();

            foreach (var header in Request.Headers.ToList())
            {
                headers.Add(header.Key, header.Value);
            }
            Response response = new Response();
            response.Message = "My dotnet container is running...";
            response.HostName = Dns.GetHostName();
            response.RequestHeaders = headers;
            return Ok(JsonSerializer.Serialize(response));
        }
    }
}
