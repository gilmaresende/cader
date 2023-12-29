export function gerarNumeroUnico() {
  // Gera um número de ponto flutuante entre 0 (inclusive) e 1 (exclusivo)
  const numeroAleatorio = Math.random();

  // Multiplica o número por um valor grande para aumentar a aleatoriedade
  const numeroUnico = numeroAleatorio * 1000000;

  // Arredonda o número ou usa Math.floor para obter um número inteiro
  const numeroFinal = Math.round(numeroUnico);

  return numeroFinal;
}
