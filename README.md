# AWS ECS Code Pipeline 

This application is a use case of how to containerize an application with docker and deploy via github actions to a AWS ECS Cluster with Load Balencer and  Auto Scaling enabled.

[Test App](http://next-app-loadbalancer-1237673968.us-east-1.elb.amazonaws.com:3000)

Tech Stack:

- [Bun.com](https://bun.sh/)
- [Nextjs.org](https://nextjs.org)
- [Docker.com](https://www.docker.com/)
- [Github Actions](https://docs.github.com/en/actions)



AWS Services

- [ECR](https://aws.amazon.com/ecr/)
- [ECS](https://aws.amazon.com/ecs/)
- [FARGATE](https://aws.amazon.com/fargate/)



Note: make sure you are authenticated via aws-cli by creating an IAM user with sufficient privileges.

This process will create a stack in CloudFormation. Once done make sure the Security Group attached to Task has the correct Inbound Rules exposing port 3000. 
Also, do the same for the load balancer. Make sure the Listeners and Rules are edited to include a rule for port 3000.

To view app visit. Load Balancer DNS url. 

AWS Setup Steps

- Dockerize your app and create an image.
- Tag the image to be used for as an export to ECR.
- Push the image to ECR.
- Create a new Cluster.
- Create a new Task Definition.
- Create a new Service.

![ecs](https://github.com/user-attachments/assets/f78f6ff0-c2c4-4d64-b2ed-96a0a752b19e)

<img width="2495" alt="Screen Shot 2024-09-26 at 1 57 15 AM" src="https://github.com/user-attachments/assets/bb3df76b-ecb5-4193-8df6-f2abc3ad0d6a">
