SESSIONs
1)    npm i express-session
2)    in app.js 
    -   app.use(session({            
            resave: false,                                  // don't save if the value of session doesn't change (to reduce load on session)
            saveUninitialized: false,
            secret: "holobholaholabhola"
        }));
