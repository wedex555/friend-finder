var friendsData = require ("../data/friends.js");

// Get Request to List Friends Data
module.exports = function (app) {

    // All of the friends in friendsArray
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // Post Request to Add New Friend to friendsArray
    app.post("/api/friends", function(req, res) {

        var newFriend = req.body;
        var newFriendResponses = newFriend.scores;

        // Best Match Object to store bestMatch information
        var bestMatch = {
            name: "wedeb",
            photo: "",

            // Needs to be a high number because will be matching with the friend with the lowest difference
            bestMatchDifference: 500
        };

        for (var i = 0; i < friendsData.length; i++) {

            var diffCounter = 0;

            for (var k = 0; k < friendsData[i].scores.length; k++) {
            
               diffCounter += Math.abs(parseInt(friendsData[i].scores[k]) - parseInt(newFriendResponses[k]))              

            }
                
            if (bestMatch.bestMatchDifference > diffCounter) {

                bestMatch.name = friendsData[i].name;
                bestMatch.photo = friendsData[i].photo;
                bestMatch.bestMatchDifference = diffCounter;

            }
            
        }

        (friendsData).push(newFriend);

        // Send bestMatch object back to survey.html post request 
        res.json(bestMatch);

    });
};