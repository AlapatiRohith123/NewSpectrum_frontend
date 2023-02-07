export function myFunction() {
    var x = document.getElementById("notifications");
    var z=document.getElementById("nav").children;
    var y=document.body;
    if (x.style.display == "block") {
        for(let i=1;i<z.length;i++)
        {
            z[i].style.display="none";
        }
        y.style.marginTop="30px";
    }
    else {
        for(let i=0;i<z.length;i++)
        {
            z[i].style.display="block";
        }
    y.style.marginTop = "187.6px";
    }
}