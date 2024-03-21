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