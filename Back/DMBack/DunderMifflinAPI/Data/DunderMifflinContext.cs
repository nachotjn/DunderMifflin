using Microsoft.EntityFrameworkCore;
using DunderMifflinAPI.Models;

namespace DunderMifflinAPI.Data
{
    public class DunderMifflinContext : DbContext
    {
        public DunderMifflinContext(DbContextOptions<DunderMifflinContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; } = null!;
        public DbSet<Order> Orders { get; set; } = null!;
        public DbSet<Customer> Customers { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}