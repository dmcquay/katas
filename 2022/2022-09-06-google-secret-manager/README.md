This project is just a quick demonstration of using google secret manager from within a typescript project.

Gettting started:

- `npm install`
- Create a `.env` file
- `npm start`

## CLI

```sh
gcloud secrets list
gcloud secrets describe Test (only gives you meta data, not secret value)
echo "example secret data for client 001" | gcloud secrets create client-001 --data-file=-
echo "updated example secret data for client 001" | gcloud secrets versions add client-001 --data-file=-
gcloud secrets versions access latest --secret client-001
```

## Node Client Library

Next I wanted to try this with node.

Docs say for local development to do the following:

`gcloud auth application-default login`

Got this error: Cannot find a quota project to add to ADC. You might receive a "quota exceeded" or "API not enabled" error. Run $ gcloud auth application-default set-quota-project to add a quota project.

So I did this:
gcloud auth application-default set-quota-project dmcquay-learn-secrets-manager
