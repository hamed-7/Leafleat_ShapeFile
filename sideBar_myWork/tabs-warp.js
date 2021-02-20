const EL =document.querySelector('.tab-wrap');
const el = document.querySelectorAll('.tab');
console.log(el)
console.log(EL)

el[1].onclick = () => {el[1].classList.toggle('active'); EL.classList.toggle('tab-warp-trans');} ;
el[2].onclick = () => {el[2].classList.toggle('active'); EL.classList.toggle('tab-warp-trans');} ;
el[0].onclick = () => { el[0].classList.toggle('active'); EL.classList.toggle('tab-warp-trans');};