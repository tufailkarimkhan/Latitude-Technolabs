# Introduction

    * this is simple CRUD API

# Requirement

    * node.js:https://nodejs.org/en/
    * MongoDB:https://www.mongodb.com/try/download/community
    * Postman API:https://www.postman.com/downloads/

# Recommended modules

    * Express
    * body-parser
    * mongoose

# How to Install

    * "npm i"

# How to Start Server

    * "node latitude.js"

# How to Create Interest

    * Type localhost:3000/interest in url Bar
    * Input: {
    "name":"rohit",
    "interestField":"game",
    "subInterest":"Circket"

}
_ Output: "Interest Added Successfully"
_ Similarly you can create Child Interest

# How to Read Data

    * Type localhost:3000/read in url Bar
    * how all Data which store inside the collection.

# How to Update Data

    * Type localhost:3000/update in url Bar

    * input: {"name":"girdhar", "update":{"name":"siddhar","interestField":"Circket"  } }

} \* output: {
"message": "Updated Successfully",
"data": {"\_id": "6194db564fd2226148ca93a1","name": "siddhar","interestField": "Circket",
"childInterestId": "6194cceed8f72407d86b312c",
"\_\_v": 0
}
}

# How to Delete Data

    * Type localhost:3000/delete in url Bar
    * input: { "name": "siddhar"}
    * output:{"message": " Delted.","data": "siddhar" }

# Video Tutorial

    * How to start server

https://user-images.githubusercontent.com/75901043/142200764-06ba5b3d-1bb4-473e-8f8e-125c264fccaa.mp4

    * Testing the API using Postman

https://user-images.githubusercontent.com/75901043/142201013-745dc3fd-d4e0-4bfc-976a-5efdcdf1e5ec.mp4
