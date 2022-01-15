function verificar() {
    var data = new Date()
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    var pic = document.querySelector('div#pic');
    var error = document.querySelector('div#error');

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('VERIFIQUE ENTRE OS ANOS 2000 E 2001')
    }else{
       var idade = ano - Number(fano.value);
       var img = document.createElement('img');
       img.setAttribute('id', 'foto');

       if(fano != ano){
           if (idade == 22){
               //CRIANÇA
               img.setAttribute('src', 'imagens/2000.png');
               anime = "Yu-Gi-Oh!";
               var erro = "";
               li1 = "Digimon Adventure 02";
               li2 = "Hajime no Ippo";
               li3 = "Hamtaro";
               li4 = "Inuyasha";
           }else if (idade == 21){
               //JOVEM
               img.setAttribute('src', 'imagens/2001.png');
               anime = "Dimon Tamers"
               var erro = "";
               li1 = "Fruits Basket";
               li2 = "Shaman King";
               li3 = "Beyblade";
               li4 = "Hellsing";
           }else if (idade == 20){
               //ADULTO
               img.setAttribute('src', 'imagens/2002.png');
               anime = "Naruto"
               var erro = "";
               li1 = "Duel Masters";
               li2 = "Bomberman Jetters";
               li3 = "Chobits";
               li4 = "Digimon Frontier";
            }else if (idade == 19){
                //ADULTO
                img.setAttribute('src', 'imagens/2003.png');
                anime = "Zatch Bell!"
                var erro = "";
               li1 = "Fullmetal Alchemist";
               li2 = "Sonic X";
               li3 = "Planetes";
               li4 = "Parasite Dolls";
            }else if (idade == 18){
                //ADULTO
                img.setAttribute('src', 'imagens/2004.png');
                anime = "Bleach"
                var erro = "";
                li1 = "Yu-Gi-Oh! GX";
                li2 = "Samurai Champloo";
                li3 = "Elfen Lied";
                li4 = "Monster";
            }else if (idade == 17){
                //ADULTO
                img.setAttribute('src', 'imagens/2005.png');
                anime = "Fate/Stay Night"
                var erro = "";
                li1 = "Basilisk";
                li2 = "Doraemon ";
                li3 = "";
                li4 = "";
            }else if (idade == 16){
                //ADULTO
                img.setAttribute('src', 'imagens/2006.png');
                anime = "Death Note"
                var erro = "";
                li1 = "Digimon Data Squad";
                li2 = "Air Gear";
                li3 = "As Meninas Superpoderosas: Geração Z";
                li4 = "Code Geass";
            }else if (idade == 15){
                //ADULTO
                img.setAttribute('src', 'imagens/2007.png');
                anime = "Afro Samurai"
                var erro = "";
                li1 = "Naruto: Shippuden";
                li2 = "Gurren Lagann";
                li3 = "Claymore";
                li4 = "Bakugan Battle Brawlers";
            }else if (idade == 14){
                //ADULTO
                img.setAttribute('src', 'imagens/2008.png');
                anime = "Inazuma Eleven"
                var erro = "";
                li1 = "Yu-Gi-Oh! 5D's";
                li2 = "To Love-Ru";
                li3 = "";
                li4 = "";
            }else if (idade == 13){
                //ADULTO
                img.setAttribute('src', 'imagens/2009.png');
                anime = "Fullmetal Alchemist: Brotherhood"
                var erro = "";
                li1 = "Pandora Hearts";
                li2 = "K-On!";
                li3 = "Beyblade: Metal Fusion";
                li4 = "Bakemonogatari";
            }else if (idade == 12){
                //ADULTO
                img.setAttribute('src', 'imagens/2010.png');
                anime = "Bakuman"
                var erro = "";
                li1 = "Durarara!!";
                li2 = "Angel Beats!";
                li3 = "Digimon Fusion";
                li4 = "Highschool of the Dead";
            }else if (idade == 11){
                //ADULTO
                img.setAttribute('src', 'imagens/2011.png');
                anime = "Hunter X Hunter"
                var erro = "";
                li1 = "Steins;Gate";
                li2 = "Fate/Zero";
                li3 = "B-Daman Crossfire";
                li4 = "Beyblade: Metal Fury";
            }else if (idade == 10){
                //ADULTO
                img.setAttribute('src', 'imagens/2012.png');
                anime = "Sword Art Online"
                var erro = "";
                li1 = "Psycho-Pass";
                li2 = "Kuroko's Basketball";
                li3 = "Saint Seiya Omega";
                li4 = "Another";
            }else if (idade == 9){
                //ADULTO
                img.setAttribute('src', 'imagens/2013.png');
                anime = "Attack on Titan"
                var erro = "";
                li1 = "Noragami";
                li2 = "Kill la Kill";
                li3 = "Free!";
                li4 = "Magi: The Kingdom of Magic";
            }else if (idade == 8){
                //ADULTO
                img.setAttribute('src', 'imagens/2014.png');
                anime = "Parasyte: The Maxim"
                var erro = "";
                li1 = "Barakamon";
                li2 = "Tokyo Ghoul";
                li3 = "Free! Eternal Summer";
                li4 = "World Trigger";
            }else if (idade == 7){
                //ADULTO
                img.setAttribute('src', 'imagens/2015.png');
                anime = "Shokugeki no Soma"
                var erro = "";
                li1 = "One Punch Man";
                li2 = "Tokyo Ghoul √A";
                li3 = "Dungeon ni Deai";
                li4 = "Death Parade";
            }else if (idade == 6){
                //ADULTO
                img.setAttribute('src', 'imagens/2016.png');
                anime = "Mob Psycho 100"
                var erro = "";
                li1 = "Erased";
                li2 = "Re:Zero";
                li3 = "Sangatsu no Lion";
                li4 = "Joker Game";
            }else if (idade == 5){
                //ADULTO
                img.setAttribute('src', 'imagens/2017.png');
                anime = "Made in Abyss"
                var erro = "";
                li1 = "Blend S";
                li2 = "Eromanga-sensei";
                li3 = "Gamers";
                li4 = "Ballroom e Youkoso";
            }else if (idade == 4){
                //ADULTO
                img.setAttribute('src', 'imagens/2018.png');
                anime = "Banana Fish"
                var erro = "";
                li1 = "Golden Kamuy";
                li2 = "Pop Team Epic";
                li3 = "Violet Evergarden";
                li4 = "Darling in the Franxx";
            }else if (idade == 3){
                //ADULTO
                img.setAttribute('src', 'imagens/2019.png');
                anime = "Dr. Stone"
                var erro = "";
                li1 = "Fire Force";
                li2 = "The Rising of the Shield Hero";
                li3 = "The Promised Neverland";
                li4 = "Vinland Saga";
            }else if (idade == 2){
                //ADULTO
                img.setAttribute('src', 'imagens/2020.png');
                anime = "Jujutsu Kaisen"
                var erro = "";
                li1 = "Tonikaku Kawai";
                li2 = "Beastars";
                li3 = "Great Pretender";
                li4 = "Haikyuu!! To the Top";
            }else if (idade == 1){
                //ADULTO
                img.setAttribute('src', 'imagens/2021.png');
                anime = "Tokyo Revengers"
                var erro = "";
                li1 = "Mushoku Tensei";
                li2 = "Komi Can't Communicate";
                li3 = "JoJo: Stone Ocean";
                li4 = "To Your Eternity";
           }else {
               //IDOSO
               img.setAttribute('src', 'imagens/erro.png');
               anime = `[ERRO]`;
               idade = `[ERRO]`;
               erro = "Estamos aprimorando o site, enquanto isso, verique entre os anos 2000 e 2021"
           }

       }
       res.style.textAlign = 'center';
       res.style.fontSize = '20px';
       list.style.padding = "8px";
       list.style.textAlign = 'center';
       list.style.fontSize = '22px';
       if (idade > 0 && idade < 23){
            res.innerHTML = `Estreou ${anime} há aproximadamente ${idade} anos!`;
            list.innerHTML = `Outras recomendações de animes lançados neste mesmo ano:`;
            
       } else {
        res.innerHTML = ``;
        list.innerHTML = ``;
        erro = "Estamos aprimorando o site, enquanto isso, verique entre os anos 2000 e 2021";
        li1 = "";
        li2 = "";
        li3 = "";
        li4 = "";
       }
       error.innerHTML = `${erro}`;
       error.style.textAlign = 'center';
       error.style.fontSize = '20px';
       pic.style.textAlign = 'center';
       pic.innerHTML = ``;
       pic.appendChild(img)
       lil.innerHTML = `<ul><li>${li1}<li>${li2}</li><li>${li3}</li><li>${li4}</li></li></ul>`;
       lil.style.fontStyle = "italic";
       lil.style.justifyContent = "center";
      
    }
}