using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RatingsPage.Models;

namespace RatingsPage.Data
{
    public class RatingsPageContext : DbContext
    {
        public RatingsPageContext (DbContextOptions<RatingsPageContext> options)
            : base(options)
        {
        }

        public DbSet<RatingsPage.Models.Rating>? Rating { get; set; }
    }
}
