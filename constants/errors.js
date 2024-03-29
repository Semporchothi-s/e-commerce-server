class Errors  {
    static emptyFields = "Please enter the required fields";
    
    static emptyUserName = "Please enter the username.";
    static emptyPassword = "Please enter the Password";
    static invalidPassword = "Password length should be more than 8";
    static userAlreadyExists = "User already exists";
    static userNotFound = "User not found";
    static emptyUserId = "UserId is required";

    static userCreationFailed = "Failed to create user.";
    
    static loggedIn = "Logged in successfully";
    static userCreated = "New user created successfully.";
    
    
    static categoryCreationFailed = "Failed to create new category.";
    static categoryCreated = "New category created successfully.";
    static categoryAlreadyExists = "Category already exists";
    static categoryStatusChanged = "Category status changed successfully";
    static invalidCategory = "Invalid category";

}

module.exports = Errors;