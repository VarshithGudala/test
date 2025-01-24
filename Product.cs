namespace Org.PharmaServices.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string Description { get; set; }
        public decimal Price { get; set; }

        public Product(int Id, string Name, string Desc, decimal Price)
        {
            this.Id = Id;
            this.Name = Name;
            this.Description = Desc;
            this.Price = Price;

        }

    }

}
