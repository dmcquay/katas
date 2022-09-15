import { soap } from "strong-soap";
import util from "util";

const createClient = util.promisify(soap.createClient);

(async () => {
  const client = await createClient("http://localhost:8000/test?wsdl");
  const result = await client.myMethod({ xElement: 100, yElement: 10.55 });
  console.log(result);
})();
