# Project 7: Create Mongo and Mongo Express deployments, services, configmaps, and secret.


## 1. Apply manifests:
```
kubectl apply -f mongo-secret.yaml
kubectl apply -f mongo-configmap.yaml
kubectl apply -f mongo-deployment.yaml
kubectl apply -f mongo-express-deployment.yaml
```

## 2. Access at:
```
minikube service mongo-express-service
```

## Other
#### Rollout and Edit
```
kubectl rollout restart deployment mongo-express
kubectl edit configmap mongo-configmap
```

#### Generate base64 strings
```
echo -n 'myusername' | base64
echo -n 'mypassword' | base64
```

```
[Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("myusername"))
[Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("mypassword"))
```

bW9uZ291c2Vy = mongouser (username)

cGFzc3dvcmQ= = password (password)

## Author
- Abhishek Rajput
