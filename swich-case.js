function getDrinkByProfession(param) {
    param = param.toLowerCase();

    switch(param) {
        case "jabroni": return "Patron Tequila";
        case "school counselor": return "Anything with Alcohol";
        case "programmer": return "Hipster Craft Beer";
        case "bike gang member": return "Moonshine";
        case "politician": return	"Your tax dollars";
        case "rapper": return "Cristal";
        default: return "Beer";
    }
}


function whatday(num) {

    switch (num)  {
        case 1 : return "Sunday";
        case 2 : return "Monday";
        case 3 : return "Tuesday";
        case 4 : return "Wednesday";
        case 5 : return "Thursday";
        case 6 : return "Friday";
        case 7 : return "Saturday";
        default: return "Wrong, please enter a number between 1 and 7";

    }
}

function whatday(num) {
    return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][num-1]||'Wrong, please enter a number between 1 and 7'
}

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
Dad = _ => { return d1+a2+d2; }
Bee = _ => { return b1+e2+e2; }
banana = _ => { return b2+a2+n2+a2+n2+a2; }
answer1 = _ => { return "no"; }
answer2 = _ => { return "no"; }
answer3 = _ => { return "yes"; }