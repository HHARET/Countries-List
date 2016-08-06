Country list using angular

//The problem: when starting the app locally using node, nodemon or npm the app strats correctly, but when shutting it down it shuts but the port on where the app is hosted keeps occupied.

//Solution
Use netstat -ano | finstr 'portNumber'
taskkill /PID 'portNumber' -f 
