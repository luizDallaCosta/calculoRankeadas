let ranked = rankedBalance(150, 30)
let level;

function rankedBalance(victories, defeats){
    let result = victories - defeats
    return result

}

 if (ranked <=10){
      level = "Ferro"
    }
    else if(ranked >=11 && ranked <=20){
        level = "Bronze"
    }
    else if(ranked >=21 && ranked <=50){
        level = "Prata"
        }
    else if(ranked >=51 && ranked <=80){
        level = "Ouro"
    }
    else if(ranked >=81 && ranked <=90){
        level = "Diamante"
        }
    else if(ranked >=91 && ranked <=100){
        level = "Lendário"
    }
    else if(ranked >=100){
        level = "Imortal"
        }

    console.log("O Herói tem de saldo de " + ranked + " Vitórias e está no nível de " + level)