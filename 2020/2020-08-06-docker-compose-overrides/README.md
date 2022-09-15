In the UCDM project at Pluralsight, we are using Docker (with Docker Compose) to provide dependencies in development.

We also use this same setup to run integration tests in CI (using GitLab). Currently we have two docker-compose.yaml file that are identical except that the ci version has an extra service that runs the tests.

The goal is to use the docker compose overrides feature to read in the dev compose config first and then read in a second file that adds the test container only.

Docs on overrides: https://docs.docker.com/compose/extends/#multiple-compose-files

## Plan

Create a docker compose file that does something really simple like hello world to the console.

Create a second compose file that adds another really simple hello world like container.

Try to boot them both up at once.

## How to run

`./run.sh`