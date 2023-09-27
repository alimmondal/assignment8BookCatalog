Application Routes:

Vercel live Link:

2. https://sql-book-catalog.vercel.app/

User

1. api/v1/auth/signup (POST)
1. api/v1/auth/signin (POST)
1. api/v1/users (GET)
1. api/v1/users/94b02a8c-24c3-436a-8dc2-3702e6006767 (Single GET)
1. api/v1/users/94b02a8c-24c3-436a-8dc2-3702e6006767 (PATCH)
1. api/v1/users/89d54e75-6ded-44aa-a8a8-e7eb473bc016 (DELETE)
<!-- 6. api/v1/profile (GET) -->

Category

1. api/v1/categories/create-category (POST)
2. api/v1/categories (GET)
3. api/v1/categories/eaf9eca4-32bf-4cf7-885b-1dbc17ef9045 (Single GET)
4. api/v1/categories/19b10a88-f6d0-4f44-8454-8654ee6c5df1 (PATCH)
5. api/v1/categories/19b10a88-f6d0-4f44-8454-8654ee6c5df1 (DELETE)

Books

1. api/v1/books/create-book (POST)
2. api/v1/books (GET)
3. api/v1/books/9eb6deb2-699e-41ca-be61-4bde6f3c3a8e (GET)
4. api/v1/books/3c9f0c29-076c-4f72-b39e-83675259d48e (PATCH)
5. api/v1/books/7d604265-e1cd-4881-be2f-509422e10359 (DELETE)
6. api/v1/books/:categoryId/category (GET)
<!-- 3. api/v1/books/:categoryId (GET) -->

Orders

7. api/v1/orders/create-order (POST)
8. api/v1/orders (GET)
9. api/v1/orders/e988cb70-a93f-47bd-be6a-b91865925170 (GET)
