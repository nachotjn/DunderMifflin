namespace DunderMifflinAPI.Models
{
    public class OrderEntry
    {
        public int Id { get; set; }
    
        public Order Order { get; set; } = null!;
        public Product Product { get; set; } = null!;
    }

}