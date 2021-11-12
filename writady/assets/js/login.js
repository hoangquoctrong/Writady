function showForm(a)
{
    switch(a){
        case 1:
            document.getElementById("sign-in").style.display="block";
            document.getElementById("sign-up").style.display="none";
            document.getElementById("verify").style.display="none";
            break;
        case 2:
            document.getElementById("sign-in").style.display="none";
            document.getElementById("sign-up").style.display="block";
            document.getElementById("verify").style.display="none";
            break;
        default:
            document.getElementById("sign-in").style.display="none";
            document.getElementById("sign-up").style.display="none";
            document.getElementById("verify").style.display="block";
            break;
    }       
}