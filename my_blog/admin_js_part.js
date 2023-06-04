console.log("This is my Job");


const view = window.innerHeight;
const current_mounth = document.querySelector("#mounth");
const year_of = document.querySelector('.year');
let list_itm = document.querySelector('.number_days');
const two_btn = document.querySelectorAll('.pr_btn');

const mounth_array = ["January","February","March","Aprile","May","June","Jully","Aguest","September","October","Novermber","December"];

let date = new Date();
let current_mounth_of_calandar = date.getFullYear();
let current_year = date.getMonth();
let date_today = date.getDate();
console.log(date_today);

console.log(current_mounth_of_calandar);


var date_1;
var xxx;

const render_calendar = ()=>{
    current_mounth.innerHTML = mounth_array[current_year];
    year_of.innerHTML = current_mounth_of_calandar;

    let last_date_of_mounth = new Date(current_mounth_of_calandar,current_year + 1,0).getDate();
    console.log(last_date_of_mounth);
    let litag = "";

    for(let i = 1; i<=last_date_of_mounth; i++){
        litag+=`<li class="as">${i}</li>`;
    }

    list_itm.innerHTML = litag;


        date_1 = document.querySelector('.number_days');
        xxx = date_1.childNodes[Number(date_today-1)].classList.add("active");
    
    console.log(litag);

}


render_calendar();

let c = current_year;

two_btn.forEach(icon=>{

    icon.addEventListener("click",()=>{

        if(icon.id ==="nt"){
            console.log("shehan Hansaja is moving into the next mounth");
            
            current_year = current_year + 1;
            render_calendar();

            if(c == current_year)
            {
                console.log("Now you are in the current mounth");
            }
            else{

                console.log("you are not in the current mounth");
                date_1.childNodes[Number(date_today-1)].classList.remove("active");
            }


        }
        else{

            console.log("shehan hansja is not moving");
            current_year = current_year - 1;
            render_calendar();
            if(c == current_year)
            {
                console.log("Now you are in the current mounth");
            }
            else{

                console.log("you are not in the current mounth");
                date_1.childNodes[Number(date_today-1)].classList.remove("active");
            }
        }
    })
})



