const ObjectA: {
  keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'Value A',
  keyB: 'Value B',
};

ObjectA.keyA = 'Other value';

console.log(ObjectA);
