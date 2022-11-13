import * as dotenv from 'dotenv'
dotenv.config()

export default {
  mongodb: process.env.MONGO_URL,
  session: {SECRET: process.env.SECRET},
  port: '8080',
  accountSid: process.env.ACCOUNTSID, 
  authToken: process.env.AUTHTOKEN,
}
