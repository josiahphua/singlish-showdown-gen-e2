import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  const questionsPath = path.join(__dirname, 'questions.json');
  const questions = JSON.parse(fs.readFileSync(questionsPath, 'utf-8'));

  for (const q of questions) {
    await prisma.question.upsert({
      where: { id: q.id },
      update: {},
      create: {
        id: q.id,
        text: q.text,
        answer: q.answer,
        difficulty: q.difficulty,
      },
    });
  }
  console.log('Seeded questions!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
