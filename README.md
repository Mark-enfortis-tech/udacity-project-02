Project: image filtering service
Description: provides hosted image filtering service with the following features:
Host URL: http://image-filter2.us-east-2.elasticbeanstalk.com/filteredimage
Test query parameters:      image_url: https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg 

Expected responses:
   correct url and query params:   returns compressed image of cat with status == 200,
   correct url and incorrect query params: returns message 'file not found' and status == 404,
   incorrect url: returns message 'bad request' and status == 400. 


