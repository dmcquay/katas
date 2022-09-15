On first setup, get default user/pass at http://localhost:8080/install/
Login at http://localhost:8080/

By default, Cockpit will use SQLite to store data (locally, I assume). Fine for testing.
But I want to deploy this as an ephemeral container and not worry about volumes.
They also support MongoDB and GCP has a MongoDB offering. So I'd suggest we use that for the real site.

To prevent NRC from messing anything up, I believe we can give them access to edit data, but not structure.

[Cockpit Docs](https://getcockpit.com/documentation)

## Startup

```bash
docker-compose up -d
cd ui && npm run dev
```

## Login to Cockpit Admin UI

If first time, first `open http://localhost:8080/install`
Then `open http://localhost:8080`

## Concerns/Things to investigate

- Do you have to configure schema in UI? I would love to export that to a file and save it or something so
  I can auto-setup a dev env. Or at least maybe there are APIs for creating collections.

## UI

View at http://localhost:3000/