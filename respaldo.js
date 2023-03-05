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
 *    summary: Update a new user
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
 *        description: The user was successfully created
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