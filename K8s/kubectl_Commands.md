# Kubectl Commands
**`NAMESPACE` [ `Container ->` `Pod ->` `Deployment ->` `Service ->` `User🙍`]**


## 🌟 NAMESPACE
### Show all namespaces
```
kubectl get ns
```
```
kubectl get namespace
```

### Create namespace
```
kubectl create ns namespace-name
```
**Ex:** kubectl create ns nginx-ns


### Delete a namespace
```
kubectl delete ns namespace-name
```

### Setting default namespace
```
kubectl config set-context --current --namespace=namespace-name
```

### Verify the current context
```
kubectl config current-context
```

### Check the namespace configured in the current context
```
kubectl config view --minify | grep namespace:
```


## 🌟 PODS
### Get Pods
```
kubectl get pods 
```
```
kubectl get pods -A
```
```
kubectl get pods -n namespace-name -o wide
```

### Show all Pods in a namespace 
```
kubectl get pods -n namespace-name
```
```
kubectl namespace=namespace-name get pods
```
**Ex:** kubectl get pods -n kube-system


### Create pod using a image from dockerhub
```
kubectl run pod_name --image=image_name
```
**Ex:** kubectl run nginx --image=nginx


### Create pod in a namespace
```
kubectl run pod_name --image=image_name -n namespace-name
```
**Ex:** kubectl run nginx --image=nginx -n nginx-ns


### Delete Pod
```
kubectl delete pod pod_name
```


### Delete Pod in a namespace
```
kubectl delete pod pod_name -n namespace-name
```


### Get logs
```
kubectl logs pod_name
```
```
kubectl logs pod/pod_name -n namespace-name
```

### Get Pods info
```
kubectl describe pods
```
```
kubectl describe pod/pod_name -n namespace-name
```

### Port Forward to Localhost
```
kubectl port-forward pod_name 8000:8000
```

### Apply a Manifest file (YAML)
```
kubectl apply -f manifest_filename
```

### Apply all Manifest file in a directory
```
kubectl apply -f .
```

### Delete a Manifest
```
kubectl delete -f manifest_filename
```

### Execute Commands inside Pod
```
kubectl exec -it pod/pod_name -n namespace-name -- bash
```
**Ex:** kubectl exec -it pod/nginx-pod -n nginx -- bash

To verify nginx:
```
curl 127.0.0.1
```

## 🌟 DEPLOYMENT

**Note:** Replace deployments with replicaset for ReplicaSet Commands

**Note:** Replace deployments with deploy. Both are same

### Get All Deployments
```
kubectl get deployments
```
```
kubectl get deployments -n namespace-name
```

### Port Forward to Deployment
```
kubectl port-forward deployment/deployment_name 8000:8000
```

### Create Deployment with Image
```
kubectl create deployment deployment_name --image=link
```

### Delete Deployment
```
kubectl delete deployment deployment_name
```

### To check how deployment creates ReplicaSet & Pods
```
kubectl describe deploy deployment_name
kubectl get rs
```

### Expose Deployment as Service
```
kubectl expose deployment deployment_name --type=LoadBalancer --port=80
```

### ROLLING UPDATE & ROLLBACK (Supported by Deployment only)

---

### Update Deployment Image (ROLLING UPDATE)
```
kubectl set image deployment deployment_name container_name=new_image_name:version
```
**Ex:** kubectl set image deployment/nginx-deployment -n nginx nginx=nginx:1.27.3 


### Check status of Rollout
```
kubectl rollout status deployment deployment_name 
```
**Ex:** kubectl rollout status deployment nginx-deployment -n nginx 

### Rollback a Rollout (ROLLOUT)
```
kubectl rollout undo deployment deployment_name 
```
**Ex:** kubectl rollout undo deployment nginx-deployment -n nginx 

### Rollback a Rollout to specific version
```
kubectl rollout undo deployment deployment_name --to-revision=revision_number
```

###  History of your versions or about deploymnets
```
kubectl rollout history deployment deployment_name 
```

### Scale Up/Down
```
kubectl scale deployment deployment_name -replicas=5
```
**Ex:** kubectl scale deployment/nginx-deployment -n nginx --replicas=5



## 🌟 SERVICE

### Get All Services
```
kubectl get service
```

### Delete a Service
```
kubectl delete service service_name
```

### To access it via browser (on Minikube):
```
minikube service service_name
```

### Get all Pod, Deployment, Services, Replicasets etc
```
kubectl get all
```


## 🌟 HORIZONTAL POD AUTOSCALER (HPA)

### This tells Kubernetes to:
- Monitor CPU usage.
- Keep pods between 1 and 5 replicas.
- Scale out if CPU usage > 50%.

```
kubectl autoscale deployment deployment_name ^
  --cpu-percent=50 ^
  --min=1 ^
  --max=5
```

### Check the HPA status:
```
kubectl get hpa
```
```
kubectl get hpa -w
```

### Delete HPA
```
kubectl delete hpa deployment_name
```
