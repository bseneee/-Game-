    //Тоглоом дууссан эсэхийг харуулах төлвийн хувьсагч
    var isNewGame;
    var activePlayer, score, roundScore;
    var diceDom=document.querySelector('.dice');
    initGame();

    //Шоог шидэх eventListener
    document.querySelector('.btn-roll').addEventListener("click",function(){
        if(isNewGame){
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
                    switchNextPlayer();
                }

        }
    });
    //Hold товчны eventListener
    document.querySelector('.btn-hold').addEventListener('click',function(){
        if(isNewGame){
            score[activePlayer]+=roundScore;
            document.getElementById('score-'+activePlayer).textContent=score[activePlayer];
       
            //Уг тоглогч хожсон эсэхийг шалгах
                if (score[activePlayer]>=100){
                    isNewGame=false;
                    document.getElementById('name-'+activePlayer).textContent="Winner!!!";
                    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
                }  else{
                    switchNextPlayer();
                }
                
        }
    });

    //Шинэ товч эхлүүлэх товчны eventListener
    document.querySelector('.btn-new').addEventListener('click',function(){
        initGame();
    });

    function initGame(){
            isNewGame=true;
           // Тоглогчийн ээлжийг хадгалах хувьсагч, 1 ээр тоглогчийг 0 Харин 2 дугаар тоглогчийг 1 
           activePlayer=0;
           // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
           score=[0,0];
           // Тоглогчийн ээлжин дээр цуглуулж байгаа оноог хадгалах хувьсагч
           roundScore=0;
        
        //Програм эхлэхэд бэлтгье
        document.querySelector('.dice').style.display="none";
        document.getElementById('score-0').textContent=0;
        document.getElementById('score-1').textContent=0;
        document.getElementById('current-0').textContent=0;
        document.getElementById('current-1').textContent=0;


         //Тоглогчдын нэрийг буцааж гаргах
         document.getElementById('name-0').textContent="Player 1";
         document.getElementById('name-1').textContent="Player 2";

         document.querySelector('.player-0-panel').classList.remove('winner');
         document.querySelector('.player-1-panel').classList.remove('winner');
         
         
         document.querySelector('.player-0-panel').classList.remove('active');
         document.querySelector('.player-1-panel').classList.remove('active');

         document.querySelector('.player-0-panel').classList.add('active');
  
        //Зургийг веб дээр харагдуулахгүй болгоно
        diceDom.style.display='none'
    }


    //Тоглох ээлжийг дараачийн тоглогчруу шилжүүлнэ
    function switchNextPlayer(){
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