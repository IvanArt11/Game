(()=>{"use strict";var e={d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{I:()=>u});let t=0,a=[];const n=e=>{switch(e){case 1:return"spades";case 2:return"hearts";case 3:return"diamonds";case 4:return"clubs";default:return"error"}},s=e=>{switch(e){case 6:return"six";case 7:return"seven";case 8:return"eight";case 9:return"nine";case 10:return"ten";case 11:return"jack";case 12:return"queen";case 13:return"king";case 14:return"ace";default:return"error"}},r=()=>{let e={value:"",nod:null},t={value:"",nod:null};const a=document.querySelector(".new-game");a.classList.add("new-game--active"),a.addEventListener("click",(()=>{u("Difficulty")}));const n=document.querySelector(".timer__counter--min"),s=document.querySelector(".timer__counter--sec");let r="",l="";setInterval((()=>{r=Number(s.innerHTML)+1,r<60?s.innerHTML=Number(r)<10?"0"+r:r:(l=Number(n.innerHTML)+1,n.innerHTML=Number(l)<10?"0"+l:l,s.innerHTML="00")}),1e3),document.querySelectorAll(".game__card").forEach((a=>{a.addEventListener("click",(()=>{"open"!==a.dataset.status&&(a.setAttribute("src",`../../assets/images/${a.dataset.value}.jpg`),e.value?(t.value=a.dataset.value,t.nod=a,((e,t)=>{e.value!==t.value?(alert("Вы проиграли"),u("Difficulty")):(e.nod.setAttribute("data-status","open"),t.nod.setAttribute("data-status","open"),(()=>{const e=document.querySelectorAll(".game__card");for(let t of e)if("open"!==t.dataset.status)return!1;return!0})()?(alert("Вы победили"),u("Difficulty")):(e.value="",e.nod=null,t.value="",t.nod=null))})(e,t)):(e.value=a.dataset.value,e.nod=a))}))}))},l=e=>{let t="",r="";for(let l=0;l<e/2;l++){do{t=s(Math.floor(9*Math.random())+6),r=n(Math.floor(4*Math.random())+1)}while(a.includes(`<img data-value="${t}-of-${r}" class="game__card" src="../../assets/images/${t}-of-${r}.jpg" alt="card"/>`));let l=`<img data-value="${t}-of-${r}" class="game__card" src="../../assets/images/${t}-of-${r}.jpg" alt="card"/>`;a.push(l);let i=Math.floor(Math.random()*e)+1,c=!1;for(;!c;)a[i]?i===e?i=1:i++:(a[i]=l,c=!0)}setTimeout((()=>{document.querySelectorAll(".game__card").forEach((e=>{e.setAttribute("src","../../assets/images/dealer-shirt.jpg")}))}),5e3)},i=document.getElementById("root");let c="Difficulty";const u=e=>{c=e,d()},d=()=>{switch(c){case"Difficulty":(e=>{t=0,e.innerHTML='\n  <div class="container">\n    <div class="difficulty">\n      <h2 class="difficulty__text">Выбери сложность</h2>\n      <form class="difficulty__form">\n        <div class="difficulty__value-wrap">\n          <label class="difficulty__value">\n            <input type="radio" name="difficulty" value="1">\n            <span>1</span>\n          </label>\n          <label class="difficulty__value">\n            <input type="radio" name="difficulty" value="2">\n            <span>2</span>\n          </label>\n          <label class="difficulty__value">\n            <input type="radio" name="difficulty" value="3">\n            <span>3</span>\n          </label>\n        </div>\n        <button type="submit" class="difficulty__start">Старт</button>\n      </form>\n      </div>\n  </div>\n',document.querySelector(".difficulty__form").addEventListener("submit",(e=>{e.preventDefault();const a=document.querySelectorAll('.difficulty__value input[type="radio"]');for(let e of a)if(e.checked){t=e.value,u("Game");break}t||alert("выберите сложность")}));const a=document.querySelectorAll(".difficulty__value"),n=document.querySelector(".difficulty__start");a.forEach((e=>{e.addEventListener("click",(()=>{n.classList.add("new-game--active"),document.querySelector(".difficulty__value--active")?.classList.remove("difficulty__value--active"),e.classList.add("difficulty__value--active")}))}))})(i);break;case"Game":(e=>{switch(a=[],t){case"1":l(6);break;case"2":l(12);break;case"3":l(18)}e.innerHTML=`\n    <div class="container">\n        <div class="game">\n            <div class="header">\n                <div class="timer">\n                    <div class="timer__text">\n                        <div class="timer__text-min">min</div>\n                        <div class="timer__text-sec">sec</div>\n                    </div>\n                    <div class="timer__counter">\n                    <span class="timer__counter--min">00</span>.<span class="timer__counter--sec">00</span></div>\n                </div>\n                <button class="new-game">Начать заново</button>\n            </div>\n            <main class="game-wrap">\n                <div class="game__field">\n                    ${a.map((e=>e)).join("")}\n                </div>\n            </main>\n        </div>\n    </div>\n  `,setTimeout(r,5e3)})(i);break;default:console.log("404")}};d()})();