
let showVal = "";
let result = "";

function insert(valueForShow) {

    if (Number.isFinite(result) || result === "ERROR") {
        clean()
    }


    showVal += valueForShow === '*' ? 'x' : valueForShow;
    result += valueForShow;



    document.querySelector("#showVal").innerHTML = showVal;

}


function equals() {

    try {

        if (result === "" || result === "ERROR") {
            clean()

        } else {
            Number(result)
            result = eval(result)
            document.querySelector("#showVal").innerHTML = result;
        }

    } catch (error) {
        result = "ERROR";
        document.querySelector("#showVal").innerHTML = result;
    }

}



function clean() {
    showVal = "";
    result = "";
    document.querySelector("#showVal").innerHTML = 0;

}

function back() {

    if (Number.isFinite(result) || result === "ERROR") {
        clean()

    } else {
        showVal = showVal.slice(0, -1)
        result = result.slice(0, -1)
        document.querySelector("#showVal").innerHTML = showVal;
    }


}

