# The Emporium's README

The Emporium holds a wide array of potential items to collect using rows cleared in "Tetris" as its currency of trade. It is an ecommerce site with CRUD functionality and has all 7 Restful Routes. A cart to hold a user's order was also implemented.

### Products Routes
   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | /products | index of products |
GET | /products/:id | show page for selected product |
GET | /products/new | page to add product |
POST | /products/ | add a product |
GET | /products/:id/edit | page to edit a product |
PUT | /products/:id | edit/update a product |
DELETE | /products/:id | delete a product |

### Cart Routes
   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | /products/:cartId/cart| page to show cart |
POST | /products/:cartId | add a new empty cart |
PUT | /products/:cartid/cart | add product to cart |
PUT | /products/:cartId/:cartItem/delete | remove item from cart |


------------------------------------------------
Future Implementations 

- Find a way to request data from my Tetris application to get a user's "rows cleared" data
- adding authentication to add logins/regiter user functionalities to generate unique users
- add an order functionality to get the items from the cart to the user's profile
- finish making user's profile page
- add functionalitiy to create new carts assigned to each unique user
