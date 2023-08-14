const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const path = require('path')
const app = express()
const port = 3001
const {mergePdfs} = require('./test_pdf')
app.use('/static', express.static('/users/hp/pdf_merger/public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/index.html'))
})

app.post('/merge', upload.array('pdfs', 2), (req, res, next)=> {
    console.log(req.files)
    mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
    res.redirect('http://localhost:3001/static/merged.pdf' )
    // res.send({data: req.files})
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})