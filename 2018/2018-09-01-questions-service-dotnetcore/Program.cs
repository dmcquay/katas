using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace questions_service_dotnetcore
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
            //     .Configure(app => {
            //         app.Run(async (context) => {
            //     await context.Response.WriteAsync("Hello World!");
            // });
            //     })
                .Build();
            host.Run();
        }
    }
}
