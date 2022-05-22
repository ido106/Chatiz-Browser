using System.ComponentModel.DataAnnotations;

namespace RatingsPage.Models
{
    public class Rating
    {
        public int Id { get; set; }
        [Range(1,5)]
        public int Rate { get; set; }
        public string Reason { get; set; }
    }
}
