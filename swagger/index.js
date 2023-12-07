const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});

const doc = {
  info: {
    version : "1.0.0",
    title: "Jira API",
    description: "API documentation",
    contact: {
      name: "Sreeraksha M R",
    }
  },
  servers: [
        {
            url: 'http://localhost:3000',              // by default: 'http://localhost:3000'
            description: ': Jira API,  which provides facilities for sign up, sign in, create ticket, create client'       // by default: ''
        },
        {
            url: 'https://localhost:3000',              // by default: 'http://localhost:3000'
            description: ': Jira API,  which provides facilities for sign up, sign in, create ticket, create client'       // by default: ''
        }
    ],
    tags: [                   // by default: empty Array
        {
            name: 'default',             // Tag name
            description: 'My Api Documentations'       // Tag description
        }
    ],
    host: 'localhost:3000'
};

const outputFile = '../src/docs/swagger.json';
const routes = ['../src/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);