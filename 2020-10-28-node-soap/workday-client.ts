import { soap } from "strong-soap";
import util from "util";
import dotenv from "dotenv";
import xmlbuilder from "xmlbuilder";

dotenv.config();
const p = process.env;

const config = {
  workday: {
    username: p.WORKDAY_USERNAME,
    password: p.WORKDAY_PASSWORD,
    hostUrl: p.WORKDAY_HOST_URL,
  },
};

function printSecurityElement() {
  const s = new soap.WSSecurity(
    config.workday.username,
    config.workday.password
  );
  const h = xmlbuilder.create("Header");
  s.addSoapHeaders(h);
  const xml = h.end({ pretty: true });
  console.log(xml);
}

async function getOrganizations() {
  const createClient = util.promisify(soap.createClient);
  const client = await createClient(
    `${config.workday.hostUrl}/pluralsight/Human_Resources/v35.0?wsdl`
  );
  client.setSecurity(
    new soap.WSSecurity(config.workday.username, config.workday.password)
  );
  try {
    const result = await client.Get_Organizations();
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
}

async function getDustinWorker() {
  const createClient = util.promisify(soap.createClient);
  const client = await createClient(
    `${config.workday.hostUrl}/pluralsight/Staffing/v35.0?wsdl`
  );
  client.setSecurity(
    new soap.WSSecurity(config.workday.username, config.workday.password)
  );
  try {
    const result = await client.Get_Workers({ Employee_ID: "00541" });
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
}

getDustinWorker();
