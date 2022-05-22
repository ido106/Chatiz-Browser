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

        public List<Contact> getContacts(User? user)
        {
            if (user == null) return null;
            return user.Contacts;
        }
        
        // ?
        public User getContact(User? user, string name) {
            if (user == null) return null;
            return user.getContacts.Find((contact) => contact.Username == name);
        }


        public bool addContact(string user, string contact)
        {
            User? user1 = GetUser(user);
            User? user2 = GetUser(contact);

            if(user1 == null || user2 == null)
            {
                return false;
            }

            if (user1.Contacts.FindAll((x) => x.Username == user2.Username).Count > 0)
            {
                return true;
            }

            user1.Contacts.Add(new Contact(user2.Username, new List<Message>));
            user2.Contacts.Add(new Contact(user1.Username, new List<Message>));
            return true;
        }
    }
}
