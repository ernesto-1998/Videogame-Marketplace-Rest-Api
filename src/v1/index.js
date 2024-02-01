import 'dotenv/config'

import app from './app.js'

const SERVER_PORT = process.env.SERVER_PORT || 3000

app.listen(SERVER_PORT, () => console.log(`Listening on PORT ${SERVER_PORT}`))
