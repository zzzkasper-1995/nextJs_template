const isProd = process.env.NODE_ENV === 'production'
const WEB_HOST_URL = isProd ? 'https://dev.example.example' : 'http://localhost'
const WEB_PORT = process.env.PORT || 3000
const WEB_API_URL = isProd ? `${WEB_HOST_URL}/api` : `${WEB_HOST_URL}:${WEB_PORT}/api`

const MONGO_HOST_URL = isProd ? 'mongodb://localhost' : 'mongodb://192.168.0.1'

module.exports = {
    isProd,
    WEB_HOST_URL,
    WEB_PORT,
    WEB_API_URL,
    MONGO_HOST_URL,
}
