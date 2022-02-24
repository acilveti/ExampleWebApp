using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class AppActivities
    {
        public int Id { get; set; }

        public string Activities { get; set; } 

        public string ActivitiesType { get; set; }

        public int participants { get; set; }

        public float price { get; set; }
       
    }
}