# CampusMaster

### This is a portal to manage students studying in an institute. It can help the management staff to keep track of students. 
<br>

### In this project uses React for frontend and Express for backend connectvity. For database, we have used MySQL.
<br>

### To run this project you will need to have the latest version of NodeJS installed in your system. You will need to install the dependencies for both the frontend and backend.

### Go to the folder where you cloned this repo and use these commands,

```console
~$ cd frontend
~$ npm i
~$ cd ../backend
~$ npm i
```

### You will need to have mysql in path variable to import the .sql file in your database.
### This command can help you to import.
```console
~$ mysql -u root -p database < campusmaster.sql
```

### And, to run this project you will have to set mysql_native_password using this command in mysql terminal
```console
~$ ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<password>';
```

### Afterwards, the project is ready to be deployed you just have to go into the frontend and backend folder and run each server. By defaut, the frontend will run on 3000 port and backend will run on 8000 port.
<br>

--------------------
# Thankyou