const uri =  "mongodb://mongodb:27017";
mongoose.connect(uri,{'dbName':'SocialDB'});


Note: This URI is used because the Docker Compose setup defines a MongoDB service named mongodb, and 27017 is the default MongoDB port. Unlike Exercise 1, no credentials are required here, as the MongoDB container is configured without authentication.

>> docker build . -t socialapp


>> docker-compose up


following code is replaced the original for ex4 and later
res.redirect(`/index?username=${newUser.username}`);

res.redirect(`/index?username=${user.username}`);

