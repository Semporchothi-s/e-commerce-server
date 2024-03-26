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

}

module.exports = Errors;