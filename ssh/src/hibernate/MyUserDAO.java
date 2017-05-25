package hibernate;

import java.util.List;

public interface MyUserDAO {

	public abstract List findByUsername(Object username);

}