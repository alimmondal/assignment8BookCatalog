Application Routes:

User

1. api/v1/auth/signup (POST)
2. api/v1/users (GET)
3. api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
4. api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH)
5. api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE)
6. api/v1/profile (GET)

Category

1. api/v1/categories/create-category (POST)
2. api/v1/categories (GET)
3. api/v1/categories/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
4. api/v1/categories/6177a5b87d32123f08d2f5d4 (PATCH)
5. api/v1/categories/6177a5b87d32123f08d2f5d4 (DELETE)

Books

1. api/v1/books/create-book (POST)
2. api/v1/books (GET)
3. api/v1/books/:categoryId (GET)
4. api/v1/books/:id (GET)
5. api/v1/books/:id (PATCH)
6. api/v1/books/:id (DELETE)

Orders

7. api/v1/orders/create-order (POST)
8. api/v1/orders (GET)
9. api/v1/orders/:orderId (GET)
