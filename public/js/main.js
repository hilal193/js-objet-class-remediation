// 1
// let personnage = {
//     nom: "hilal",
//     prenom: "hilalK",
//     argent: 2,
//     lieu: "bruxelles",
//     humeur: "",
//     changeHumeur() {
//         this.humeur=Math.floor((Math.random() * 2));
//         // console.log(this.humeur);
//         if (this.humeur == 0) {
//             return(this.humeur = "bien"); 
//         } else{
//             return(this.humeur = "mal"); 
//         }
//     }
//     // ,
//     // deplacement(lieuTravail){
//     //     return this.lieu= lieuTravail;
//     // },
//     // gagneArgent(){
//     //     if (this.humeur=="mal") {
//     //         for (let index = 0; index < 8; index++) {
//     //             this.argent = this.argent+10;
//     //         }
//     //         return `vous avez travailler 8 heures  et vous avez gagner 10€ l'heure. vous avez ${this.argent}€ en poche`;
//     //     }else if (this.humeur=="bien") {
//     //         for (let index = 0; index < 8; index++) {
//     //             this.argent = this.argent+15;
//     //         }
//     //         return `vous avez travailler 8 heures et vous avez gagner 15€ l'heure. vous avez ${this.argent}€ en poche`;
//     //     }
//     // }
//     // ,
//         // bonus(){
//         //     if (this.humeur=="bien") {
//         //         setInterval(()=>{
//         //             console.log("J'aime mon travail");
//         //         },2000)
//         //     }
//         //     else if (this.humeur=="mal") {
//         //         setInterval(()=>{
//         //         console.log("je préfére mon lit");
//         //         },2000)
//         //     }
//         // }
// }
// let deplacement= (lieuTravail) =>{
//     personnage.lieu= lieuTravail;
// }

// // let gagneArgent=()=>{
// //     if (personnage.humeur=="mal") {
// //         for (let index = 0; index < 8; index++) {
// //             personnage.argent = personnage.argent+10;
// //         }
// //         return `vous avez travailler 8 heures  et vous avez gagner 10€ l'heure. vous avez ${personnage.argent}€ en poche`;
// //     }else if (personnage.humeur=="bien") {
// //         for (let index = 0; index < 8; index++) {
// //             personnage.argent = personnage.argent+15;
// //         }
// //         return `vous avez travailler 8 heures et vous avez gagner 15€ l'heure. vous avez ${personnage.argent}€ en poche`;
// //     }
// // }

// console.log(personnage.changeHumeur());
// console.log(personnage.humeur);

// let bonus=()=>{
//     console.log(personnage.humeur);
//     if (personnage.humeur=="bien") {
//         setInterval(()=>{
//             console.log("J'aime mon travail");
//         },2000)
//     }
//     else if (personnage.humeur=="mal") {
//         setInterval(()=>{
//         console.log("je préfére mon lit");
//         },2000)
//     }
// }
// // personnage.deplacement("anvers");

// // deplacement("anvers");
// // console.log(personnage.lieu);

// // console.log(personnage.gagneArgent());
// // gagneArgent();

// // console.log(gagneArgent());
// bonus()
// console.log("Mon fric : " + personnage.argent + " € ");
// // console.log(personnage.bonus());



 
// 2  
let estVrai=true;

class LeeGofGeek{
constructor(nom,pouvoir,degat,santé){
    this.nom=nom;
    this.pouvoir=pouvoir;
    this.degat=degat;
    this.santé=santé;
    this.bonus=["VieFull","dead","null"];
    this.isTrue = true;
}
attaqueBasic(a){
      if (a==15) {
        dragon.santé= dragon.santé-15;
        return "hero lance son attaque! les pv du dragon sont à  "+dragon.santé;
    }else if (a==25) {
        hero.santé=hero.santé-25;
        return "dragon lance son attaque! les pv du dragon sont à "+ hero.santé ;
    }
}
attaqueSpecial(b){
    if (b==15) {
        dragon.santé= dragon.santé-35;
        hero.santé= hero.santé-15;
        return "hero lance son attaque special! les pv du dragon sont à  "+dragon.santé;
    }else if (b==25) {
        hero.santé= hero.santé-45;
        dragon.santé= dragon.santé-25;
        return "dragon lance son attaque special! les pv du dragon sont à "+ hero.santé ;
    }
}

auto_save(){
    // console.log(tu as this.);
    if (this.isTrue) {
        this.sante += 35;
        
    }

}
joker(){
    if (this.santé<15) {
        if (this.bonus=="vieFull") {
            
        }else if (this.bonus=="dead") {
            
        }else if (this.bonus=="null") {
            
        }
    }
}
}

