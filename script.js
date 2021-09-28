var dobInput = document.getElementById("dob");
var favnumInput = document.getElementById("favnum");
var btnCheck = document.getElementById("btn-check");
var btnReset = document.getElementById("btn-reset");
var privacy = document.querySelector(".privacy");
var btnClose = document.getElementById("close");
var warning = document.querySelector(".warning");
var luckySection = document.querySelector(".lucky-div");
var unluckySection = document.querySelector(".unlucky-div");

btnCheck.addEventListener("click",()=>{
    if(favnumInput.value <= 0 || dobInput.value === "" || favnumInput.value === "")
    {
        warning.style.display = "block";
        luckySection.style.display = "none";
        unluckySection.style.display = "none";
    }
    else
    {
        warning.style.display = "block";
    var dob =parseInt(dobInput.value.replace(/-/g,""));
    var sum = 0;
    var dateLength = dob.toString().length;
    for (var i = 0; i <dateLength; i++ )
    {
        sum = sum + (dob % 10)
        dob = Math.floor(dob /10);

    }

        if (sum % favnumInput.value == 0)
        {
           luckySection.style.display = "block";
           unluckySection.style.display = "none";
           warning.style.display = "none";
        }    
        else{
            unluckySection.style.display = "block";
            luckySection.style.display = "none";
            warning.style.display = "none";
        }
    }

})



btnClose.addEventListener("click",()=>{
    privacy.style.display = "none";
})


btnReset.addEventListener("click",()=>{
    privacy.style.display = "block";
    dobInput.value = "";
    favnumInput.value = "";
    warning.style.display = "none";
    luckySection.style.display = "none";
    unluckySection.style.display = "none";
})