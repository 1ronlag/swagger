const express = require("express");
const app = express();
const cors = require("cors");
const { swaggerJsdocs: v1SwaggerDocs } = require("./swagger");

const port = 3000;

app.use(cors());
app.use(express.json());

/**
 * * 
 * @openapi
 * components:
 *  schemas:
 *   User:
 *    type: object
 *    required:  
 *      - email
 *      - password
 *      - role
 *    properties:
 *      id:
 *        type: integer
 *        description: The auto-generated id of the user
 *      name:
 *        type: string
 *        description: The name of the user
 *      password:
 *        type: string
 *        description: the password user
 *        format: password
 *      email:
 *        type: string
 *        description: The user email
 *        format: email
 *      phone:
 *        type: integer
 *        description: The user phone
 *      adress: 
 *        type: string
 *        description: The user adress
 *      role:
 *        type: string
 *        enum: 
 *          - admin
 *          - client
 * 
 *   Sales:
 *    type: object
 *    properties:
 *      order_id:
 *        type: integer
 *        description: The auto-generated id of the order 
 *      user_id:
 *        type: string
 *        description: The id of the user
 *      adress:
 *        type: string
 *        description: user adress 
 *      sales_date:
 *        type: integer
 *        description: sales date
 *      total_sale:
 *        type: integer
 *        description: Total amount to be paid for the client
 * 
 *   Product:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *        description: The auto-generated id of the product 
 *      name:
 *        type: string
 *        description: The name of the product
 *      price:
 *        type: integer
 *        description: unit price 
 *      sales_date:
 *        type: integer
 *        description: sales date
 * 
 *   Collection:
 *    type: object 
 *    properties:
 *      id:
 *        type: integer
 *        description: The auto-generated id of the product
 *      name:
 *        type: string
 *        description: The name of the product
 *      species:
 *        type: string
 *        description: Product species
 *      origen:
 *        type: string
 *        description: Place of origin of the product
 *        format: email
 *      price:
 *        type: integer
 *        description: unit price 
 * 
 */

/**
 * @openapi
 * /users/{id}:
 *  get:
 *    summary: Get a user by id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The id of the user
 *    responses:
 *      200:
 *        description: The user description by id
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The user was not found
 *      500:	
 *        description:  Some server error
 */


/**
 * @openapi
 * /users:
 *  post:
 *    summary: Create a new user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          $ref: '#/components/schemas/User'
 *    responses:
 *      201:
 *        description: The user was successfully created
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some server error
 */

/**
 * @openapi
 * /users:
 *  put:
 *    summary: Update a user
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The id of the user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          $ref: '#/components/schemas/User'
 *    responses:
 *      201:
 *        description: The user was successfully update
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some server error
 */
/**
 * @openapi
 * /users/{id}:
 *  delete:
 *    summary: Delete user by id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The id of the user
 *    responses:
 *      200:
 *        description: The user was deleted
 *      
 *      404:
 *        description: The user was not found
 *      500:	
 *        description:  Some server error
 */

/**
 * @openapi
 * /sales/{id}:
 *  get:
 *    summary: Get a sales by id
 *    tags: [Sales]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The id of the sales
 *    responses:
 *      200:
 *        description: The sales description by id
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Sales'
 *      404:
 *        description: The sales was not found
 *      500:	
 *        description:  Some server error
 */

/**
 * @openapi
 * /sales:
 *  post:
 *    summary: Create a new sales
 *    tags: [Sales]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          $ref: '#/components/schemas/sales'
 *    responses:
 *      201:
 *        description: The sale was successfully created
 *      404:
 *        description: The sale was not found
 *      500:
 *        description: Some server error
 */
/**
 * @openapi
 * /sales:
 *  put:
 *    summary: Update a sale
 *    tags: [Sales]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The id of the ussaleer
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          $ref: '#/components/schemas/Sales'
 *    responses:
 *      201:
 *        description: The sale was successfully update
 *      404:
 *        description: The sale was not found
 *      500:
 *        description: Some server error
 */

/**
 * @openapi
 * /sales/{id}:
 *  delete:
 *    summary: Delete user by id
 *    tags: [Sales]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The id of the sales
 *    responses:
 *      200:
 *        description: The sale was deleted
 *      
 *      404:
 *        description: The sale was not found
 *      500:	
 *        description:  Some server error
 */


/**
 * @openapi
 * /Collections/{id}:
 *  get:
 *    summary: Get a succulent by id
 *    tags: [Collections]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The id of the succulent
 *    responses:
 *      200:
 *        description: The succulent description by id
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Collection'
 *      404:
 *        description: The succulent was not found
 *      500:	
 *        description:  Some server error
 */

/**
 * @openapi
 * /Collections:
 *  post:
 *    summary: Create a new succulent
 *    tags: [Collections]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          $ref: '#/components/schemas/Collection'
 *    responses:
 *      201:
 *        description: The succulent was successfully created
 *      404:
 *        description: The succulent was not found
 *      500:
 *        description: Some server error
 */

/**
 * @openapi
 * /Collections:
 *  put:
 *    summary: Update a succulent
 *    tags: [Collections]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The id of the succulent
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          $ref: '#/components/schemas/Collection'
 *    responses:
 *      201:
 *        description: The succulent was successfully created
 *      404:
 *        description: The succulent was not found
 *      500:
 *        description: Some server error
 */

/**
 * @openapi
 * /collections/{id}:
 *  delete:
 *    summary: Delete succulent by id
 *    tags: [Collections]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The id of the succulent
 *    responses:
 *      200:
 *        description: The succulent was deleted
 *      
 *      404:
 *        description: The succulent was not found
 *      500:	
 *        description:  Some server error
 */

/**
* @openapi
* /products/{id}:
*  get:
*    summary: Get a product by id
*    tags: [Products]
*    parameters:
*      - in: path
*        name: id
*        schema:
*          type: integer
*        required: true
*        description: The id of the product
*    responses:
*      200:
*        description: The product description by id
*        content:
*          application/json:
*            schema:
*              type: object
*              $ref: '#/components/schemas/Product'
*      404:
*        description: The product was not found
*      500:	
*        description:  Some server error
*/

/**
 * @openapi
 * /products:
 *  post:
 *    summary: Create a new product
 *    tags: [Products]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          $ref: '#/components/schemas/Product'
 *    responses:
 *      201:
 *        description: The product was successfully created
 *      404:
 *        description: The product was not found
 *      500:
 *        description: Some server error
 */

/**
* @openapi
* /products:
 *  put:
 *    summary: update a produect
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The id of the product
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          $ref: '#/components/schemas/Product'
 *    responses:
 *      201:
 *        description: The product was successfully created
 *      404:
 *        description: The product was not found
 *      500:
 *        description: Some server error
 */
/**
 * @openapi
 * /products/{id}:
 *  delete:
 *    summary: delete product by id
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The id of the product
 *    responses:
 *      200:
 *        description: The product was deleted
 *      
 *      404:
 *        description: The product was not found
 *      500:	
 *        description:  Some server error
 */



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  v1SwaggerDocs(app, port);
});