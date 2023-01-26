type Age = number;
type Person = {
  firstName: string;
  lastName: string;
  age: Age;
  wage: number;
  favoriteColor?: string;
};

type colorsRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type FavoriteColor = colorsRGB | CorCMYK;

const person: Person = {
  firstName: 'Flavio',
  lastName: 'Henrique',
  age: 18,
  wage: 1000,
};

export function selectFavoriteColor(
  person: Person,
  color: FavoriteColor,
): Person {
  return { ...person, favoriteColor: color };
}

console.log(selectFavoriteColor(person, 'Vermelho'));
console.log(person);
