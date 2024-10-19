function classificarHeroi() {
    // Entrada de dados
    const heroi = prompt("Digite o nome do herói:");
    const xp = parseInt(prompt("Digite a quantidade de experiência (XP) do herói:"), 10);

    let nivel;

    // Determinando o nível do herói
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata"; // Corrigido para "Prata" com "P" maiúsculo
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    alert(`O Herói de nome ${heroi} está no nível de ${nivel}`);
}

// Laço para permitir múltiplas classificações
while (true) {
    classificarHeroi();
    const continuar = prompt("Deseja classificar outro herói? (s/n)");
    if (continuar.toLowerCase() !== 's') { // Corrigido para toLowerCase()
        break;
    }
}
