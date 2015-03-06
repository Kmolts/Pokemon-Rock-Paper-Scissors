
// Makes the program run until  winner is found
var running = true;
while(running) {

// Chooses the user's Pokémon
var userPoke = "";
while(userPoke != "Charizard" && userPoke != "Blastoise" && userPoke != "Venasaur") {

    console.log("I choose you...");
    prompt("Choose: Charizard, Blastoise, or Venasaur");
    
    if(userPoke != "Charizard" && userPoke != "Blastoise" && userPoke != "Venasaur") {
        console.log("Invalid choice - please choose again.");
        console.log("");
    }
    
}

// Chooses computer's Pokémon
var cpuPoke = Math.random();
if(cpuPoke <= 0.33) {
    cpuPoke = "Charizard";
} else if(cpuPoke > 0.33 && cpuPoke < 0.66) {
    cpuPoke = "Blastoise";
} else {
    cpuPoke = "Venasaur";
}

// Compares the two to find a victor
function compare(poke1, poke2) {
    
    if(poke1 == poke2) {
        return "It's a tie! Choose another pokemon!";
    }
    
    else if(poke1 == "Charizard") {
        if(poke2 == "Venasaur") {
            return "Charizard uses Flamethrower... You Win!";
        } else {
            return "Blastoise uses Hydro-Pump... You Lose!";
        }
    }
    
    else if(poke1 == "Blastoise") {
        if(poke2 == "Charizard") {
            return "Blastoise uses Hydro-Pump... You Win!";
        } else {
            return "Venasaur uses Solar-Beam... You Lose!";
        }
    }
    
    else if(poke1 == "Venasaur") {
        if(poke2 == "Blastoise") {
            return "Venasaur uses Solar-Beam... You Win!";
        } else {
            return "Charizard uses Flamethrower... You Lose!";
        }
    }
    
}

// Run the function
var result = compare(userPoke, cpuPoke);

// Check to see if it's a tie, if so, run again
if(result != "It's a tie! Choose another pokemon!") {
    running = false;
}

// Print the result
console.log(result);
for(i = 0; i < 3; i++) {
    console.log("");
}

}
