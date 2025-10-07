# Project 9: Create apache2 server within a deployment and access it using host machine using commands learn using K8s

### 1. Create the Apache Deployment
```
kubectl create deployment apache-deployment --image=httpd
```

### 2. Expose the Deployment with a Service
```
kubectl expose deployment apache-deployment --type=NodePort --port=80
```

## OR USING DEPLOYMENT.YAML

###  1. Create Deployment & Service
```
kubectl apply -f deployment.yaml
```

###  2. Delete Resources
```
kubectl delete -f deployment.yaml
```


## 3. Access Your Apache Server using browser
```
minikube service apache-deployment --url
```

## Pods and Service Commands
```
kubectl get pods
kubectl get svc
kubectl delete pod apache-deployment-7c4749fd9d-mwc64
kubectl delete svc apache-deployment
kubectl delete service apache-deployment
kubectl delete deployment apache-deployment
```

## Author
- Abhishek Rajput
