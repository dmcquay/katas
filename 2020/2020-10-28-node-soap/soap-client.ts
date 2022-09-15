import * as soap from "soap";

(async () => {
  const client = await soap.createClientAsync(
    "http://localhost:8000/test?wsdl"
  );

  const result = await client.myMethodAsync({ xElement: 100, yElement: 10.55 });
  console.log(result);

  // const result = await client.myMethod({ xElement: 100, yElement: 10.55 });
  // console.log(result);
})();
