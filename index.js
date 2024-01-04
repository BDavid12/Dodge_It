const showDiff = document.getElementById('diffButton');
const showLeaderB = document.getElementById('leaderbButton');
const hideDiff1 = document.getElementById('hide1');
const hideDiff2 = document.getElementById('hide2');
const hideDiff3 = document.getElementById('hide3');
const form = document.getElementById('diff');
const leaderBStyle = document.getElementById('leaderb')
const login = document.getElementById('login');
const regist = document.getElementById('regist');

let leaderBisOpen = false;
let diffisOpen = false;

document.addEventListener('click', function handleClickOutsideBox(event) {
  
    if (leaderBisOpen && !leaderBStyle.contains(event.target)) {
      leaderBStyle.style.visibility = 'hidden';
      leaderBisOpen = false;
    }
});

document.addEventListener('click', function handleClickOutsideBox(event) {

    if (diffisOpen && !diff.contains(event.target)) {
      diff.style.visibility = 'hidden';
      diffisOpen = false;
    }
});
  

login.addEventListener('click', function() 
{
    window.open("login.html", "_self")
});

regist.addEventListener('click', function() 
{
    window.open("regist.html", "_self")
});

showDiff.addEventListener('click', function() 
{
    if(!diffisOpen){
        form.style.visibility = "visible"
        setTimeout(() => {
            diffisOpen = true;
        }, 300);
    } 
});

showLeaderB.addEventListener('click', function() 
{
    if(!leaderBisOpen){
        leaderBStyle.style.visibility = "visible"
        setTimeout(() => {
            leaderBisOpen = true;
        }, 300);
    }  
});

hideDiff1.addEventListener('click', function() 
{
    form.style.visibility = "hidden"
    hideDiff1.style.color = "#d9aaff"
    hideDiff2.style.color = "#371843"
    hideDiff3.style.color = "#371843"
});

hideDiff2.addEventListener('click', function() 
{
    form.style.visibility = "hidden"
    hideDiff1.style.color = "#371843"
    hideDiff2.style.color = "#d9aaff"
    hideDiff3.style.color = "#371843"
});

hideDiff3.addEventListener('click', function() 
{
    form.style.visibility = "hidden"
    hideDiff1.style.color = "#371843"
    hideDiff2.style.color = "#371843"
    hideDiff3.style.color = "#d9aaff"
});


