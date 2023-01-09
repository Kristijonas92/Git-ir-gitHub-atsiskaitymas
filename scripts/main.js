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
  // Hide all tab content elements
  tabContents.forEach(tabContent => {
    tabContent.style.display = 'none';
  });

  // Remove 'active' class from all tab buttons
  tabButtons.forEach(tabButton => {
    tabButton.classList.remove('active');
  });

  // Show the selected tab content and add 'active' class to the button
  document.getElementById(tabName).style.display = 'block';
  event.currentTarget.classList.add('active');
}

function closeTab(event) {
  // Hide all tab content elements
  tabContents.forEach(tabContent => {
    tabContent.style.display = 'none';
  });

  // Remove 'active' class from all tab buttons
  tabButtons.forEach(tabButton => {
    tabButton.classList.remove('active');
  });
}

// Set the default tab to be displayed and active
document.getElementById('default-tab').click();