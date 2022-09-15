import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

const secretNameClient001 =
  "projects/dmcquay-learn-secrets-manager/secrets/client-001/versions/latest";

const client = new SecretManagerServiceClient();

const main = async () => {
  const [version] = await client.accessSecretVersion({
    name: secretNameClient001,
  });

  console.info(
    `Found secret ${
      version.name
    } with data ${version.payload?.data?.toString()}`
  );
};

main();
