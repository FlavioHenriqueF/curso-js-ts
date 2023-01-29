// Encadeamento opcional e Operador de coalescencia nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'texto',
  // data: new Date(),
};

console.log(documento.data?.toDateString() ?? '1 - Não existe data.');
console.log(null ?? '2 - Não existe.');
console.log(undefined ?? '3 - Não existe.');
console.log(false ?? '4 - Não existe.');
console.log(0 ?? '5 - Não existe.');
console.log('' ?? '6 - Não existe.');
