let myVideo = document.getElementById("video1"); 

function playStop() { 
  if (myVideo.stoped) 
    myVideo.play(); 
  else 
    myVideo.stop(); 
} 