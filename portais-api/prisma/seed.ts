import { PrismaClient } from './../generated/prisma';

const prisma = new PrismaClient();
async function main() {
  const estados = [
    {
      name: 'Piauí',
      uf: 'PI',
      cities: ['Teresina', 'Parnaíba', 'Picos', 'Campo Maior'],
    },
    {
      name: 'São Paulo',
      uf: 'SP',
      cities: ['São Paulo', 'Campinas', 'Santos', 'Ribeirão Preto'],
    },
  ];

  for (const estado of estados) {
    const state = await prisma.state.upsert({
      where: { uf: estado.uf },
      update: {},
      create: {
        name: estado.name,
        uf: estado.uf,
        cities: {
          create: estado.cities.map((cityName) => ({ name: cityName })),
        },
      },
      include: { cities: true },
    });

    console.log(`Criados ${estados.length} estados!`);
  }
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
