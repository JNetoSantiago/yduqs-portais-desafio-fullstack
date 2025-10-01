import { PrismaClient } from './../generated/prisma';

const prisma = new PrismaClient();
async function main() {
  // const saoPaulo = await prisma.state.create({
  //   data: {
  //     name: 'São Paulo',
  //     uf: 'SP',
  //   },
  // });
  // const campinas = await prisma.city.create({
  //   data: {
  //     name: 'Campinas',
  //     stateId: saoPaulo.id,
  //   },
  // });
  // const address1 = await prisma.address.create({
  //   data: {
  //     street: 'Rua Exemplo',
  //     number: '123',
  //     cityId: campinas.id,
  //     stateId: saoPaulo.id,
  //     zipCode: '13000-000',
  //   },
  // });
  // const rioDeJaneiro = await prisma.state.create({
  //   data: {
  //     name: 'Rio de Janeiro',
  //     uf: 'RJ',
  //   },
  // });
  // const rioCity = await prisma.city.create({
  //   data: {
  //     name: 'Barra da Tijuca',
  //     stateId: rioDeJaneiro.id,
  //   },
  // });
  // const address2 = await prisma.address.create({
  //   data: {
  //     street: 'Avenida Exemplo',
  //     number: '456',
  //     cityId: rioCity.id,
  //     stateId: rioDeJaneiro.id,
  //     zipCode: '22000-000',
  //   },
  // });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
