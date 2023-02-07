export function fun1()
{
    var gender2=document.getElementsByClassName("gender2")[0];
    if(gender2.checked)
    {
        gender2.checked=false;
    }
}
export function fun2()
{
    var gender1=document.getElementsByClassName("gender1")[0];
    if(gender1.checked)
    {
        gender1.checked=false;
    }
}
export function fun3()
{
    var entrepreneur=document.getElementsByClassName("entrepreneur")[0];
    if(entrepreneur.checked)
    {
        entrepreneur.checked=false;
    }
}
export function fun4()
{
    var student=document.getElementsByClassName("student")[0];
    if(student.checked)
    {
        student.checked=false;
    }
}
export function fun5()
{
    var password=document.getElementsByClassName("input1")[3];
    var button=document.getElementById("button");
    if(button.innerHTML=="Show")
    {
        password.type="text";
        button.innerHTML="Hide";
    }
    else
    {
        password.type="password";
        button.innerHTML="Show";
    }
}
export function fun6()
{
    var password=document.getElementsByClassName("input1")[3];
    var button=document.getElementById("button");
    if(password.value.length!=0)
    {
        button.style.display="inline-block";
    }
    else
    {
        button.style.display="none";
    }
}