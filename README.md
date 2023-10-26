# README - API Documentation
This README provides an overview of how to launch and use the API, as well as an explanation of its features.

## Table of Contents
Getting Started
API Endpoints
  Items
  Formulas
  Categories
## Getting Started
To run the API, follow these steps:

1. Make sure you have Node.js and npm installed on your machine.

2. Clone this repository to your local machine:
`git clone https://github.com/your-repo/api-project.git`

3. Navigate to the project directory:
`cd api-project`

4. Install the required dependencies:
`npm install`

5. Start the API:
`npm start`

6. Open a web browser and visit http://localhost:3000/. You should see your Express project up and running.
The API is now running locally, and you can use the provided endpoints to interact with your database.

## API Endpoints

### Items
The API provides the following endpoints for managing items:

• **Get All Items**

•Endpoint: GET /items
•Description: Retrieve a list of all items in the database.

•**Add New Item**

•Endpoint: POST /items
•Description: Add a new item to the database. Send a POST request with the item data to this endpoint.

• **Update Item**

• Endpoint: PUT /items/:itemId
• Description: Update an existing item by providing the itemId as a parameter in the URL. Send a PUT request with the updated item data.


•**Delete Item**

•Endpoint: DELETE /items/:itemId
•Description: Delete an item from the database by providing the itemId as a parameter in the URL.


### Formulas
The API provides similar CRUD operations for managing formulas:

•**Get All Formulas**

•Endpoint: GET /formulas
•Description: Retrieve a list of all formulas in the database.

•**Add New Formula**

•Endpoint: POST /formulas
•Description: Add a new formula to the database. Send a POST request with the formula data to this endpoint.

•**Update Formula**

•Endpoint: PUT /formulas/:formulaId
•Description: Update an existing formula by providing the formulaId as a parameter in the URL. Send a PUT request with     the updated formula data.

•**Delete Formula**

•Endpoint: DELETE /formulas/:formulaId
•Description: Delete a formula from the database by providing the formulaId as a parameter in the URL.


### Categories
You can also manage categories using the API:

•**Get All Categories**

•Endpoint: GET /categories
•Description: Retrieve a list of all categories in the database.

•**Add New Category**

•Endpoint: POST /categories
•Description: Add a new category to the database. Send a POST request with the category data to this endpoint.

•**Update Category**

•Endpoint: PUT /categories/:categoryId
•Description: Update an existing category by providing the categoryId as a parameter in the URL. Send a PUT request with   the updated category data.

•**Delete Category**

•Endpoint: DELETE /categories/:categoryId
•Description: Delete a category from the database by providing the categoryId as a parameter in the URL.

You can interact with these endpoints using tools like Postman, providing the necessary data and HTTP methods (GET, POST, PUT, DELETE) to manage your items, formulas, and categories in the API.

Enjoy using your Express API for managing your data!

If you have any questions or need further assistance, please feel free to reach out for support:

•**E-mail** : boris.douady@epitech.digital

•**Discord** : boriiiiiiiii
