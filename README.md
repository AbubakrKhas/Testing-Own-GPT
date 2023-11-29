------DOKUMENTATION FÜR TEST AI APP-----
Check it in my GitHub also:


it need to be finished...

That is how i started to create App;

- Front end React App

*npx create-react-app my-app
*cd my-app
*npm start

I installed bootstrap for styling but actually didint use it almost and you can add or change to Tailwindcss or something like this


















To attach front-end to back-end

in package.json add

 "proxy": "http://127.0.0.1:5000/"
 
 in script section 
 
  "server": "nodemon index.js --ignore client"


And then also in back-end need to be clarified an API 

- Backend Python


You need to install Langchain for Python 
Get Open AI Api Key really needed
and then set your own API key into file back-end\flask-server\constants.py


After the installation check if works 

And then create a little server for testing usin Python Flask, flask_cors and Virtual environment

*pip install flask

*pip install flask-cors

After installing Venv
*.\venv\Scripts\activate
its active your Virtual environment and then 

*python server.py

It should running on localhost - 127.0.0.1:5000  port 5000
