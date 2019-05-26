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


1: Whenever someone comes to the page, it asks them for their name.
<br>
![Sign In](assets/images/RPS_Homepage.png)<br>
2: Once they input a name, Firebase checks to see how many players have already joined. If there aren't any or just one, it puts them in the database as the respective player. If there are already two players, it will notify that person and not let them join.
<br>
![Player Sign In](assets/images/RPS_P1_Signin.png)<br>
3: Once two people have joined, the game starts and player 1's box highlights and they may choose their item.
<br>
![Game Start](assets/images/RPS_P1_Choices.png)<br>
4: After player 1 choooses, their choice is hidden from player 2 and player 2's box highlights and they can make their choice.
<br>
![Player 2 Turn](assets/images/RPS_P2_Choices.png)<br>
5: Once both players have made their choices, both answers are shown to everyone and the winner is announced in the middle!
<br>
![Results](assets/images/RPS_Results.png)<br>
6: Finally, the round resets and the player stats are updated at the bottom of each box according to the result.
<br>
![Game Reset](assets/images/RPS_Updated_Scores.png)<br>
Bonus: This app also features a chat section at the bottom of the page where the players can taunt each other!
<br>
![Chat](assets/images/RPS_Chat.png)<br>
