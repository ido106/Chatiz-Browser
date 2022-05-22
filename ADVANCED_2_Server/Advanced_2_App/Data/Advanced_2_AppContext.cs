using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Advanced_2_App.Models;

namespace Advanced_2_App.Data
{
    public class Advanced_2_AppContext : DbContext
    {
        public Advanced_2_AppContext (DbContextOptions<Advanced_2_AppContext> options)
            : base(options)
        {
        }

        public DbSet<Advanced_2_App.Models.User>? Users { get; set; }
    }
}
