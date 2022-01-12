var anime = "Yu-Gi-Oh!";




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
           }else if (idade == 21){
               //JOVEM
               img.setAttribute('src', 'imagens/2001.png');
               anime = "Dimon Tamers"
               var erro = "";
           }else if (idade == 20){
               //ADULTO
               img.setAttribute('src', 'imagens/2002.png');
               anime = "Naruto"
               var erro = "";
            }else if (idade == 19){
                //ADULTO
                img.setAttribute('src', 'imagens/2003.png');
                anime = "Zatch Bell!"
                var erro = "";
            }else if (idade == 18){
                //ADULTO
                img.setAttribute('src', 'imagens/2004.png');
                anime = "Bleach"
                var erro = "";
            }else if (idade == 17){
                //ADULTO
                img.setAttribute('src', 'imagens/2005.png');
                anime = "Fate/Stay Night"
                var erro = "";
            }else if (idade == 16){
                //ADULTO
                img.setAttribute('src', 'imagens/2006.png');
                anime = "Death Note"
                var erro = "";
            }else if (idade == 15){
                //ADULTO
                img.setAttribute('src', 'imagens/2007.png');
                anime = "Afro Samurai"
                var erro = "";
            }else if (idade == 14){
                //ADULTO
                img.setAttribute('src', 'imagens/2008.png');
                anime = "Inazuma Eleven"
                var erro = "";
            }else if (idade == 13){
                //ADULTO
                img.setAttribute('src', 'imagens/2009.png');
                anime = "Fullmetal Alchemist: Brotherhood"
                var erro = "";
            }else if (idade == 12){
                //ADULTO
                img.setAttribute('src', 'imagens/2010.png');
                anime = "Bakuman"
                var erro = "";
            }else if (idade == 11){
                //ADULTO
                img.setAttribute('src', 'imagens/2011.png');
                anime = "Hunter X Hunter"
                var erro = "";
            }else if (idade == 10){
                //ADULTO
                img.setAttribute('src', 'imagens/2012.png');
                anime = "Sword Art Online"
                var erro = "";
            }else if (idade == 9){
                //ADULTO
                img.setAttribute('src', 'imagens/2013.png');
                anime = "Attack on Titan"
                var erro = "";
            }else if (idade == 8){
                //ADULTO
                img.setAttribute('src', 'imagens/2014.png');
                anime = "Parasyte: The Maxim"
                var erro = "";
            }else if (idade == 7){
                //ADULTO
                img.setAttribute('src', 'imagens/2015.png');
                anime = "Shokugeki no Soma"
                var erro = "";
            }else if (idade == 6){
                //ADULTO
                img.setAttribute('src', 'imagens/2016.png');
                anime = "Mob Psycho 100"
                var erro = "";
            }else if (idade == 5){
                //ADULTO
                img.setAttribute('src', 'imagens/2017.png');
                anime = "Made in Abyss"
                var erro = "";
            }else if (idade == 4){
                //ADULTO
                img.setAttribute('src', 'imagens/2018.png');
                anime = "Banana Fish"
                var erro = "";
            }else if (idade == 3){
                //ADULTO
                img.setAttribute('src', 'imagens/2019.png');
                anime = "Dr. Stone"
                var erro = "";
            }else if (idade == 2){
                //ADULTO
                img.setAttribute('src', 'imagens/2020.png');
                anime = "Jujutsu Kaisen"
                var erro = "";
            }else if (idade == 1){
                //ADULTO
                img.setAttribute('src', 'imagens/2021.png');
                anime = "Tokyo Revengers"
                var erro = "";
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
       res.innerHTML = `Estreou ${anime} há aproximadamente ${idade} anos!`;
       error.innerHTML = `${erro}`;
       error.style.textAlign = 'center';
       error.style.fontSize = '20px';
       pic.style.textAlign = 'center';
       pic.innerHTML = ``;
       pic.appendChild(img)
    }
}