
# IMAGE FILTERING SERVICE

## Udacity Cloud Development - Project 2 

---

This is an Express/ Node rest api based web service that provides a URL in which a client application can use to filter image files.

---

## Build Status
build passing

---

## AWS host URL
[Link](http://image-filter-0-0-1.us-east-2.elasticbeanstalk.com/)

---

**API Reference**

   GET /filteredimage

      Query Parameters:
         key: image_url
         value: *url for image*

**Successful Response Codes**

         Code: 200: 
         Content {file: image}



**Error Codes**

         Code: 404 
         Content: {error : "incorrect api endpoint"}

         Code: 422
         Content: {error : "Unprocessable entity"}


## Additional Activities:

Udacity-c2-restapi application was refactored to include this API. 

Usage: curl http://udacity-c2-restapi-dev22222222.us-east-2.elasticbeanstalk.com/api/v0/feed/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg










