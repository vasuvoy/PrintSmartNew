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
        public void Post([FromForm(Name = "file")]IFormFile objectfile,[FromForm(Name="folderName")]String foldername, [FromForm(Name = "mode")]String mode)
        {
            string path = "";
            try
            {

                if (mode == "prod")
                {
                    path = _webHostEnvironment.ContentRootPath + '/' + "ClientApp" + '/' + "dist" + '/' + "assets" + '/' + foldername + '/';
                }
                else
                {
                    path = _webHostEnvironment.ContentRootPath + '\\' + "ClientApp" + '\\' + "src" + '\\' + "assets" + '\\' + foldername + '\\';
                }
                if (!Directory.Exists(path))
                {
                    //If Directory (Folder) does not exists. Create it.
                    Directory.CreateDirectory(path);
                }
                using (FileStream fs = System.IO.File.Create(path + objectfile.FileName))
                {
                   
                    // var s= HttpContext.Session.Get("folder");
                    objectfile.CopyTo(fs);
                    fs.Flush();

                }
            }
            catch (Exception e)
            {
                throw e;

            }

        }


    }
}
