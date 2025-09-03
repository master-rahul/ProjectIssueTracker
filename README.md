# ProjectIssueTracker
This application has following features 
1. PROJECT VIEW
```sh
CREATE PROJECT
FILTER PROJECT
    ├──AUTHOR
    └──OWNER
    ├──PROJECT NAME
    └──TECH STACK
    └──PROJECT TYPE
OPEN PROJECT
```
2. ISSUE VIEW
```sh
CREATE ISSUE
    ├──STATUS OPNE
    ├──AUTHOR 
    ├──TITLE 
    ├──DESCRIPTION 
    ├──OWNER 
    └──ISSUE TYPE 
EDIT ISSUE
    ├──STATUS UPADTE
    ├──AUTHOR UPDATE
    ├──TITLE UPADTE
    ├──DESCRIPTION UPDATE
    ├──OWNER UPADTE
    └──ISSUE TYPE UPDATE
FILTER ISSUE
    ├──AUTHOR
    ├──OWNER
    ├──ISSUE TYPE
    └──ISSUE STATUS
COMMENT ISSUE
    ├──AUTHOR
    ├──COMMENT
    └──ISSUE STATUS

```




## How to setup on local machine
1. For usage of this repository your machine needs [node](https://nodejs.org/en/), npm, [monogodb](https://docs.mongodb.com/manual/installation/) and [git](https://git-scm.com/downloads). 
```go
node --16.18.0
npm --8.19.2
git --2.40.0
```
2.  Clone  repository
```go
git clone https://github.com/master-rahul/ProjectIssueTracker.git
```
3. Change directory to ProjectIssueTracker
```go
cd ProjectIssueTracker.
```

3. Install dependencies
```go
npm install --save
```
4. Start Monogo DB
```go
sudo systemctl start mongod
```
5. That's... it  run the application
```go
npm start
```

## File structure
here you are looking at directory structure with root level files only.
```sh
ProjectIssueTracker.
├── assets
│   ├── images
│   ├── js
│   ├── css
├── node-modules
├── config
│   ├── mongoose.js
│   └── customMiddleware.js
├── controller
│   ├── home.js
│   ├── issue.js
│   └── project.js
├── index.js
├── models
│   ├── comment.js
│   ├── issue.js
│   ├── issueType.js
│   ├── project.js
│   ├── projectType.js
│   ├── staus.js
│   ├── techStack.js
│   └── user.js
├── package-lock.json
├── package.json
├── readme.md
├── route
│   ├── route.js
│   ├── issue.js
│   └── project.js
└── views
│   ├── admin.ejs
│   └── emplyoyeeHome.ejs
│   ├── employeeReview.ejs
│   └── employeeView.ejs
│   ├── login.ejs
│   └── register.ejs    
```


# ProjectPage
<img width="1680" alt="Screenshot 2023-04-11 at 3 00 28 PM" src="https://github.com/master-rahul/ProjectIssueTracker/blob/main/project.png">
# IssuePage
<img width="1680" alt="Screenshot 2023-04-11 at 3 00 28 PM" src="https://github.com/master-rahul/ProjectIssueTracker/blob/main/issue.png">
