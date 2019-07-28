using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using RestSharp;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace IsracardApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GitHubController : ControllerBase
    {
        // GET api/<controller>/5
        [HttpGet("{searchKeywod}")]
        public async Task<ActionResult<string>> Get(string searchKeywod)
        {
            HttpContext.Session.SetString("Key","Val");
            var client = new RestClient("https://api.github.com/search/repositories?q="+searchKeywod);
            var request = new RestRequest(Method.GET);
            IRestResponse response = client.Execute(request);
            if (response.IsSuccessful)
            {
                var content = JsonConvert.DeserializeObject<JToken>(response.Content);

                return Ok(content);
   
            }           
            return BadRequest("GitHub website not response!!!");
        }


        [HttpGet("allbookmarks/")]
        public async Task<ActionResult<IEnumerable<Object>>> GetBookmarks()
        {
            var keys = HttpContext.Session.Keys;
            List<object> list = new List<Object>();
            foreach (Object key in keys)
            {
                var item = JsonConvert.DeserializeObject(HttpContext.Session.GetString(key.ToString()));
                list.Add(item);
            }

            return Ok(list);

        }

        // POST api/<controller>
        [HttpPost("bookmark/")]
        public async Task<ActionResult<string>> Post([FromBody]object item)
        {
            JToken content = JsonConvert.DeserializeObject<JToken>(item.ToString());
            
            // check if a id already exist
            var key = content.Value<int>("id").ToString();
            var bookmark= HttpContext.Session.GetString(key);

            if(bookmark != null)
            {
                return BadRequest("The bookmark already exits!!!");
            }

            HttpContext.Session.SetString(content.Value<int>("id").ToString(), content.ToString());
            var it = HttpContext.Session.GetString(content.Value<int>("id").ToString());
            return Ok(content);
        }
   
    }
}
