﻿namespace DunderMifflinAPI.Models
{
    public class Customer
    {
        public int Id { get; set; }
    
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string Email { get; set; }
        public required string Address { get; set; }
        public required string PhoneNumber { get; set; }

        public List<Order> Orders { get; set; } = new List<Order>();
    }

    
}