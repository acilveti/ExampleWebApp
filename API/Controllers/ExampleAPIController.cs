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
    public JsonResult ExampleAPI(string activity, string type, int participants, float price)
    {
        
        
        var Activities = _context.Activities.ToList();

        int maxIndex = _context.Activities.Max(p => p.Id);

        var ActivityObj = new AppActivities 
            { 
                Activities = activity, 
                ActivitiesType = type,
                participants = participants,
                price = price
            };

        _context.Activities.Add(ActivityObj);
        _context.SaveChanges();
        //context.Activities.ToList();
        /* var acti = db.Activities.ToList();*/

        Activities = _context.Activities.ToList();

        maxIndex = _context.Activities.Max(p => p.Id);
        return Json(Activities);
        
        
    }

    
}