enum Cores {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

export function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(201);
