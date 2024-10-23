namespace DunderMifflinAPI.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public string Status { get; set; } = null!;
    
        public List<OrderEntry> OrderEntries { get; set; } = new List<OrderEntry>();
    }

}