using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Any;
using Org.PharmaServices.Models;

namespace Org.PharmaServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private static List<dynamic> products = new List<dynamic>
        {
            new { Id = 1, Name = "Product 1", Description = "Description 1", Price = 100 },
            new { Id = 2, Name = "Product 2", Description = "Description 2", Price = 200 },
        };

        [HttpGet]
        public IActionResult GetProducts()
        {
            return Ok(products);
        }

        [HttpPost]
        public IActionResult SaveProduct([FromBody] dynamic product)
        {
            var pro = new Product(product.Id, product.Name, product.Description, product.Price);
            

            var existingProduct = products.FirstOrDefault(p => p.Id == (int)product.Id);
            if (existingProduct != null)
            {
                products.Remove(existingProduct);
            }
            products.Add(product);
            return Ok(product);
        }
    }
}
