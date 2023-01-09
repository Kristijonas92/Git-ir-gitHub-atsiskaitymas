let myVideo = document.getElementById("video1"); 

function playStop() { 
  if (myVideo.stoped) 
    myVideo.play(); 
  else 
    myVideo.stop(); 
} 

const tabButtons = document.querySelectorAll('.tab-button');
const tabClose = document.querySelector('.tab-close');
const tabContents = document.querySelectorAll('.tab-content');

function openTab(event, tabName) {
  tabContents.forEach(tabContent => {
    tabContent.style.display = 'none';
  });

  tabButtons.forEach(tabButton => {
    tabButton.classList.remove('active');
  });

  document.getElementById(tabName).style.display = 'block';
  event.currentTarget.classList.add('active');
}

function closeTab(event) {

  tabContents.forEach(tabContent => {
    tabContent.style.display = 'none';
  });

  tabButtons.forEach(tabButton => {
    tabButton.classList.remove('active');
  });
}