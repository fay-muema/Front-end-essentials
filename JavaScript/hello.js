let orginalTitle = document.title;
function showUnreadCount(unread){
    document.title = orginalTitle + "(" + unread + " new message!) ";

}
showUnreadCount(3);


