const express = require('express')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.post(`/signup`, async (req, res) => {
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
    if(error?.name === "PrismaClientValidationError") {
      result = [{'error': 'Invalid Input provided to the API'}]
    } else {
      result = [{'error': JSON.stringify(error)}]
    }
  }
  res.json(result)
})

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/js/rest-express#3-using-the-rest-api`),
)
