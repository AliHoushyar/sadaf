// let slectspan = document.getElementById("AirSelectSpan");
// slectspan.textContent = "انتخاب مبدأ";
// options = document.getElementsByClassName("AirSigleLink");

// let slectspan2 = document.getElementById("AirSelectSpan2");
// slectspan2.textContent = "انتخاب مقصد";
// options2 = document.getElementsByClassName("AirSigleLink2");

function change(n,whichapi){
    let sid = whichapi+"SelectSpan";
    let sid2 = whichapi+"SigleLink";
    let slectspan = document.getElementById(sid);
    options = document.getElementsByClassName(sid2);
    slectspan.textContent = options[n-1].textContent;
}

function change2(n,whichapi){
    let sid = whichapi+"SelectSpan2";
    let sid2 = whichapi+"SigleLink2";
    let slectspan = document.getElementById(sid);
    options = document.getElementsByClassName(sid2);
    slectspan.textContent = options[n-1].textContent;
}

function showoptions(whichapi) {
    let sid = whichapi+"OptDiv";
    var x = document.getElementById(sid);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function showoptions2(whichapi) {
    let sid = whichapi+"OptDiv2";
    var x = document.getElementById(sid);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function switchspan(whichapi) {
    let sid = whichapi+"SelectSpan";
    let sid2 = whichapi+"SelectSpan2";
    let slectspan = document.getElementById(sid);
    let slectspan2 = document.getElementById(sid2);
    let temp = slectspan2.textContent;
    slectspan2.textContent = slectspan.textContent;
    slectspan.textContent = temp;
}

let HoSetNum = document.getElementById("HoSetNumber");
let HoAdult = document.getElementById("HoAdultNum");
let HoKid = document.getElementById("HoKidNum");
let HoChild = document.getElementById("HoChildNum");
let HoAdultspan = document.getElementById("HoAdult");
let HoKidspan = document.getElementById("HoKid");
let HoChildspan = document.getElementById("HoChild");
let HoAdultnum = 1;
let HoKidnum = 0;
let HoChildnum = 0;
HoAdult.textContent = HoAdultnum+" "+"بزرگسال"+" ,";
HoKid.textContent = HoKidnum+" "+"کودک"+" ,";
HoChild.textContent = HoChildnum+" "+"نوزاد";
HoAdultspan.textContent = HoAdultnum;
HoKidspan.textContent = HoKidnum;
HoChildspan.textContent = HoChildnum;

function HoIncrease(what) {
    switch(what){
        case 'adult':
            if(HoAdultnum<9)
                HoAdultnum++;
            HoAdultspan.textContent = HoAdultnum;
            HoAdult.textContent = HoAdultnum+" "+"بزرگسال"+" ,";
            HoSetNum.style.opacity = 0;
            break;
        case 'kid':
            if(HoKidnum<9)
                HoKidnum++;
            HoKidspan.textContent = HoKidnum;
            HoKid.textContent = HoKidnum+" "+"کودک"+" ,";
            HoSetNum.style.opacity = 0;
            break;
        case 'child':
            if(HoChildnum<9)
                HoChildnum++;
            HoChildspan.textContent = HoChildnum;
            HoChild.textContent = HoChildnum+" "+"نوزاد";
            HoSetNum.style.opacity = 0;
            break;
    }
}

function HoDecrese(what) {
    switch(what){
        case 'adult':
            if(HoAdultnum>0)
                HoAdultnum--;
            HoAdultspan.textContent = HoAdultnum;
            HoAdult.textContent = HoAdultnum+" "+"بزرگسال"+" ,";
            HoSetNum.style.opacity = 0;
            break;
        case 'kid':
            if(HoKidnum>0)
                HoKidnum--;
            HoKidspan.textContent = HoKidnum;
            HoKid.textContent = HoKidnum+" "+"کودک"+" ,";
            HoSetNum.style.opacity = 0;
            break;
        case 'child':
            if(HoChildnum>0)
                HoChildnum--;
            HoChildspan.textContent = HoChildnum;
            HoChild.textContent = HoChildnum+" "+"نوزاد";
            HoSetNum.style.opacity = 0;
            break;
    }
}

function HoShowSetNumber(){
    if(HoSetNum.style.opacity == 0){
        HoSetNum.style.opacity = 1;
        HoSetNum.style.pointerEvents = "all";
    }
    else{
        HoSetNum.style.opacity = 0;
        HoSetNum.style.pointerEvents = "none";
    }
}