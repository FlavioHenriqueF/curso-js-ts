/* Recomendado */
// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type Assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer Coisa';
input.focus();

/* Não Recomendado */
// Type Assertion
const body4 = document.querySelector('body') as unknown as number;

// Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'Red';
