---
date: "2022-10-18T16:54:33Z"
draft: false
title: "Creating a Kubernetes Service Manifest"
tags: ["Tutorials", "Kubernetes"]
categories: ["Technology"] 
description: "Learn how to create a Kubernetes Service to expose your deployment. This tutorial shows you how to combine multiple manifests in one YAML file and access your app through a browser on minikube."
keywords: ["Kubernetes Service", "Kubernetes", "NodePort", "YAML manifest", "kubectl", "minikube", "expose pod", "container port", "Kubernetes deployment", "Kubernetes tutorial"]
ShowToc: true
tocOpen: true  
---

Last time, we [created a simple manifest](../kubernetes-manifest/) to launch a Kubernetes deployment. Although we found a Pod lurking in minikube dashboard, we couldn't actually see anything interesting.

In this tutorial, we'll extend that manifest to include a Service and make the app available through a web browser.

As before, you'll need minikube and associated tools, all of which are [detailed in an earlier post](../kubernetes-minikube.html).

## Exposing your Pod

To make the Pod containing the app visible, you need to expose the container's port. This involves a small addition to the original manifest file:


``` yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-web
spec:
  selector:
    matchLabels:
      app: my-web
  template:
    metadata:
      labels:
        app: my-web
    spec:
      containers:
      - name: my-web
        image: catherinepope/my-web
        ports:
        - containerPort: 80
```

Under `containers` in your `my-deployment.yaml` file, add:

``` yaml
        ports:
        - containerPort: 80
```

And make sure it's aligned with `image`.

If you're using a different image, you'll need to find the port number. This will be documented in Docker Hub, or from whichever source you've pulled your image.

The Pod (and the container within it) is now accessible, but we need to connect it to a Kubernetes Service before it's visible.

## Creating a Kubernetes Service

As with the Deployment, we'll use a manifest to create our Service. Although we could make and apply separate files, it's neater to keep everything together. You can include multiple manifests in one YAML file, simply by separating them with three dashes.

First add those three dashes to your `my-deployment.yaml` file. Then copy and paste the Service manifest. The additions to your YAML file look like this:

``` yaml
---

apiVersion: v1
kind: Service
metadata:
  name: my-web
spec:
  selector:
    app: my-web
  ports:
  - port: 80
    nodePort: 30080
  type: NodePort

```

Most of this manifest will look familiar from last time. However, now `kind` is `Service`, rather than `Deployment`. The `metadata` and `selector` remain the same, as we want to link this Service with our Deployment. 

Under `ports`, there are two entries. First, the container `port` we specified in the Deployment manifest, then the `nodePort`. The `nodePort` makes your application available outside the Kubernetes cluster. You can choose any number in the range 30000-32767, provided it's not already in use. Finally, we specify the port type of `NodePort`.

Nearly there.

## Launching your web app

We're almost ready to launch the web app. 

First, make sure minikube is running with `minikube start`.

Now you can apply your manifest containing the Deployment and Service. In the same directory as your `my-deployment.yaml` file, type the following command:

``` shell
kubectl apply -f my-deployment.yaml
```

You should see that your Deployment and Service have been created.

To access your web app, run:

`minikube service my-web`

This displays the URL where your app is accessible. Copy and paste the URL into your browser.

If you're using my Docker image, you'll get a random picture:

Keep clicking refresh for some moderate fun.

To delete your Deployment and Service, use the following command:

``` shell
kubectl delete -f my-deployment.yaml
```

## Conclusion

In this tutorial, you've included multiple manifests in one YAML file to deploy a web app. In my next post, I'll explain [how you can package a Kubernetes-based app with a tool called Helm](../getting-started-helm/).