
function changeMood() {
    for(let i = 0; i < monsters.length; i++) {
    if(monsters[i].mood == "Glad") {
    monsters[i].mood = "Sint";
        console.log();

    }
    
    }
    updateView();
}

function removeMonster() {
    for(let i = 0; i < monsters.length; i++) {
        if(monsters[i].strength < 500) {
        monsters.splice(i,1);
        }
    
    
    }
    updateView();
    }


// - Controller: Lag funksjoner for å:
// Få alle monstre til å bli sinna (if humøret er "glad", endre til "sinna").
// Fjern monstre som er for svake (styrke under 5). -->
