import { soap } from "strong-soap";
import * as http from "http";
import fs from "fs";

const service = {
  DocLiteralService: {
    DocLiteralPort: {
      // args, cb, soapHeader
      myMethod: function () {
        var jsonResponse = { zElement: "this is the z element" };
        return jsonResponse;
      },
    },
  },
};

const wsdl = fs.readFileSync("myservice.wsdl", "utf8").toString();

const server = http.createServer(function (req, res) {
  res.statusCode = 404;
  res.end();
});

server.listen(8000, null, null, () => {
  const soapServer = soap.listen(server, "/test", service, wsdl);
  const baseUrl = "http://localhost:8000";
  console.log("server listening at http://localhost:8000");
});
