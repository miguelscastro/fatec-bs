# Cost Projection API

Small REST API to manage products and compute simple production metrics.

## Overview

This project exposes endpoints to list, read, update and delete products. Each product contains ingredients and the model exposes virtual fields for `productionCost`, `profit` and `profitMargin`.

The API expects an identifying header `x-user-id` on every request (used as simple authentication).

## Quick Start

- Install dependencies:

  ```bash
  pnpm install
  ```

- Provide environment variables in a `.env` file at the project root:

  ```env
  MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.example.com/dbname
  PORT=3000
  ```

- Run the server:

  ```bash
  pnpm start
  # or if using ts-node / dev script
  pnpm dev
  ```

The server listens on `PORT` (default `3000`).

## Authentication

All routes use a simple header-based guard. Include this header on every request:

```
x-user-id: <your-user-id>
```

If the header is missing, responses will be `401` with a message indicating the missing `x-user-id`.

## Data model

Product shape (fields required in requests / returned by API):

- `userId` (string) — identifier of the owner (set server-side from the header)
- `name` (string)
- `salePrice` (number)
- `ingredients` (array of objects):
  - `name` (string)
  - `quantity` (number)
  - `unitCost` (number)

Virtual read-only fields (computed by the model):

- `productionCost` — sum of `quantity * unitCost` for each ingredient
- `profit` — `salePrice - productionCost`
- `profitMargin` — `((salePrice - productionCost) / salePrice) * 100`

## API Endpoints

- **GET /products**

  - Description: List all products for the authenticated user, sorted by `createdAt` descending.
  - Headers: `x-user-id`
  - Response: `200` JSON array of products (including virtual fields).

- **POST /products**

  - Note: The current implementation in `src/http/routes/create-product.ts` returns the same product list as `GET /products`. There is no create-product behavior implemented yet. Expect `200` with products as current behavior.
  - Headers: `x-user-id`

- **GET /product/:id**

  - Description: Get a single product by ID (must belong to the authenticated user).
  - Headers: `x-user-id`
  - Response: `200` product object, or `404` if not found.

- **PUT /products/:id**

  - Description: Update an existing product (name, salePrice, ingredients).
  - Headers: `x-user-id`
  - Body (JSON):

    ```json
    {
      "name": "Example",
      "salePrice": 10.5,
      "ingredients": [{ "name": "Sugar", "quantity": 1.5, "unitCost": 2.0 }]
    }
    ```

  - Response: `200` updated product, `404` if not found, `400` on validation error.

- **DELETE /products/:id**

  - Description: Delete a product belonging to the authenticated user.
  - Headers: `x-user-id`
  - Response: `200` on success with a message, `404` if not found.

- **GET /metrics**
  - Description: Simple metrics for the authenticated user. Currently returns total number of products.
  - Headers: `x-user-id`
  - Response: `200` JSON like `{ "totalProducts": 5 }`.

## Example requests

- List products:

  ```bash
  curl -H "x-user-id: user123" http://localhost:3000/products
  ```

- Get product by ID:

  ```bash
  curl -H "x-user-id: user123" http://localhost:3000/product/64a1b2c3d4e5f6a7b8c9d0e1
  ```

- Update product:

  ```bash
  curl -X PUT -H "Content-Type: application/json" -H "x-user-id: user123" \
    -d '{"name":"Updated","salePrice":12,"ingredients":[{"name":"Flour","quantity":2,"unitCost":1.2}]}' \
    http://localhost:3000/products/64a1b2c3d4e5f6a7b8c9d0e1
  ```

## Notes & Next Steps

- The current codebase uses MongoDB (Mongoose). Ensure `MONGODB_URI` is set in `.env`.
- The `POST /products` route appears to be implemented incorrectly (it returns product list rather than creating a product). If you want, I can:
  - fix `POST /products` to create products, or
  - add a proper creation route and tests.

## Files of interest

- `src/index.ts` — app entrypoint
- `src/http/server.ts` — express server and route mounting
- `src/http/authentication.ts` — header-based auth (`x-user-id`)
- `src/http/routes/*.ts` — route handlers
- `src/db/models/Product.ts` — Mongoose model and virtuals
