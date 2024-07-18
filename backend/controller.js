const User = require('./model/User');

// @desc    Get all users
// @route   GET /api/users
// @access  Public
exports.getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({ success: true, count: users.length, data: users });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Server Error' });
    }
  };
  
  // @desc    Create new user
  // @route   POST /api/create
  // @access  Public
  exports.createUser = async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json({ success: true, user, message: 'User created successfully' });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Server Error' });
    }
  };
  
  // @desc    Update a user
  // @route   PATCH /api/users/:id
  // @access  Public
  exports.updateUser = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
  
      if (user) {
        res.json({ message: 'User updated successfully', user });
      } else {
        res.status(404).json({ message: `User with ID ${id} not found` });
      }
    } catch (err) {
      res.status(500).json({ success: false, message: 'Server Error' });
    }
  };
  
  // @desc    Delete a user
  // @route   DELETE /api/users/:id
  // @access  Public
  exports.deleteUser = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findByIdAndDelete(id);
  
      if (user) {
        res.json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ message: `User with ID ${id} not found` });
      }
    } catch (err) {
      res.status(500).json({ success: false, message: 'Server Error' });
    }
  };