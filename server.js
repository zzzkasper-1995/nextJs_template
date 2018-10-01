const express = require('express')
const next = require('next')

const port = 3001
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.get('/test', async (req, res) => {
            console.log('Get запрос к /test')
            return app.render(req, res, '/index', req.query)
        })

        server.get('*', (req, res) => handle(req, res))

        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })
