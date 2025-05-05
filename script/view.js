updateView();
function updateView() {
    app.innerHTML = /*html*/`
    <h1>Håndter dine monster</h1>
    ${printMonsters()}
    <button onclick="changeMood()">Make angry</button>
    <button onclick="removeMonster()">Remove monster</button>

    `;
}

function printMonsters() {
    let html = "";
    // går igjennom lista, .length går igjennom alt i lista
    for(let i = 0; i < monsters.length; i++) {
    html+= /*html*/`
    <ul>
    <li>
    navn: ${monsters[i].name}
    
    </li>

    <li>
    strength: ${monsters[i].strength}
    
    </li>

    <li>
    mood: ${monsters[i].mood}
    
    </li>

    </ul>
    `;
    }
    return html;
}

// - View: Vis listen over monstre, enten på siden eller i consollen. 
// Fjern monstre som er for svake (styrke under 5). -->