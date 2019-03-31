// $(document).ready(function(){
    console.log("loading");
    $("#send-quiz").on("click",function(event){
        event.preventDefault();
        console.log("click");
        var image  = $('#selfie').prop('files')[0];
        var userScore = [1,3,5,2,1,5,4,2,1,5]
        var userData = new FormData();
        userData.append("file",image);
        userData.append("name",$("#name").val());
        userData.append("score",userScore);
        
        $.ajax({
            type: "POST",
            url: "/api/friends",
            data: userData,
            processData: false,
            contentType: false,
            dataType: "json",
            success: function(data, textStatus, jqXHR) {
               //process data
               console.log(data);
            },
            error: function(data, textStatus, jqXHR) {
               //process error msg
            },
        });
    });
// })