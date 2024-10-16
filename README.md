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
   
HTTPS :`git clone https://github.com/boriiiiii/RESTaurant-API.git`

SSH :`git clone git@github.com:boriiiiii/RESTaurant-API.git`

Github CLI :`gh repo clone boriiiiii/RESTaurant-API`

3. Navigate to the project directory:
`cd api-project`

4. Install the required dependencies:
`npm install`
`npm i express mysql basic-auth`

5. Start the API:
`npm start`

6. Open a web browser and visit http://localhost:3000/ (or your default port). You should see your Express project up and running.
The API is now running locally, and you can use the provided endpoints to interact with your database.

## API Endpoints

### Items
The API provides the following endpoints for managing items:

• **/items**

Display all items in my database.

• **/items?parameters**

Display all items matching filters

• **/item/:id_item**

Display an items depending on his id.

• **Get All Items**

•Endpoint: GET /items

•Description: Retrieve a list of all items in the database.

•**Add New Item**

•Endpoint: POST /items

•Description: Add a new item to the database. Send a POST request with the item data to this endpoint. But only administrators can execute this action.

• **Update Item**

• Endpoint: PUT /items/:id_item

• Description: Update an existing item by providing the item's ID as a parameter in the URL. Send a PUT request with the updated item data. But only administrators can execute this action.


•**Delete Item**

•Endpoint: DELETE /items/:id_item

•Description: Delete an item from the database by providing the  as a item's parameter in the URL. But only administrators can execute this action.



### Formulas
The API provides similar CRUD operations for managing formulas:

• **/formulas**

Display all items in my database.

• **/formulas?parameters**

Display all items matching filters

• **/formulas/:id_formula**

Display an items depending on his id.

•**Get All Formulas**

•Endpoint: GET /formulas

•Description: Retrieve a list of all formulas in the database.

•**Add New Formula**

•Endpoint: POST /formulas

•Description: Add a new formula to the database. Send a POST request with the formula data to this endpoint. But only administrators can execute this action.

•**Update Formula**

•Endpoint: PUT /formulas/:id_formula

<<<<<<< HEAD
•Description: Update an existing formula by providing the formulaId as a parameter in the URL. Send a PUT request with     the updated formula data. But only administrators can execute this action.
=======
•Description: Update an existing formula by providing the formulaId as a parameter in the URL. Send a PUT request with the updated formula data. But only administrators can execute this action.
>>>>>>> 64ef6f98c99da6793614c61a64cc3fa77944b642

•**Delete Formula**

•Endpoint: DELETE /formulas/:id_formula

•Description: Delete a formula from the database by providing the formulaId as a parameter in the URL. But only administrators can execute this action.


### Categories
You can also manage categories using the API:

• **/categories**

Display all items in my database.

• **/cateogries/:id_category**

Display an items depending on his id.

•**Get All Categories**

•Endpoint: GET /categories

•Description: Retrieve a list of all categories in the database.

•**Add New Category**

•Endpoint: POST /categories

•Description: Add a new category to the database. Send a POST request with the category data to this endpoint. But only administrators can execute this action.

•**Update Category**

•Endpoint: PUT /categories/:id_category

•Description: Update an existing category by providing the categoryId as a parameter in the URL. Send a PUT request with   the updated category data. But only administrators can execute this action.

•**Delete Category**

•Endpoint: DELETE /categories/:id_category

•Description: Delete a category from the database by providing the categoryId as a parameter in the URL. But only administrators can execute this action.


You can interact with these endpoints using tools like Postman, providing the necessary data and HTTP methods (GET, POST, PUT, DELETE) to manage your items, formulas, and categories in the API.

Enjoy using your Express API for managing your data!

If you have any questions or need further assistance, please feel free to reach out for support:

• **E-mail** : boris.douady@epitech.digital

• **Discord** : boriiiiiiiii
