package spring;
import hibernate.User;
public interface UserService {
	public User getUserByUsername(String username);
	public void addUser(User user);
}
