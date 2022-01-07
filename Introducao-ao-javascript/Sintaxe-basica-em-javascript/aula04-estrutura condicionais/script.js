var jogador1 = -1;
var jogador2 = 0;
var placar;

// if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos'): console.log('Jogadores Inválidos');

//usando if
if(jogador1 > 0){
    console.log('Jogador 1 marcou ponto');    
}
//usando else if
else if (jogador2 > 0){
    console.log('Jogador 2 marcou ponto');
}
//usando else
else{
    console.log('Ninguem marcou ponto');
}

// usando o switch case
switch (placar){
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;
    case placar = jogador2 > jogadro1:
        console.log('Jogador 2 ganhou');
        break;
    default:
        console.log('Ninguém ganhou')
}

