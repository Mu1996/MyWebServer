package spring;

import hibernate.User;
import hibernate.MyUserDAO;
import java.util.List;


public class UserServiceImpl implements UserService {

	private MyUserDAO MyUserDAO;
	public void setMyUserDAO(MyUserDAO myUserDAO) {
		MyUserDAO = myUserDAO;
	}
	public MyUserDAO getMyUserDAO() {
		return MyUserDAO;
	}
	public void addUser(User user) {
		// TODO Auto-generated method stub

	}

	public User getUserByUsername(String username) {
		// TODO Auto-generated method stub
		User user = null;
		List list = MyUserDAO.findByUsername(username);
		if (list.size()>0){
			user = (User)list.get(0);
		}
		return user;
	}

}
