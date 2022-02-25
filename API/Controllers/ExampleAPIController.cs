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
        var ActivityObj = new AppActivities 
            { 
                Activities = activity, 
                ActivitiesType = type,
                participants = participants,
                price = price
            };

        _context.Activities.Add(ActivityObj);
        _context.SaveChanges();        
        
        maxIndex = _context.Activities.Max(a => a.Id);

        var lastActivities = _context.Activities
        .Where(a => a.Id > maxIndex-5)
        .ToList();
        
        return Json(lastActivities);

        
        
    }

    
}