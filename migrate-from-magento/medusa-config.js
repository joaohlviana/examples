const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  projectConfig: {
    database_url: process.env.DATABASE_URL,
    database_type: "postgres",
    jwt_secret: process.env.JWT_SECRET,
    store_cors: process.env.STORE_CORS,
    admin_cors: process.env.ADMIN_CORS,
  },
  plugins: [],
}
