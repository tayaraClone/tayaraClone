# Files

## AccountRoutes.js

AccountRoutes is for all account routes in the server

## ProductRoutes.js

productRoutes is for all product routes in the server

## verifyToken.js

verifyToken contains middleware to verify route with jwt token it will make routes works privately for logged in users

### Usage

```javascript
let express = require('express');
let app = express();
let verify = require('./verifyToken');

app.get("/anyPath", verify, async(req, res)=>{
    // write what you need
})
```



