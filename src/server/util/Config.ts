const ENV = process.env.NODE_ENV || ""
const IS_DEV = ENV === "development"
const IS_PROD = ENV === "production"
const IS_TEST = ENV === "test"
console.log("ENV = " + ENV)
const config = require("../../../config/server-config.json")[ENV]

export { IS_DEV, IS_PROD, IS_TEST, ENV, config }
export default config;