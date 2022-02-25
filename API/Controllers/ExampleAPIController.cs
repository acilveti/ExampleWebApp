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


    private readonly DataContext _context;

    public ExampleAPIController(DataContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public JsonResult ExampleAPI()
    {
        var customers = _context.Users.ToList();
        //context.Activities.ToList();
        /* var acti = db.Activities.ToList();*/
        return Json(customers);
        
        
    }

    
}