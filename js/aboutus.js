const solutionsTray = document.querySelectorAll(".solutions-tray")

solutionsTray.forEach(solution => {
    solution.addEventListener('click',(e)=>{
        solutionsTray.forEach(s => {
            if(solution !== s){
                s.classList.remove("active");
            }
        })
        solution.classList.toggle("active");
    })
});