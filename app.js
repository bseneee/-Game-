// Тоглогчийн ээлжийг хадгалах хувьсагч, 1 ээр тоглогчийг 0 Харин 2 дугаар тоглогчийг 1 
var activePlayer=0;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var score=[0,0];
// Тоглогчийн ээлжин дээр цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore=0;


//Програм эхлэхэд бэлтгье
document.querySelector('.dice').style.display="none";
document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;

var diceDom=document.querySelector('.dice');
//Зургийг веб дээр харагдуулахгүй болгоно
diceDom.style.display="none";

//Шоог шидэх eventListener
document.querySelector('.btn-roll').addEventListener("click",function(){
    //1-6 хүртэлх санамсаргүй буулт
    var diceNumber=Math.floor(Math.random()*6)+1;
    //Шооны зургийг веб дээр гаргаж ирнэ
    diceDom.style.display="block";
    //Буусан санамсаргүй тоонд харгалзах зургийг веб дээр гаргаж ирнэ.
    diceDom.src='dice-'+diceNumber+'.png';

    //Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн оноог нэмэгдүүлнэ.
    if(diceNumber!==1){
        //1 ээс ялгаатай тоо буулаа Буусан тоог тоглогчид нэмж өгнө.
        roundScore+=diceNumber;
        document.getElementById('current-'+activePlayer).textContent=roundScore;
    }else{
        //1 буусан тул тоглогчийн ээлжин дээр цуглуулсан оноог 0 болгоно
        document.getElementById('current-'+activePlayer).textContent=0;
        //Улаан цэгийг арилгана
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        //Тоглогчийн ээлжийг энэ хэсэгт сольж өгнө
        activePlayer=(activePlayer===1)?0:1;
        //Улаан цэгийг нэмнэ
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
        //Шоог түр алга болгоно
        diceDom.style.display='none';
        //
        roundScore=0;
    }

});
