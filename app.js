const radios = document.querySelectorAll("[name=radio]")//SELECT ALL RADIOS
const resultS = document.getElementById("resultS") // SELECT DIV RESULT 
var selectedValue = 4 //Make the default selectedValue = 4

function btnPressed(result) {

    //FOR LOOP TO GIVE US ALL THE RADIO INPUTS TO [i]
    for (var i = 0; i < radios.length; i++){

        // remove unwanted bg-selected
        document.getElementById("btn" + (i + 1)).classList.remove("bg-selected")

        // LOOP TO MARK RADIO + ADD BG-SELECTED
        if (result == parseInt(radios[i].value)){
            document.getElementById("btn" + (i + 1)).classList.add("bg-selected")
            radios[i].checked = true
            selectedValue = (i + 1)
        }
    }
}


function btnSubmit() {
    const mainForm = document.getElementById("main-card")
    mainForm.classList.add('hide')
    resultS.classList.remove('hide')
    const answer = document.getElementById("answer")
    answer.innerHTML = selectedValue
}