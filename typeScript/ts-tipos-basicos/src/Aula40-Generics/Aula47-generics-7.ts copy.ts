// Record
export const obj1: Record<string, string | number> = {
  nome: 'Flavio',
  sobrenome: 'Henrique',
  idade: 18,
};

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required
type PessoaRequired = Required<PessoaProtocol>;

// Partial
type PessoaPartial = Partial<PessoaRequired>;

// ReadOnly
type PessoaReadOnly = Readonly<PessoaRequired>;

// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>; // Computa todos os tipos que estão em ABC e que NÃO estão em CDE
type TipoExtract = Extract<ABC, CDE>; // Computa todos os tipos que estão em ABC e que podem ser atribuidos para os tipos que estão em CDE

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'afhpoakjfjkafowafawfaw',
  nome: 'Flavio',
  sobrenome: 'Henrique',
  idade: 18,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountAPI = mapAccount(accountMongo);

console.log(accountAPI);
console.log('--------------------------------------------');
console.log(obj1);
