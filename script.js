class Character {
    constructor(name, type, age, specialSkill, healthPoints, status){
        this.name = name;
        this.type = type;
        this.age = age;
        this.specialSkill = specialSkill;
        this.healthPoints  = healthPoints;
        this.status = status;   
    }
    
     attack(){
        var damage = Math.floor(Math.random() * 35) + 20;
        return damage;
    }

     introduction(){
        return this.name + " is type " + this.type + " and is " + this.age +" years old"
    }
}


class Boss extends Character{
    constructor(name, type, age, specialSkill, healthPoints, status, level, attack_points) {
        super(name, type, age, specialSkill, healthPoints, status);
        this.level = level;
        this.attack_points = attack_points;
    }
    
     bossAttack(){
        this.attack_points+=5;
    }
}



const Player = new Character("Lessly", "Water", 100, "kicking", 10, true);

const Villan = new Boss("Mochi", "Grass", 100, "biting", 10, true, 2, 1);

// // 7. set up a function that runs a battle sequence between your boss and your character.

//  function PlayGame(Player, Villan){
//     console.log("<<<<---- Play Game ---->>>>");
//     console.log("(You) " + Player.introduction() + "\n" + Villan.introduction());
//     console.log(Villan.name + " has challenged you to a duel.\nYour honor is at stake & you accept the duel. \nMay the best fighter win.");
     
//      while (Player.healthPoints != 0 || Villan.healthPoints != 0){
//         console.log("Current points->\n" + Player.name +": "+ Player.healthPoints + "\n" +  Villan.name +": "+ Villan.healthPoints);

         
//         //Boss attacks 1st
//         Player.healthPoints += (-1* Villan.attack());
//         Villan.bossAttack();
//         console.log(Villan.name + " has used" + Villan.specialSkill);
//         //Player attacks 2nd
//         Villan.healthPoints += (-1* Player.attack());
//         console.log(Player.name + " has used" + Player.specialSkill);
         
//      }

// }



// PlayGame(Player, Villan)