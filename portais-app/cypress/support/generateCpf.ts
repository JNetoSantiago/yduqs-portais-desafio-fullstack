const generateRandomCPF = () => {
  const randomDigits = () => Math.floor(Math.random() * 10);
  let cpf = Array.from({ length: 9 }, randomDigits);

  const calcDigit = (base: number[]) => {
    let sum = base.reduce(
      (acc, val, idx) => acc + val * (base.length + 1 - idx),
      0
    );
    let digit = (sum * 10) % 11;
    return digit === 10 ? 0 : digit;
  };

  cpf.push(calcDigit(cpf));
  cpf.push(calcDigit(cpf));

  return cpf.join("");
};

export default generateRandomCPF;
