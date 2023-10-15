// Array of Objects
const quiz = [
  {
    q: "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
    options: [
      "AWS CLI.",
      "AWS API.",
      "AWS SDK.",
      "AWS Management Console."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the following is an example of horizontal scaling in the AWS Cloud?",
    options: [
      "Replacing an existing EC2 instance with a larger, more powerful one.",
      "Increasing the compute capacity of a single EC2 instance to address the growing demands of an application.",
      "Adding more RAM capacity to an EC2 instance.",
      "Adding more EC2 instances of the same size to handle an increase in traffic."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
    options: [
      "Amazon Inspector.",
      "AWS CloudTrail.",
      "AWS Trusted Advisor.",
      "EC2 Instance Usage Report."
    ],
    answer: [
      1
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the below options are related to the reliability of AWS? (Choose TWO)",
    options: [
      "Which of the below options are related to the reliability of AWS? (Choose TWO)",
      "Automatically provisioning new resources to meet demand.",
      "All AWS services are considered Global Services, and this design helps customers serve their international users.",
      "Providing compensation to customers if issues occur.",
      "Ability to recover quickly from failures."
    ],
    answer: [
      1,
      4
    ],
    numberofcorrectanswer: 2
  },
  {
    q: "Which statement is true regarding the AWS Shared Responsibility Model?",
    options: [
      "Responsibilities vary depending on the services used.",
      "Security of the IaaS services is the responsibility of AWS.",
      "Patching the guest OS is always the responsibility of AWS.",
      "Security of the managed services is the responsibility of the customer."
    ],
    answer: [
      0
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
    options: [
      "AWS Health Dashboard",
      "AWS Support Concierge.",
      "AWS Customer Service.",
      "AWS Customer Service."
    ],
    answer: [
      1
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
    options: [
      "The Reserved Instance discounts can only be shared with the master account.",
      "All accounts can receive the hourly cost benefit of the Reserved Instances.",
      "The purchased instances will have better performance than On-demand instances.",
      "There are no cost benefits from using consolidated billing; It is for informational purposes only."
    ],
    answer: [
      1
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
    options: [
      "Deploy the application across multiple Availability Zones and Edge locations.",
      "Deploy the application across multiple Availability Zones and subnets.",
      "Deploy the application across multiple Regions and Availability Zones.",
      "Deploy the application across multiple VPCs and subnets."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "What does AWS Snowball provide? (Choose TWO)",
    options: [
      "Built-in computing capabilities that allow customers to process data locally.",
      "catalog of third-party software solutions that customers need to build solutions and run their businesses.",
      "A hybrid cloud storage between on-premises environments and the AWS Cloud.",
      "An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS.",
      "Secure transfer of large amounts of data into and out of the AWS."
    ],
    answer: [
      0,
      4
    ],
    numberofcorrectanswer: 2
  },
  {
    q: "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
    options: [
      "Applying the Amazon Connect latency-based routing policy.",
      "Registering a new US domain name to serve the users in the US.",
      "Building a new data center in the US and implementing a hybrid model.",
      "Deploying new Amazon EC2 instances in a Region located in the US."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
    options: [
      "IAM roles.",
      "IAM users.",
      "IAM user groups.",
      "AWS Organizations."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
    options: [
      "AWS OpsWorks.",
      "AWS Database Migration Service.",
      "AWS Server Migration Service.",
      "AWS Application Discovery Service."
    ],
    answer: [
      1
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
    options: [
      "Build security in every layer.",
      "Parallelize tasks.",
      "Implement elasticity.",
      "Adopt monolithic architecture."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
    options: [
      "Increasing speed and agility.",
      "There is no need to worry about security.",
      "Gaining complete control over the physical infrastructure.",
      "Operating applications on behalf of customers.",
      "All of the physical security and most of the data/network security are taken care of for you."
    ],
    answer: [
      0,
      4
    ],
    numberofcorrectanswer: 2
  },
  {
    q: "What is the advantage of the AWS-recommended practice of decoupling applications?",
    options: [
      "Allows treating an application as a single, cohesive unit.",
      "Reduces inter-dependencies so that failures do not impact other components of the application.",
      "Allows updates of any monolithic application quickly and easily.",
      "Allows tracking of any API call made to any AWS service."
    ],
    answer: [
      1
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
    options: [
      "AWS Budgets.",
      "AWS Budgets.",
      "AWS Systems Manager.",
      "AWS Cost & Usage Reports."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
    options: [
      "AWS services costs will be reduced to half the original price.",
      "The consolidated billing feature is just for organizational purpose.",
      "Each AWS account gets volume discounts.",
      "Each AWS account gets five times the free-tier services capacity."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
    options: [
      "Regularly update firmware on EBS devices",
      "Create EBS snapshots.",
      "Ensure that EBS data is encrypted at rest.",
      "Store a backup daily in an external drive.",
      "Prevent any unauthorized access to AWS data centers."
    ],
    answer: [
      1,
      2
    ],
    numberofcorrectanswer: 2
  },
  {
    q: "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architectures design?",
    options: [
      "By automatically scaling your on-premises resources based on changes in demand.",
      "By automatically scaling your AWS resources using an Elastic Load Balancer.",
      "By reducing interdependencies between application components wherever possible.",
      "By automatically provisioning the required AWS resources based on changes in demand."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)",
    options: [
      "Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded.",
      "Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis.",
      "Configure the AWS Budgets Service to alert the company when the threshold is exceeded.",
      "Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded.",
      "Configure the Amazon Connect Service to alert the company when the threshold is exceeded."
    ],
    answer: [
      0,
      2
    ],
    numberofcorrectanswer: 2
  },
  {
    q: "What does Amazon CloudFront use to distribute content to global users with low latency?",
    options: [
      "AWS Global Accelerator.",
      "AWS Regions.",
      "AWS Edge Locations.",
      "AWS Availability Zones."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "What does the Principle of Least Privilege refer to?",
    options: [
      "You should grant your users only the permissions they need when they need them and nothing more.",
      "All IAM users should have at least the necessary permissions to access the core AWS services.",
      "All trusted IAM users should have access to any AWS service in the respective AWS account.",
      "IAM users should not be granted any permissions; to keep your account safe."
    ],
    answer: [
      0
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the following does NOT belong to the AWS Cloud Computing models?",
    options: [
      "Platform as a Service (PaaS).",
      "Infrastructure as a Service (IaaS).",
      "Software as a Service (SaaS).",
      "Networking as a Service (NaaS)."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
    options: [
      "S3 Intelligent-Tiering.",
      "AWS Marketplace.",
      "Amazon S3 Glacier Deep Archive.",
      "Amazon EBS."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which service provides DNS in the AWS cloud?",
    options: [
      "Route 53.",
      "AWS Config.",
      "Amazon CloudFront.",
      "Amazon EMR."
    ],
    answer: [
      0
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
    options: [
      "AWS Shield.",
      "AWS Config.",
      "Amazon Cognito.",
      "AWS WAF.",
      "AWS KMS."
    ],
    answer: [
      0,
      4
    ],
    numberofcorrectanswer: 2
  },
  {
    q: "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the applications response time is optimal?",
    options: [
      "AWS OpsWorks.",
      "AWS Storage Gateway.",
      "Amazon EBS volume.",
      "Amazon ElastiCache."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
    options: [
      "Reserved instances.",
      "Spot instances.",
      "Dedicated instances.",
      "On-demand instances."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
    options: [
      "Reserved Instances.",
      "On-demand Instances.",
      "Dedicated Instances.",
      "Spot Instances."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the following can be described as a global content delivery network (CDN) service?",
    options: [
      "AWS VPN.",
      "AWS Direct Connect.",
      "AWS Regions.",
      "Amazon CloudFront."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the following services allows customers to manage their agreements with AWS?",
    options: [
      "AWS Artifact.",
      "AWS Certificate Manager.",
      "AWS Systems Manager.",
      "AWS Organizations."
    ],
    answer: [
      0
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)",
    options: [
      "Amazon VPC.",
      "Amazon DynamoDB.",
      "Amazon Elastic MapReduce.",
      "AWS IAM.",
      "Amazon Elastic Compute Cloud."
    ],
    answer: [
      1,
      2
    ],
    numberofcorrectanswer: 2
  },
  {
    q: "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
    options: [
      "Amazon Aurora.",
      "Amazon DynamoDB.",
      "Amazon Elastic Block Store.",
      "Amazon Redshift."
    ],
    answer: [
      1
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
    options: [
      "AWS Identity and Access Management (IAM) user.",
      "Infrastructure Event Management (IEM) engineer.",
      "AWS Consulting Partners.",
      "Technical Account Manager (TAM)."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "How can you view the distribution of AWS spending in one of your AWS accounts?",
    options: [
      "By using Amazon VPC console.",
      "By contacting the AWS Support team.",
      "By using AWS Cost Explorer.",
      "By contacting the AWS Finance team."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
    options: [
      "Access keys.",
      "Secret token.",
      "UserID.",
      "User name and password."
    ],
    answer: [
      0
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
    options: [
      "Contact the AWS Customer Service team.",
      "Contact the AWS Abuse team.",
      "Contact the AWS Concierge team.",
      "Contact the AWS Security team."
    ],
    answer: [
      1
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Select TWO examples of the AWS shared controls.",
    options: [
      "Patch Management.",
      "IAM Management.",
      "VPC Management.",
      "Configuration Management.",
      "Data Center operations."
    ],
    answer: [
      0,
      3
    ],
    numberofcorrectanswer: 2
  },
  {
    q: "In order to implement best practices when dealing with a “Single Point of Failure,” you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)",
    options: [
      "ELB.",
      "Auto Scaling.",
      "Auto Scaling.",
      "ECR.",
      "ECR."
    ],
    answer: [
      0,
      1
    ],
    numberofcorrectanswer: 2
  },
  {
    q: "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
    options: [
      "Amazon SNS.",
      "Amazon Kinesis Video Streams.",
      "AWS CloudFormation.",
      "Amazon CloudFront."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
    options: [
      "A MySQL database installed on an EC2 instance.",
      "Amazon Aurora.",
      "Amazon DynamoDB.",
      "Amazon Neptune."
    ],
    answer: [
      1
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "What is the AWS service that enables AWS architects to manage infrastructure as code?",
    options: [
      "AWS CloudFormation.",
      "AWS Config.",
      "Amazon SES.",
      "Amazon EMR."
    ],
    answer: [
      0
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Under the shared responsibility model, which of the following is the responsibility of AWS?",
    options: [
      "Client-side encryption.",
      "Configuring infrastructure devices.",
      "Server-side encryption.",
      "Filtering traffic with Security Groups."
    ],
    answer: [
      1
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "What does the AWS Health Dashboard provide? (Choose TWO)",
    options: [
      "Detailed troubleshooting guidance to address AWS events impacting your resources.",
      "Health checks for Auto Scaling instances.",
      "Recommendations for Cost Optimization.",
      "A dashboard detailing vulnerabilities in your applications.",
      "Personalized view of AWS service health."
    ],
    answer: [
      0,
      4
    ],
    numberofcorrectanswer: 2
  },
  {
    q: "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can’t reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
    options: [
      "AWS Lambda.",
      "AWS Config.",
      "Amazon CloudWatch.",
      "AWS CloudTrail."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
    options: [
      "AWS Shield.",
      "AWS Management Console.",
      "AWS Secrets Manager.",
      "AWS Trusted Advisor."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the following is not a benefit of Amazon S3? (Choose TWO)",
    options: [
      "Amazon S3 provides unlimited storage for any type of data.",
      "Amazon S3 can run any type of application or backend system.",
      "Amazon S3 stores any number of objects, but with object size limits.",
      "Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere.",
      "Amazon S3 provides 99.999999999% (11 9’s) of data durability."
    ],
    answer: [
      1,
      3
    ],
    numberofcorrectanswer: 2
  },
  {
    q: "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
    options: [
      "Disk disposal.",
      "Controlling physical access to compute resources.",
      "Patching the Network infrastructure.",
      "Setting password complexity rules.",
      "Configuring network access rules."
    ],
    answer: [
      3,
      4
    ],
    numberofcorrectanswer: 2
  },
  {
    q: "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
    options: [
      "Amazon Aurora.",
      "Amazon CloudWatch.",
      "AWS Quick Start reference deployments.",
      "AWS OpsWorks."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
    options: [
      "Elastic RI.",
      "Premium RI.",
      "Standard RI.",
      "Convertible RI."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?",
    options: [
      "AWS Organizations.",
      "AWS Trusted Advisor.",
      "IAM User Groups.",
      "AWS Config."
    ],
    answer: [
      0
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which service provides object-level storage in AWS?",
    options: [
      "Amazon EBS.",
      "Amazon Instance Store.",
      "Amazon EFS.",
      "Amazon S3."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?",
    options: [
      "AWS Elastic Load Balancer.",
      "AWS Budgets.",
      "AWS Auto Scaling.",
      "AWS Cost Explorer."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which S3 storage class is best for data with unpredictable access patterns?",
    options: [
      "Amazon S3 Intelligent-Tiering.",
      "Amazon S3 Glacier Flexible Retrieval.",
      "Amazon S3 Standard.",
      "Amazon S3 Standard-Infrequent Access."
    ],
    answer: [
      0
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "What is the AWS database service that allows you to upload data structured in key-value format?",
    options: [
      "Amazon DynamoDB.",
      "Amazon Aurora.",
      "Amazon Redshift.",
      "Amazon RDS."
    ],
    answer: [
      1
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the following is NOT correct regarding Amazon EC2 On-demand instances?",
    options: [
      "You have to pay a start-up fee when launching a new instance for the first time.",
      "The on-demand instances follow the AWS pay-as-you-go pricing model.",
      "With on-demand instances, no longer-term commitments or upfront payments are needed.",
      "When using on-demand Linux instances, you are charged per second based on an hourly rate."
    ],
    answer: [
      0
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
    options: [
      "Encrypted keys.",
      "Email verification.",
      "AWS KMS.",
      "AWS MFA."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?",
    options: [
      "AWS Knowledge Center.",
      "AWS Health Dashboard.",
      "Infrastructure Event Management.",
      "AWS Support Concierge Service."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?",
    options: [
      "Amazon RDS.",
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon CloudWatch."
    ],
    answer: [
      0
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the below is a best-practice when designing solutions on AWS?",
    options: [
      "Invest heavily in architecting your environment, as it is not easy to change your design later.",
      "Use AWS reservations to reduce costs when testing your production environment.",
      "Automate wherever possible to make architectural (© ) experimentation easier.",
      "Provision a large compute capacity to handle any spikes in load"
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?",
    options: [
      "Penetration testing is not allowed in AWS.",
      "Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure.",
      "Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.",
      "The AWS customers are only allowed to perform penetration testing on services managed by AWS."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which service is used to ensure that messages between software components are not lost if one or more components fail?",
    options: [
      "Amazon SQS.",
      "Amazon SES.",
      "AWS Direct Connect.",
      "Amazon Connect."
    ],
    answer: [
      0
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "What is the AWS service that provides a virtual network dedicated to your AWS account?",
    options: [
      "AWS VPN.",
      "AWS Subnets.",
      "AWS Dedicated Hosts.",
      "Amazon VPC."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
    options: [
      "Amazon EBS.",
      "Amazon SQS.",
      "Amazon S3.",
      "Amazon S3."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?",
    options: [
      "Instance Password.",
      "Key pairs.",
      "Access Keys.",
      "MFA."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "What does Amazon ElastiCache provide?",
    options: [
      "In-memory caching for read-heavy applications.",
      "An Ehcache compatible in-memory data store.",
      "An online software store that allows Customers to launch pre-configured software with just few clicks.",
      "A domain name system in the cloud."
    ],
    answer: [
      0
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "What is the AWS service that enables you to manage all of your AWS accounts from a single master account?",
    options: [
      "AWS Trusted Advisor.",
      "AWS WAF.",
      "AWS Organizations.",
      "Amazon Config."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?",
    options: [
      "Dedicated Instances.",
      "Dedicated Hosts.",
      "On-demand Instances.",
      "Reserved Instances."
    ],
    answer: [
      1
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?",
    options: [
      "Free support for all enterprise customers.",
      "Automatic data protection",
      "Reduced Capital Expenditure (CapEx).",
      "AWS holds responsibility for managing customer applications."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?",
    options: [
      "AWS Direct Connect.",
      "Amazon CloudFront.",
      "AWS Snowball.",
      "Amazon Route 53."
    ],
    answer: [
      0
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?",
    options: [
      "Internet gateways.",
      "Virtual Private Cloud.",
      "Security Groups.",
      "Amazon CloudFront."
    ],
    answer: [
      1
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?",
    options: [
      "Amazon Cognito.",
      "AWS IAM.",
      "Amazon Aurora.",
      "AWS WAF."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
    options: [
      "Amazon EMR.",
      "Amazon MQ.",
      "Amazon SNS.",
      "Amazon SQS."
    ],
    answer: [
      0
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?",
    options: [
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon EC2.",
      "Amazon RDS."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "What are the default security credentials that are required to access the AWS management console for an IAM user account?",
    options: [
      "MFA.",
      "Security tokens.",
      "A user name and password.",
      "Access keys."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?",
    options: [
      "IAM.",
      "An internet gateway.",
      "EBS Snapshot.",
      "AMI."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?",
    options: [
      "The ability of a system to recover gracefully from failure.",
      "The efficient use of computing resources to meet requirements.",
      "The ability to monitor systems and improve supporting processes and procedures.",
      "The ability to manage datacenter operations more efficiently."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?",
    options: [
      "Edge locations are used by CloudFront to cache the most recent responses.",
      "Edge locations are used by CloudFront to improve your end users’ experience when uploading files.",
      "Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency.",
      "Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the following services allows you to run containerized applications on a cluster of EC2 instances?",
    options: [
      "Amazon ECS.",
      "AWS Data Pipeline.",
      "AWS Cloud9.",
      "AWS Personal Health Dashboard."
    ],
    answer: [
      0
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the following services will help businesses ensure compliance in AWS?",
    options: [
      "CloudFront.",
      "CloudEndure Migration.",
      "CloudWatch.",
      "CloudTrail."
    ],
    answer: [
      3
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the following procedures will help reduce your Amazon S3 costs?",
    options: [
      "Use the Import/Export feature to move old files automatically to Amazon Glacier.",
      "Use the right combination of storage classes based on different use cases.",
      "Pick the right Availability Zone for your S3 bucket.",
      "Move all the data stored in S3 standard to EBS."
    ],
    answer: [
      1
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the following activities may help reduce your AWS monthly costs?",
    options: [
      "Enabling Amazon EC2 Auto Scaling for all of your workloads.",
      "Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests.",
      "Removing all of your Cost Allocation Tags.",
      "Deploying your AWS resources across multiple Availability Zones."
    ],
    answer: [
      0
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "What is the AWS service/feature that takes advantage of Amazon CloudFront’s globally distributed edge locations to transfer files to S3 with higher upload speeds?",
    options: [
      "S3 Transfer Acceleration.",
      "AWS WAF.",
      "AWS Snowmobile.",
      "AWS Snowball."
    ],
    answer: [
      0
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?",
    options: [
      "AWS X-Ray.",
      "Network ACL.",
      "Security Groups.",
      "VPC Flow logs."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?",
    options: [
      "Amazon DynamoDB.",
      "Amazon SNS.",
      "Amazon RDS.",
      "Amazon ElastiCache."
    ],
    answer: [
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?",
    options: [
      "APN Consulting Partners.",
      "AWS TAM.",
      "APN Technology Partners.",
      "AWS Professional Services."
    ],
    answer: [
      0
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "What is the AWS serverless service that allows you to run your applications without any administrative burden?",
    options: [
      "Amazon LightSail.",
      "AWS Lambda.",
      "Amazon RDS instances.",
      "Amazon EC2 instances."
    ],
    answer: [
      1
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?",
    options: [
      "She has properly built an elastic system.",
      "She has properly built a fault tolerant system.",
      "She has properly built an encrypted system.",
      "She has properly built a scalable system."
    ],
    answer: [
      1
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)",
    options: [
      "Building the relational database schema.",
      "Performing backups.",
      "Managing the database settings.",
      "Patching the database software.",
      "Installing the database software."
    ],
    answer: [
      0,
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Choose TWO)",
    options: [
      "AWS KMS.",
      "AWS Global accelerator.",
      "AWS Direct Connect.",
      "AWS Glue.",
      "Amazon CloudFront."
    ],
    answer: [
      1,
      4
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)",
    options: [
      "AWS Direct Connect.",
      "Amazon EC2 Auto Scaling.",
      "Elastic Load Balancer.",
      "CloudFormation.",
      "Network ACLs."
    ],
    answer: [
      1,
      2
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "What are the change management tools that helps AWS customers audit and monitor all resource changes in their AWS environment? (Choose TWO)",
    options: [
      "AWS CloudTrail.",
      "Amazon Comprehend.",
      "AWS Transit Gateway.",
      "AWS X-Ray.",
      "AWS Config."
    ],
    answer: [
      0,
      4
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "Which of the following aspects of security are managed by AWS? (Choose TWO)",
    options: [
      "Encryption of EBS volumes.",
      "VPC security.",
      "Access permissions.",
      "Hardware patching.",
      "Securing global physical infrastructure."
    ],
    answer: [
      3,
      4
    ],
    numberofcorrectanswer: 1
  },
  {
    q: "What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)",
    options: [
      "Reserved Compute capacity.",
      "Eliminating Single Points of Failure (SPOFs).",
      "Distributed infrastructure.",
      "Virtualized compute resources.",
      "Dedicated hosting."
    ],
    answer: [
      2,
      1
    ],
    numberofcorrectanswer: 2
  },
  {
    q: "Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)",
    options: [
      "Monitoring network performance.",
      "Installing software on EC2 instances.",
      "Creating hypervisors.",
      "Configuring Access Control Lists (ACLs).",
      "Hardware maintenance."
    ],
    answer: [
      2,
      4
    ],
    numberofcorrectanswer: 2
  },
  {
    q: "Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)",
    options: [
      "Always use Global Services in your architecture rather than Regional Services.",
      "Always choose to pay as you go.",
      "Treat servers as fixed resources.",
      "Automate wherever possible.",
      "Remove single points of failure."
    ],
    answer: [
      3,
      4
    ],
    numberofcorrectanswer: 2
  },
  {
    q: "Which of the following AWS services can be used as a compute resource? (Choose TWO)",
    options: [
      "Amazon VPC.",
      "Amazon CloudWatch.",
      "Amazon S3.",
      "Amazon EC2.",
      "AWS Lambda."
    ],
    answer: [
      3,
      4
    ],
    numberofcorrectanswer: 2
  },
  {
    q: "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
    options: [
      "Managing environmental events of AWS data centers.",
      "Protecting the confidentiality of data in transit in Amazon S3.",
      "Controlling physical access to AWS Regions.",
      "Ensuring that the underlying EC2 host is configured properly.",
      "Patching applications installed on Amazon EC2."
    ],
    answer: [
      1,
      4
    ],
    numberofcorrectanswer: 2
  },
  {
    q: "A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)",
    options: [
      "AWS Trusted Advisor.",
      "Amazon Inspector.",
      "Amazon SNS.",
      "Amazon CloudWatch.",
      "Concierge Support Team."
    ],
    answer: [
      0,
      1
    ],
    numberofcorrectanswer: 2
  },
  {
    q: "The principle “design for failure and nothing will fail” is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)",
    options: [
      "Multi-factor authentication.",
      "Availability Zones.",
      "Elastic Load Balancing.",
      "Penetration testing.",
      "Vertical Scaling."
    ],
    answer: [
      2,
      1
    ],
    numberofcorrectanswer: 2
  }
]