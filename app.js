const radios = document.querySelectorAll("[name=radio]")//ALL RADIO BUTTONS

function btnPressed(rate) {
    // console.log("RADIOS::")
    // console.log(parseInt(radios[0].value))
    // console.log(typeof parseInt(radios[0].value))
    // console.log("RATES::")
    // console.log(rate)
    // console.log(typeof rate)
    // console.log("radios + rates =")
    // console.log(rate + parseInt(radios[0].value))



if (rate == parseInt(radios[0].value)){
        document.getElementById("r1").checked = true
        document.getElementById("btn1").classList.add("teste")
        document.getElementById("btn4").classList.remove("teste")

    } else if (rate == parseInt(radios[1].value)){
        document.getElementById("r2").checked = true
        document.getElementById("btn2").classList.add("teste")
        document.getElementById("btn4").classList.remove("teste")
    }




    
}








// if (rate == parseInt(radios[0].value)){
    //     document.getElementById("r1").checked = true
    //     document.getElementById("btn1").classList.add("teste")
    //     document.getElementById("btn4").classList.remove("teste")

    // } else if (rate == parseInt(radios[1].value)){
    //     document.getElementById("r2").checked = true
    //     document.getElementById("btn2").classList.add("teste")
    //     document.getElementById("btn4").classList.remove("teste")
    // }