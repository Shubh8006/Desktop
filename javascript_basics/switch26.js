// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// shift+alt+down arrow for duplicating.

const month =3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("No match found");
        break;
}
//** if there is no break between the cases, then compiler print all the cases except default.