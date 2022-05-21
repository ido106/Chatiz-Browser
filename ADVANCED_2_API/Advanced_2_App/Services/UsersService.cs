using Advanced_2_App.Models;

namespace Advanced_2_App.Services
{
    public class UsersService
    {
        public List<User> Users { get; set; }
        public UsersService()
        {
            Users = new List<User>();
        }


        public void AddUser(User user)
        {
            Users.Add(user);
        }

        public bool IsUserExists(User user)
        {
            return Users.Contains(user);
        }


        public User? GetUser(string username)
        {
            return Users.Find((x) => x.UserName.Equals(username));
        }

        public List<User> getContacts(User? user)
        {
            return user.Contacts;
        }


        public bool addContact(string user, string contact)
        {
            Console.WriteLine("ido dumb");
            User? user1 = GetUser(user);
            User? user2 = GetUser(contact);

            if(user1 == null || user2 == null)
            {
                return false;
            }

            if (user1.Contacts.Contains(user2))
            {
                return true;
            }

            user1.Contacts.Add(user2);
            return true;
        }
    }
}
