const showDiff = document.getElementById('diffButton');
const hideDiff1 = document.getElementById('hide1');
const hideDiff2 = document.getElementById('hide2');
const hideDiff3 = document.getElementById('hide3');
const form = document.getElementById('diff');
const login = document.getElementById('login');
const regist = document.getElementById('regist');

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
    form.style.visibility = "visible"
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


