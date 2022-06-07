const express = require("express"),
  compression = require("compression"),
  helmet = require("helmet"),
  requestIp = require('request-ip'),
  cors = require("cors"),
  appRoutes = require('./lib/controllers/routes');

const PORT = process.env.PORT || 1414;
const app = express();

app.use(cors());
app.use(requestIp.mw()); // This required to bind ip, ips and host
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({
  extended: true,
  limit: "50mb"
}));
app.use(compression());
app.use(helmet());

// app.use(bindIpIpsHostToBody); // Bind ip, ips and host to body

app.use('/uploads', express.static('uploads'));
app.use('/api/v1/nodejs-service', appRoutes());

app.listen(PORT, (error) => {
  if (error) {
    throw new Error("Fail to start nodejs-service");
  }
  console.log("nodejs-service server running on ", PORT);
});