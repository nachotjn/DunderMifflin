﻿namespace DunderMifflinAPI.Models
{
    public class Product
    {
        public int ProductId { get; set; } 
        public required string Name { get; set; }   
        public required string Description { get; set; }  
        public decimal Price { get; set; }   
        public int Stock { get; set; }     

    }
}