using System;

public class Contact
{
    [Key]
    public string Username { get; set; }

    [Required]
    public List<Message> Messages { get; set; }

    [Required]
    public string Server { get; set; }
}
