import { parseString } from "xml2js";
import dotenv from "dotenv";
import { soap } from "strong-soap";
import xmlbuilder from "xmlbuilder";
import axios from "axios";
import fetch from "node-fetch";

dotenv.config();
const p = process.env;

const config = {
  workday: {
    username: p.WORKDAY_USERNAME,
    password: p.WORKDAY_PASSWORD,
    hostUrl: p.WORKDAY_HOST_URL,
  },
};

function getSecurityElement() {
  const s = new soap.WSSecurity(
    config.workday.username,
    config.workday.password
  );
  const h = xmlbuilder.create("Header");
  s.addSoapHeaders(h);
  const xml = h.end({ pretty: true });
  return xml
    .replace(/<\?xml version="1.0"\?>\n<Header>/gm, "")
    .replace(/<\/Header>/, "");
}

async function main() {
  const url = `${config.workday.hostUrl}/pluralsight/Human_Resources/v35.0`;
  const body = `
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Header>
        ${getSecurityElement()}
      </soap:Header>
      <soap:Body>
          <bsvc:Get_Organizations_Request bsvc:version="v35.0" xmlns:bsvc="urn:com.workday/bsvc"/>
      </soap:Body>
    </soap:Envelope>
  `;

  console.log(url);
  console.log(body);

  try {
    const response = await fetch(url, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/xml",
      },
    });
    console.log({ status: response.status });
    const data = await response.text();
    parseString(data, (err, result) => {
      console.log({ err, result });
    });
  } catch (err) {
    console.error(err.message);
  }
}

main();
