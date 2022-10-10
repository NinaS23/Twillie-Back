# Twillie-Back

<div align="center">
	<img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/money-bag_1f4b0.png">
</div>


<p align = "center">
   <img src="https://img.shields.io/badge/author-NinaS23-4dae71?style=flat-square" />
</p>


<div align="center">
  <h3>test Build With</h3>

<img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" height="30px"/>
  
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
for both of them , run the command :
 ``` git
 npm test
 ```
