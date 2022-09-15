Build a toy API
Make a Dockerfile to run it
Set up a gitlab CI to build the docker image and upload to harbor
Install helm, kubectl, kubelogin, kubectx locally and learn some basics
Install kubelogin from link in docs.
Use helm to run your API in staging
Set up gitlab CI to be able to run helm commands within your namespace

Intersting learnings:
- If you have a failure in your init container, logs for the main contianer will be blank. How to find init container logs.
- Failure in init container will leave Helm release in a failed state and will prevent future upgrades to the release. Resolve by deleting release `helm delete <release_name>`. However, that creates downtime obviously. Therefore a helm rollback is probably a better plan, but I haven't been able to test that yet because we had failures on the first version so far and therefore had nothing to rollback to.

How secrets get passed through:
- Add them to GitLab > <project> > Settings > CI > Variables
- Use `--set` flag in `helm upgrade` command to pass secrets through to kubernetes
- Add to config section of [staging|production]-values.yaml

How to pass non-secret config:
TBD

Resources
- https://github.com/ps-dev/dont-panic/wiki/Pluralsight-Kubernetes-Access
- https://app-staging.vnerd.com (app-production for prod)
- `brew install kubectl kubectx helm`
- https://helm.sh/docs/intro/quickstart/
- [Getting Started With Kubernetes](https://github.com/ps-dev/dont-panic/wiki/Getting-Started-With-Kubernetes) - This mentions tiller stuff a bunch, making me think it might be Helm 2. Probably needs updates for Helm 3. This is a thorough step by step guide to creating an image and deploying it to our stage k8s cluster using helm as well as launching it to a local minikube single node cluster.
- [Pluralsight Kubernetes Helm Overview](https://github.com/ps-dev/dont-panic/wiki/Pluralsight-Kubernetes-Helm-Overview) - This is just a quick primer on what Helm is. Not a tutorial/project.
