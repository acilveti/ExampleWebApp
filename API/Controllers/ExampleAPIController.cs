using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]

public class ExampleAPIController : Controller
{
    public ExampleAPIController()
    {
            
    }
    [HttpGet]
    public JsonResult ExampleAPI(string name_tag)
    {
        
        
        return Json("hello");
        
        

    }
}