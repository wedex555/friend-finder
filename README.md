# friend-finder

# Friend Finder Application
Description:
Friend Finder is a full-stack site and meant to imitate a simple dating application. The user answers a short, 10 question survey. Based on the answers provided, the user is returned the name and picture of the closest matching friend in the database. The closest matching friend has the lowest, total difference between question responses.

To view homework instructions click here

Instructions:
Friend Finder is deployed to Heroku! Visit: https://fierce-mountain-37682.herokuapp.com/ to demo the application and find a friend with the greatest compatibility!

To Run Locally:
To Install Friend Finder and run locally:

In the Terminal:

    git clone git@github.com:wedex555/FriendFinder.git
    cd FriendFinder
    npm install
    node server.js

You will be notified which PORT to visit in your localhost

In your browser, as the URL type:

        localhost:PORT 
    
    For Example: localhost:8081
Technologies Used:
This app utilizes Heroku, Node.js, Express.js, path, body-parser, and Twitter Bootstrap


1: Whenever someone comes to the page, it asks them to take survey.
<br>
<img width="1647" alt="one" src="https://user-images.githubusercontent.com/46644726/58385122-3a3bc000-7fa0-11e9-8532-3ed56c1bdcda.png">


2: Name is required, apload user's pic and fill the 10 questions survey
<br>
<img width="1659" alt="two" src="https://user-images.githubusercontent.com/46644726/58385154-ca7a0500-7fa0-11e9-9eb3-38f41124b40f.png">

<br>
3: After user fills the survey the app matches you with a friend with similar characters stored in the data base.
<br>
<img width="1636" alt="three" src="https://user-images.githubusercontent.com/46644726/58385178-2c3a6f00-7fa1-11e9-8fca-6293371161ba.png">

