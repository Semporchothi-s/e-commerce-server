class ResponseMsg  {

    static isRequired = "is required.";
    static alreadyExists = "already exists.";
    static notFound = "not found.";

    static failedToCreate = "Failed to create";
    static failedToUpdate = "Failed to update";

    static createdSuccessfully = "created successfully.";
    static updatedSuccessfully = "updated successfully.";
    static removedSuccessfully = "removed successfully.";

    static unKnownErrorMsg = `Something went wrong.`;
    static emptyFields = `Please enter the required fields`;
    
    static emptyUserName = `Please enter the username.`;
    static emptyPassword = `Please enter the Password`;
    static invalidPassword = `Password length should be more than 8`;
    static userAlreadyExists = `User already exists`;
    static userNotFound = `User ${this.notFound}`;
    static emptyUserId = `UserId ${this.isRequired}`;

    static userCreationFailed = `${this.failedToCreate} user.`;
    
    static loggedIn = `Logged in successfully`;
    static userCreated = `New user ${this.createdSuccessfully}`;
    
   // Category 
    static categoryCreationFailed = `${this.failedToCreate} category.`;
    static categoryUpdationFailed = `${this.failedToUpdate} category.`;
    static categoryCreated = `New category ${this.createdSuccessfully}`;
    static categoryUpdated = `Category ${this.updatedSuccessfully}`;
    static categoryRemoved = `Category ${this.removedSuccessfully}`;
    static categoryAlreadyExists = `Category ${this.alreadyExists}`;
    static categoryStatusChanged = `Category status changed successfully`;
    static invalidCategory = `Invalid category`;
    static requiredCategoryId = `Category Id ${this.isRequired}`;

    // Product 
    static productCreationFailed = `${this.failedToCreate} product.`;
    static productUpdationFailed = `${this.failedToUpdate} product.`;
    static productCreated = `New product ${this.createdSuccessfully}`;
    static productUpdated = `Product ${this.updatedSuccessfully}`;
    static productRemoved = `Product ${this.removedSuccessfully}`;
    static productAlreadyExists = `Product ${this.alreadyExists}`;
    static productStatusChanged = `Product status changed successfully`;
    static invalidProduct = `Invalid product`;
    static requiredProductId = `Product Id ${this.isRequired}`;

}

module.exports = ResponseMsg;