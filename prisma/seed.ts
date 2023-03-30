import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "rachel@remix.run";

  const hashedPassword = await bcrypt.hash("racheliscool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  const category = await prisma.category.create({
    data: {
      name: "Pasteles",
      image:
        "https://www.suqiee.com.mx/wp-content/uploads/2017/05/instagram-pastel-cl%C3%A1sico-6.jpg",
    },
  });

  const dessert = await prisma.dessert.create({
    data: {
      name: "Chocolate Cake",
      description: "A delicious chocolate cake",
      price: 1000,
      category: {
        connect: {
          id: category.id,
        }
      },
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
