const vardi=['Kristaps Celms','Marta Puķe','Leonīds Āpsis','Laura Bērziņa','Markuss Kļava'];
const balvas=['1 bitcoin','NFT','Automašīna','5000 dogecoin','Planšetdators'];
const naudaKopa=1000000;// izlozes kopējā summa
let uzvaretajuSkaits=5;
let rindas=document.querySelector('.rindas');
rindas.innerHTML = '';
for (let i=0; i<uzvaretajuSkaits; i++){
    let rand=Math.random()*vardi.length;
    rand=Math.floor(rand);// noapaļo uz leju

    let uzvaretajs=vardi[rand];// izvada konsolē
    let ieguvums = balvas[rand];
    rindas.innerHTML += `
    <tr>
        <td>${i+1}</td>
        <td>${uzvaretajs}</td>
        <td>${ieguvums}</td>
      </tr>`
}
