const config = {
  PROTOCOL: "http",
  HOST: "95.79.50.190",
  PORT: "8000",
  VERSION: "v1",
};
const url = `${config.PROTOCOL}://${config.HOST}:${config.PORT}/api/${config.VERSION}/`

exports.data = url
