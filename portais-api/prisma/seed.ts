import { PrismaClient } from './../generated/prisma';

const prisma = new PrismaClient();
async function main() {
  const saoPaulo = await prisma.state.create({
    data: {
      name: 'São Paulo',
      uf: 'SP',
    },
  });
  const campinas = await prisma.city.create({
    data: {
      name: 'Campinas',
      stateId: saoPaulo.id,
    },
  });
  const address1 = await prisma.address.create({
    data: {
      street: 'Rua Dr. Sales de Oliveira',
      number: '1661',
      cityId: campinas.id,
      stateId: saoPaulo.id,
      zipCode: '13000-000',
      neighborhood: 'Vila Industrial',
    },
  });

  const rioDeJaneiro = await prisma.state.create({
    data: {
      name: 'Rio de Janeiro',
      uf: 'RJ',
    },
  });
  const rioCity = await prisma.city.create({
    data: {
      name: 'Barra da Tijuca',
      stateId: rioDeJaneiro.id,
    },
  });
  const address2 = await prisma.address.create({
    data: {
      street: 'Av. das Américas',
      number: '4.200',
      cityId: rioCity.id,
      stateId: rioDeJaneiro.id,
      zipCode: '22000-000',
      neighborhood: 'Tom Jobim',
      complement: 'Bloco 11',
    },
  });

  const installmentsData = [
    { deadline: 1, totalPrice: 261360 },
    { deadline: 3, totalPrice: 270270 },
    { deadline: 6, totalPrice: 279180 },
    { deadline: 9, totalPrice: 288090 },
    { deadline: 12, totalPrice: 294600 },
    { deadline: 15, totalPrice: 301455 },
    { deadline: 18, totalPrice: 305910 },
  ];

  await prisma.offer.create({
    data: {
      modality: 'PRESENCIAL',
      shift: 'MORNING',
      originalPrice: 4752,
      withDiscountPrice: 2613,
      addressId: address1.id,
      installments: {
        create: installmentsData,
      },
    },
  });

  await prisma.offer.create({
    data: {
      modality: 'EAD',
      originalPrice: 0,
      withDiscountPrice: 0,
      addressId: address2.id,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e: unknown) => {
    if (e instanceof Error) {
      console.error(e.message, e.stack);
    } else {
      console.error(e);
    }
    await prisma.$disconnect();
    process.exit(1);
  });
