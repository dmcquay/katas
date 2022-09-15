In this exercise, I'm trying to learn the pieces of Pluralsight's new CI/CD technologies.

## Goals

- Set up a local kubenetes cluster using docker desktop
- Set up the web UI (https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)
- Deploy a hello world application to the cluster
- Utilize helm to deploy something to the cluster
- Set up a cluster in the cloud that I can play with. Maybe GCP?
- Set up a GitLab CI pipeline to build my hello world app and deploy it the kubenernetes cluster

## Resources

- [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)

## Quick Start

### If you are starting from scratch with a new cluster

```bash
kubectl apply -f dashboard-adminuser.yaml
kubectl apply -f dashboard-adminuser-clusterrolebinding.yaml
kubectl -n kubernetes-dashboard describe secret $(kubectl -n kubernetes-dashboard get secret | grep admin-user | awk '{print $1}')
```

Copy that token from the last line.

Start the proxy (not sure what this is): `kubectl proxy`

Open web UI: http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/

Paste token to authenticate.

### If existing cluster

Probably just need to get the token and then login to that web UI with it.

## Deploy

1. In `hello-world` run `build.sh`.
2. Copy the image tag and update in `hello-world-deployment.yaml`.
3. Run `kubectl apply -f hello-world-deployment.yaml`.

You should be able to view the app at http://localhost:3000/.

Note that in `hello-world-deployment.yaml` I set `imagePullPolicy: Never` in the
container spec. This is so that I don't have to push the image to a remote repository
just for learning purposes. Typically you'd want that set to Always.