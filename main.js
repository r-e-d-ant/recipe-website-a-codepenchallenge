

const accordian = document.getElementById('accordian');
const insideAccordian = document.getElementById('insideAccordian');

accordian.addEventListener('click', () => {
    if(insideAccordian.style.display === "block"){
        console.log(insideAccordian.style.display)
        insideAccordian.style.display = "none";
    }else {
        accordian.classList.toggle('active')
        console.log(insideAccordian.style.display)
        insideAccordian.style.display = "block";
    }
})

