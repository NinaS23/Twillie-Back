# Twillie-Back

<div align="center">
	<img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/money-bag_1f4b0.png">
</div>


<p align = "center">
   <img src="https://img.shields.io/badge/author-NinaS23-4dae71?style=flat-square" />
</p>


<div align="center">
  <h3>Build With</h3>

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
<img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" height="30px"/>
<img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" height="30px"/>
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" height="30px"/>
<img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
</div>


#  features developed 
- [x] users must register email, password, photo, name
- [x] Users can login
- [x] users can create a record
- [x] Users can delete a record
- [x] users can see their balance

<!-- Getting Started -->

# Getting Started

To clone the project, run the following command:

```git
git clone https://github.com/NinaS23/Twillie-Back.git
```

navigate to the project folder and create .env and .env.test with this inside those files :

```git
- .env
$ PORT = 6003
$ DATABASE_URL = postgres://{user}:{password}@{hostname}:{port}/{database-name};
$ JWT_SECRET = secret key
$ NODE_ENV='prod'
```

```git
- .env.test
$ PORT = 6003
$ DATABASE_URL = postgres://{user}:{password}@{hostname}:{port}/{database-name-test};
$ JWT_SECRET = secret key 
$ NODE_ENV='test'
```
 then ,run that command to genarate database tables :
```git
 npx prisma migrate dev
```

Then, run the following command to start project:

```git
npm run dev 
```


# tests 

for unit tests , run the command :

```git
npm run test:unit
```
for integration tests, run the command :

```git
npm run test:integration
```

<!-- REQUESTS -->
### &nbsp; ☰ &nbsp; Request

###### Body _`/sign-up`_


```json
{
  "name": "bruna",
  "email": "ana@bruasee.com",
  "password": "12345",
  "picture": "https://images.app.goo.gl/U11LHYVXt1tqL6kk7"
}
```


###### Body _`/sign-in`_


```json
{
 "email": "ana@bruasee.com",
  "password": "12345"
}
```

###### Body _`/wallet`_ (autenticada)


```json
{
  "fixedEntry": 1,
  "variableEntry":56,
  "fixedOutput": 6,
  "variableOutput":2,
  "description":"comprei bala da alice e ganhei 57 reais da vó"
}
```
