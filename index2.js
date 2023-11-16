const showDiff = document.getElementById('diffButton');
const hideDiff1 = document.getElementById('hide1');
const hideDiff2 = document.getElementById('hide2');
const hideDiff3 = document.getElementById('hide3');
const form = document.getElementById('diff');
const kilep = document.getElementById('kilep')

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


kilep.addEventListener('click', function(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.open("index.html", "_self");
});