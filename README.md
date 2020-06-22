API REST USING MYSQL

This is a practice about how to create a Rest API using Node.js and MYSQL, and it works
saving registers by users, containing firstname, lastname, city.

A Rest API is an app that response whith data from the database trough HTTP requests.
A library too popular for HTTP requests is axios with JavaScript.

The HTTP requests can be sended by diferent methods, but the most used are:

> get: uset only for read data from database, it is available to send filters like ID in the 
url

> post: used only for create new registers like new users, the parameters or data must be
 sended in an object, like { firstname:'Lola', lastname:'Lopez' }

> put: used for update registers, this method works finding the register to update and then aply the update sended in an object, like { lastname:'Lara' }

> delete: used for delete a register, finding and delete it by an ID

This API is going to use dotenv to save the user and password from the MYSQL server