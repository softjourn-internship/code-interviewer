package user.service.impl;

import user.domain.User;
import user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import user.service.UserService;

import java.util.List;

/**
 * Created by Iwan on 23.12.2015.
 */
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }
}
