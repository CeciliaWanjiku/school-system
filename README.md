[

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
