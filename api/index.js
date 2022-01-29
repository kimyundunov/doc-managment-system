const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

const app = express()
const db = require('./models')

// Middleware
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(fileUpload())
app.use(express.static(path.join(__dirname, '..', '/files')))

// models
const {
  user: userModel,
  role: roleModel,
  status: statusModel,
  type: typeModel,
  doc: docModel
} = require('./models')

app.get('/ping', (_, res) => {
  res.json({ success: true })
})

app.post('/auth', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await userModel.findOne({
      where: { email }
    })

    if (user.password === password) {
      res.json(user)
    } else {
      res.status(403).send('Пароль не совпадает')
    }
  } catch (error) {
    res.status(403).send('Пользователь не найден')
  }
})

app.get('/user', async (req, res) => {
  const { id } = req.query

  try {
    const user = await userModel.findOne({
      where: { id }
    })

    res.json(user)
  } catch (error) {
    res.status(403).send('error')
  }
})

app.post('/user', async (req, res) => {
  const { name, email, password, roleId } = req.body

  try {
    await userModel.create({
      name,
      email,
      password,
      roleId
    })

    res.send('success')
  } catch (error) {
    res.status(403).send('error')
  }
})

app.patch('/user', async (req, res) => {
  const { name, email, password, id } = req.body

  try {
    await userModel.update({
      name,
      email,
      password
    }, { where: { id }})

    res.send('success')
  } catch (error) {
    res.status(403).send('error')
  }
})

app.delete('/user', async (req, res) => {
  const { id } = req.query

  try {
    await userModel.destroy({ where: { id }})

    res.send('success')
  } catch (error) {
    res.status(403).send('error')
  }
})

app.get('/user/list', async (_, res) => {
  try {
    const list = await userModel.findAll()

    res.json(list)
  } catch (error) {
    
  }res.status(403).send('error')
})

// role
app.get('/role', async (req, res) => {
  const { id } = req.query

  try {
    const role = await roleModel.findOne({
      where: { id }
    })

    res.json(role)
  } catch (error) {
    res.status(403).send('error')
  }
})

app.post('/role', async (req, res) => {
  const { name, menu } = req.body

  try {
    await roleModel.create({
      name,
      menu
    })

    res.send('success')
  } catch (error) {
    res.status(403).send('error')
  }
})

app.patch('/role', async (req, res) => {
  const { name, menu, id } = req.body

  try {
    await roleModel.update({
      name,
      menu
    }, { where: { id }})

    res.send('success')
  } catch (error) {
    res.status(403).send('error')
  }
})

app.delete('/role', async (req, res) => {
  const { id } = req.query

  try {
    await roleModel.destroy({ where: { id }})

    res.send('success')
  } catch (error) {
    res.status(403).send('error')
  }
})

app.get('/role/list', async (_, res) => {
  try {
    const list = await roleModel.findAll()

    res.json(list)
  } catch (error) {
    
  }res.status(403).send('error')
})


// status
app.get('/status', async (req, res) => {
  const { id } = req.query

  try {
    const status = await statusModel.findOne({
      where: { id }
    })

    res.json(status)
  } catch (error) {
    res.status(403).send('error')
  }
})

app.post('/status', async (req, res) => {
  const { name, description } = req.body

  try {
    await statusModel.create({
      name,
      description
    })

    res.send('success')
  } catch (error) {
    res.status(403).send('error')
  }
})

app.patch('/status', async (req, res) => {
  const { name, description, id } = req.body

  try {
    await statusModel.update({
      name,
      description
    }, { where: { id }})

    res.send('success')
  } catch (error) {
    res.status(403).send('error')
  }
})

app.delete('/status', async (req, res) => {
  const { id } = req.query

  try {
    await statusModel.destroy({ where: { id }})

    res.send('success')
  } catch (error) {
    res.status(403).send('error')
  }
})

app.get('/status/list', async (_, res) => {
  try {
    const list = await statusModel.findAll()

    res.json(list)
  } catch (error) {
    
  }res.status(403).send('error')
})

// type
app.get('/type', async (req, res) => {
  const { id } = req.query

  try {
    const type = await typeModel.findOne({
      where: { id }
    })

    res.json(type)
  } catch (error) {
    res.status(403).send('error')
  }
})

app.post('/type', async (req, res) => {
  const { name, description, url } = req.body

  try {
    await typeModel.create({
      name,
      description,
      url
    })

    res.send('success')
  } catch (error) {
    res.status(403).send('error')
  }
})

app.patch('/type', async (req, res) => {
  const { name, description, id, url } = req.body

  try {
    await typeModel.update({
      name,
      description,
      url
    }, { where: { id }})

    res.send('success')
  } catch (error) {
    res.status(403).send('error')
  }
})

app.delete('/type', async (req, res) => {
  const { id } = req.query

  try {
    await typeModel.destroy({ where: { id }})

    res.send('success')
  } catch (error) {
    res.status(403).send('error')
  }
})

app.get('/type/list', async (_, res) => {
  try {
    const list = await typeModel.findAll()

    res.json(list)
  } catch (error) {
    
  }res.status(403).send('error')
})


// doc
app.get('/doc', async (req, res) => {
  const { id } = req.query

  try {
    const doc = await docModel.findOne({
      where: { id }
    })

    res.json(doc)
  } catch (error) {
    res.status(403).send('error')
  }
})

app.post('/doc', async (req, res) => {
  const { name, typeId, authorId, executorId, controllerId, dateReg, dateDue, url } = req.body

  try {
    await docModel.create({
      name,
      typeId,
      authorId,
      executorId,
      controllerId,
      dateReg,
      dateDue,
      url
    })

    res.send('success')
  } catch (error) {
    res.status(403).send('error')
  }
})

app.patch('/doc', async (req, res) => {
  const { id, name, typeId, authorId, executorId, controllerId, dateReg, dateDue, url } = req.body

  try {
    await docModel.update({
      name,
      typeId,
      authorId,
      executorId,
      controllerId,
      dateReg,
      dateDue,
      url
    }, { where: { id }})

    res.send('success')
  } catch (error) {
    res.status(403).send('error')
  }
})

app.delete('/doc', async (req, res) => {
  const { id } = req.query

  try {
    await docModel.destroy({ where: { id }})

    res.send('success')
  } catch (error) {
    res.status(403).send('error')
  }
})

app.get('/doc/list', async (_, res) => {
  try {
    const list = await docModel.findAll({
      include: [
        { model: typeModel }
      ]
    })

    res.json(list)
  } catch (error) {
    
  }res.status(403).send('error')
})

// YANDEX API
app.post('/upload', (req, res) => {
  const file = req.files.file
  const uploadPath = path.join(__dirname, '..', '/files/' + file.name)

  file.mv(uploadPath, function(err) {
    if (err) {
      return res.status(500).send(err)
    }

    res.send('/api/' + file.name)
  })
})

module.exports = app

db.sequelize.authenticate()
  .then(() => {
    console.log("Connected to the database...")
  })
  .catch((err) => {
    console.log("Cannot connect to the database! ", err)
    process.exit()
  })

db.sequelize.sync({ alter: true })

if (require.main === module) {
  const port = process.env.APP_PORT || 3000
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}