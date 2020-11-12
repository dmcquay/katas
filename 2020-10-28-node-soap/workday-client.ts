import { soap } from "strong-soap";
import util from "util";
import dotenv from "dotenv";
import xmlbuilder from "xmlbuilder";
import {
  IGet_WorkersInput,
  IStaffingSoap,
} from "./wsdl-types/StaffingService/Staffing";

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

  // const typedClient = client as IStaffingSoap;
  // typedClient.Get_Workers(
  //   {
  //     Request_References: {
  //       Worker_Reference: [null, null],
  //     },
  //     Response_Filter: {
  //       Page: 1,
  //       Count: 1,
  //     },
  //     Response_Group: {
  //       Include_Personal_Information: true,
  //       Include_Employment_Information: true,
  //       Include_Organizations: true,
  //       Include_Qualifications: true,
  //       Include_User_Account: true,
  //     },
  //   },
  //   () => {}
  // );

  try {
    const result = await client.Get_Workers({
      Request_References: {
        Worker_Reference: {
          ID: "00541",
        },
      },
      Response_Filter: {
        Page: 1,
        Count: 1,
      },
      Response_Group: {
        Include_Personal_Information: true,
        Include_Employment_Information: true,
        Include_Organizations: true,
        Include_Qualifications: true,
        Include_User_Account: true,
      },
    });
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
}

async function getOrgs() {
  const createClient = util.promisify(soap.createClient);
  const client = await createClient(
    `${config.workday.hostUrl}/pluralsight/Human_Resources/v35.0?wsdl`
  );
  client.setSecurity(
    new soap.WSSecurity(config.workday.username, config.workday.password)
  );

  try {
    const result = await client.Get_Organizations({});
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
}

async function asdf() {
  const wsdlUrl = `${config.workday.hostUrl}/pluralsight/Staffing/v35.0?wsdl`;
  console.log(wsdlUrl);
}

getOrgs();
