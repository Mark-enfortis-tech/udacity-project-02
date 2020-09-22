Project: image filtering service
Description: provides hosted image filtering service with the following features:
aws_image_host: http://image-filter2.us-east-2.elasticbeanstalk.com/filteredimage
Test query parameter:      image_url: https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg 

Expected responses:
   correct url and query params:   returns compressed image and status == 200,
   correct url and incorrect query filename: returns message 'file not found' and status == 404,
   incorrect url: returns message 'incorrect url' and status == 404. 


Use Udacity-c2-restapi for access to image filtering service.
server url:  http://udacity-c2-restapi-dev22222222.us-east-2.elasticbeanstalk.com/
github repo: https://github.com/Mark-enfortis-tech/mark-cloud-developer.git

{{aws_image_host}}//api/v0/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg 

   Expected responses:
   correct url and query params:   returns compressed image and status == 200,
   correct url and incorrect query filename: returns message 'file not found' and status == 404,
   incorrect url: returns message 'incorrect url' and status == 404.
