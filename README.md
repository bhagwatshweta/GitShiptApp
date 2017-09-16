# GitShiptApp
How to
------
Clone repository
```
$ git clone <url>
```
Install dependencies
```
$ npm install
```
start node server
 ```
 $ node ./bin/www
 ```
Description of the problem and solution
----------------------------------------
Problem : 
GitHub service to search for the GitHub username which returns the GitHub handle, follower count along with a list of followers. This service allows people to search and visit GitHub users without having their own account on GitHub.

Solution:
- Users are supposed to enter the useraname in the input box. 
-  After that ‘getUserDetail( )’ method will be called which will get the user information from the GitHub       API. User’s followers list will be called by ‘getFollowers( )’ method. 
- Initially 20 followers will be displayed on the screen for more followers there is ‘load more >>’ link present at the bottom of displayed followers. 
- to reduce the number of API calls for single letter username, user who has length of username greater than two will get automatically retrieved the user details but if length of username is greater than two, user has to click the search button to retrieve the information. 

Technologies Used
-----------------
1) Front End Framework - AngularJs 1.6.4, Bootstrap, HTML5, CSS3, JavaScript
2) Back End – NodeJS v6.11.3
3) API - GitHub API
4) Testing - Karma Jasmine framework 
5) Cloud Server: Heroku

Reason behind the technical choices
---------------------------------------
Reason behind choosing AngularJS is it can do all of the heavy lifting on the client, while providing a rich, fast experience for the end user along with that there are features into AngularJS which make testing AngularJS applications easy.
Reason behind using Node JS is, it is  Asynchronous I/O, Node.js is Javascript.  So the same language can be used on the backend and frontend.   This means it breaks down the boundaries between front- and back-end development.

 Link to your resume or public profile
-------------------------------------
      * LinkedIn - https://www.linkedin.com/in/shweta-bhagwat/
      * Github   - https://github.com/bhagwatshweta
      * Resume   - https://drive.google.com/file/d/0B5RkjiXomL9wYnNUY01PWGJtNmM/view?usp=sharing
      
Link to the hosted application
```
https://gitshiptapp.herokuapp.com
```
