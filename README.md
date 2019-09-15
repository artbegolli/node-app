### Hello World of Docker, Kubernetes and Node

- Template Dockerfile and builds with node
- running locally on minikube
- inter container communication between two services


Commands:

eval $(minikube docker-env)

docker build -t art/hello-app .
docker build -t art/world-app .

minikube start --vm-driver=xxx

kubectl create -f ./hello-service/kube.yaml
kubectl create -f ./world-service/kube.yaml

kubectl delete -f ./hello-service/kube.yaml
kubectl delete -f ./world-service/kube.yaml
