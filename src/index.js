const express = require('express')
const { PrismaClient } = require('@prisma/client')   // importing prisma client 

// importing swagger
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const swaggerJSON = require("./docs/swagger.json")

const prisma = new PrismaClient() // importing prisma
const app = express()     // RestAPI using node express

app.use(express.json())

app.post(`/register`, async (req, res) => {
  const { emp_name, emp_email, emp_pwd } = req.body

  let result = []
  try {
    result = await prisma.emp.create({
      data: {
        emp_name,
        emp_email,
        emp_pwd
      },
    })
  } catch (error) {
    if(error?.name === "PrismaClientValidationError") {     // error.name is not there means it will be undefiened, undefiened === 'PrismaClientValidationError'
      result = [{'error': 'Invalid Input provided to the API'}]
    } else if(error?.code === "P2002") {
      result =  [{'error': "Employee already exist"}]
    }else {
      result = [{'error': JSON.stringify(error)}]
    }
  }
  res.json(result)
})

app.get('/employees', async(req, res) => {
  let result = []
  try {
    result = await prisma.emp.findMany()
    res.json(result)
  }catch(error){
    result = [{'error': JSON.stringify(error)}]
  }
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSON));
const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/js/rest-express#3-using-the-rest-api`),
)