let hero = new LeeGofGeek("hero","archer",15,100,"bonus");
let dragon = new LeeGofGeek("dragon","monstre",25,100,"bonuss");
console.log(dragon.attaqueBasic(dragon.degat));

console.log(hero.attaqueBasic(hero.degat));


dragon.auto_save()
console.log("hero lance son attaque special "+hero.attaqueSpecial(hero.degat));


console.log("pv dragon :"+dragon.santé);
console.log("pv hero: "+hero.santé);


// extra
// // // EXO BONUS
// let personnage = {
//     identite: {
//         nom: "Caliskan",
//         prenom: "Ayhan"
//     },
//     argent: 0,
//     lieu: "Maison",
//     humeur: "",
//     changeHumeur() {
//         let random = Math.trunc(Math.random() * 10) + 1
//         // console.log(random);
//         if (random % 2 == 0) {
//             this.humeur = "positif"
//         } else {
//             this.humeur = "negatif"
//         }
//     }
// }
// let personnage2 = {
//     identite: {
//         nom: "Caliskan",
//         prenom: "Ayhan"
//     },
//     argent: 0,
//     lieu: "Maison",
//     humeur: "",
//     changeHumeur() {
//         let random = Math.trunc(Math.random() * 10) + 1
//         // console.log(random);
//         if (random % 2 == 0) {
//             this.humeur = "positif"
//         } else {
//             this.humeur = "negatif"
//         }
//     }
// }

// const deplacer = (a, b) => {
//     a.lieu = b
// }


// const money = () => {
//     if (personnage.humeur == "positif") {
//         for (let i = 0; i < 8; i++) {
//             personnage.argent += 15
//             // personnage.argent = personnage.argent + 15
//             console.log(`${i+1} J'aime mon travail`);
//         }
//         // for (let i = 0; i <= 8; i+=2) {
//         // }
//     } else {
//         for (let i = 0; i < 8; i++) {
//             personnage.argent += 10
//             console.log(`${i+1} Je préfère mon lit`);
//         }
//         // for (let i = 0; i <= 8; i+=2) {
//         // }
//     }
// }

// // Récit
// personnage.changeHumeur()
// console.log(`L'humeur du personnage est: ${personnage.humeur}`);

// deplacer(personnage, `${personnage.identite.prenom} se deplace à son lieu de travail`)
// console.log(personnage.lieu);

// money()
// console.log(`${personnage.identite.prenom} est d'humeur ${personnage.humeur} ducoup il gagne :${personnage.argent} €`);

// deplacer('maison')
// console.log(personnage);


//CLASS
// class LeegOfGeek {
//     constructor(nom, pouvoir, degat) {
//         this.nom = nom;
//         this.pouvoir = pouvoir;
//         this.degat = degat;
//         this.sante = 10;
        
//         ///
//         this.isExecute = true;
//         this.bonus = ["VieFull", "Dead", "Null"]

//         /// méthode
//         this.attaqueBasic = (a) => {
//             a.sante -= this.degat
//         };
//         this.attaqueSpecial = (a) => {
//             a.sante -= 35
//             this.sante -= 15
//         }
//         this.autoSave = () => {
//             if (this.isExecute) {
//                 this.sante += 35
//                 this.isExecute = false
//                 console.log(`${this.nom} a utilisé auto save. Par conséquent vous perdez le pouvoir d'utiliser le joker`);
//             }else {
//                 console.log(`AutoSave non disponible pour ${this.nom}`)
//             }
//         }
//         this.joker = (a) => {
//             if (this.isExecute) {
//                 if (this.sante <= 15) {
//                     let random = Math.trunc(Math.random() * 3)
//                     switch (this.bonus[random]) {
//                         case "VieFull":
//                             this.sante = 100
//                             console.log(`Bravo, ${this.nom} a acces à la vie full. Vous recupez la totalité de vos pouvoir`);
//                             break;
//                         case "Dead":
//                             a.sante = 0
//                             console.log(`Bravo, ${this.nom} a acces à Dead. Votre ennemie tombe à 0 points de vie`);
//                             break;
//                         default:
//                             console.log(`La chance ne vous souri pas ${this.nom}, vous ne gagner rien`);
//                             break;
//                     }
//                     this.isExecute = false

//                 } else {
//                     console.log(`${this.nom} vous avez encore ${this.sante} point. Vous devez etre à 15point pour avoir acces`);
//                 }
//             } else {
//                 console.log(`Joker non disponnible`);
//             }
//         }
//     }
// }


// //instence = créeer d'objet

// let ayhan = new LeegOfGeek('ayhan', 'Ocean', 15);
// let elias = new LeegOfGeek('elias', 'Soleil', 15);

// elias.joker(ayhan);
// elias.autoSave();
// console.log(elias);
// // anderlecht.joker(molengeek);


