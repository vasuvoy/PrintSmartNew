using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using StickyHeaderMainMenu.Models;
using System.IO;

namespace StickyHeaderMainMenu.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileUploadController : ControllerBase
    {
        public static IWebHostEnvironment _webHostEnvironment;

        public FileUploadController(IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
        }

        [HttpPost]
        public void Post([FromForm(Name = "file")]IFormFile objectfile)
        {
            string path = "";
            try {
               // if (objectfile..Length > 0)
              // {
                     path = _webHostEnvironment.ContentRootPath +'\\'+ "ClientApp"+'\\'+"src"+'\\'+"assets"+'\\';
                
              //  }
               using (FileStream fs = System.IO.File.Create(path + objectfile.FileName)) 
                {
                   objectfile.CopyTo(fs);
                    fs.Flush();

               }
            }
            catch(Exception e) {
            throw e;

            }
        }
    }
}