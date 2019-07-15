
## School Grading System

Description

The API allows us to create users namely a proprietor, teachers & students:
-Proprietor to create subjects
-Proprietor to get all subjects, students & teachers
-add grades to a subject weekly

### Installation

Clone this repository
\$ git clone https://github.com/CeciliaWanjiku/school-system.git &&
Install the project's dependencies
`cd into school-system`
`npm install`
`git checkout develop`

Ensure Postgres locally,
Create db `createdb school`
Run migrations `sequelize db:migrate`
Ensure you have a SECRET_KEY set in your environment by exporting one.

Run the development server
`npm run start-dev`
The server will run at http://localhost:8080

####Hosted App####
https://school-s.herokuapp.com/


## Endpoints
//sign up the pricipal/proprietor
https://school-s.herokuapp.com/signup/proprietor
e.g
{
	"email": "micah@andela.com",
	"name": "micah",
	"password": "pass"
}

//login proprietor and add subjects

https://school-s.herokuapp.com/login
{
	"email": "micah@andela.com",
	"password": "pass"
}
https://school-s.herokuapp.com/subject
{
	"name": "PE"
}
//sign up teachers

{
	"email": "me@andela.com",
	"name": "me",
	"password": "pass"
}
//sign up the student
https://school-s.herokuapp.com/signup/student
e.g
{
	"email": "mercy@andela.com",
	"name": "mercy",
	"password": "pass"
}

// sign in teacher and grade a student
https://school-s.herokuapp.com/login
{
	"email": "me@andela.com",
	"password": "pass"
}

https://school-s.herokuapp.com/grades/week4
{
	"subject": "Maths",
	"name": "A",
	"week": "week4",
	"assignedTo": "linet@andela.com"
}

//query all teachers/GET
https://school-s.herokuapp.com/teachers

//query all subjects/GET
https://school-s.herokuapp.com/subjects

//add grades/POST
https://school-s.herokuapp.com/grade
{
	"name": "A",
}
//query grades/GET
https://school-s.herokuapp.com/grade


//query for grades per week
https://school-s.herokuapp.com/grades/week4





