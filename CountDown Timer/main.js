const endDate = "14 feburary 2025 12:00 PM"

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate)
    const now =new Date()
    const diff = (end - now)/1000;
    //convert into days
    inputs[0].value= Math.floor (diff/3600/24);
    //convert into hours
    inputs[1].value= Math.floor (diff/3600)%24;
    //convert into minutes
    inputs[2].value= Math.floor (diff/60)%60;
    //convert into seconds
    inputs[3].value=Math.floor(diff)%60;
}
//intial call
clock();    

setInterval(
    ()=>{
        clock();
    },
    1000        
)