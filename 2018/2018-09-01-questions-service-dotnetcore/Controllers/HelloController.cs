using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace questions_service_dotnetcore.Controllers {
    [Route("hello")]
    public class HelloController : Controller {
        static private string[] questions = new [] {"hello", "world"};
        static private int index = 0;

        [HttpGet]
        public string Get()
        {
            return questions[index++];
        }
    }
}