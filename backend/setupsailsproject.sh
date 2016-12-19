npm install
npm install --save swig
npm install sails-mysql
npm install sails-mongo

# remove this and test
npm install --save sails-hook-jwt-auth

npm install lodash
npm install async
npm install bcrypt
npm install jsonwebtoken
npm install sails-build-dictionary
npm install sails-util

#Remove 
rm ./node_modules/sails-hook-jwt-auth/api/controllers/AuthController.js

sudo NODE_ENV=production forever start app.js
echo "Started The Forever Server"
