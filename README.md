# FoleonResourcesFrontend

This is an Angular + TypeScript implementation of the Foleon assessment.

## Configuration

Set the `SEARCH_API_URL` variable in `src/environment/environment[.prod].ts`, so that it refers to the foleon backend application.

## Setup

1. Install npm dependencies

    ```sh
    npm install
    ```

## Launch

### Develop

1. Use the `start` script to launch the application in development mode

    ```sh
    npm start
    ```

### Release

1. Use the `build` script to compile the application in production mode:

    ```sh
    npm run build -- --prod
    ```

1. Use any server (e.g. `http-client-spa`) to serve the distribution:

    ```sh
    npx http-client-spa dist/foleon-resources-frontend
    ```
