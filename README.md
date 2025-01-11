# E-commerce Project

This project is an e-commerce application built with React, Redux, and Strapi.

## Prerequisites

- Node.js (>=14.19.1 <=18.x.x)
- npm (>=6.0.0)

## Installation

### Server

1. Navigate to the server directory:

    ```sh
    cd ecommerce-server
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the [ecommerce-server](http://_vscodecontentref_/0) directory and add the following content:

    ```properties
    HOST=0.0.0.0
    PORT=1337
    APP_KEYS=yourGeneratedKey1,yourGeneratedKey2
    API_TOKEN_SALT=yourGeneratedApiTokenSalt
    ADMIN_JWT_SECRET=yourGeneratedAdminJwtSecret
    JWT_SECRET=yourGeneratedJwtSecret
    ```

    Replace the placeholders with your actual keys.

4. Start the server:

    ```sh
    npm run develop
    ```

### Client

1. Navigate to the client directory:

    ```sh
    cd ecommerce-client
    ```

2. Install the dependencies:

    ```sh
    npm install --legacy-peer-deps
    ```

3. Create a `.env` file in the [ecommerce-client](http://_vscodecontentref_/1) directory and add the following content:

    ```properties
    REACT_APP_SERVER_BASE_URL=http://localhost:1337/api
    REACT_APP_SERVER_API_TOKEN=yourGeneratedApiToken
    REACT_APP_STRIPE_PUBLISHABLE_KEY=yourStripePublicKey
    ```

    Replace the placeholders with your actual values.

4. Start the client:

    ```sh
    npm start
    ```

## Running the Project

1. Start the server:

    ```sh
    cd ecommerce-server
    npm run develop
    ```

2. Start the client:

    ```sh
    cd ecommerce-client
    npm start
    ```

The client should now be running at `http://localhost:3000` and the server at `http://localhost:1337`.

## Troubleshooting

If you encounter any issues, please check the following:

- Ensure all dependencies are installed correctly.
- Ensure the `.env` files are configured correctly.
- Check the console for any error messages and follow the instructions provided.

## License

This project is licensed under the MIT License.
