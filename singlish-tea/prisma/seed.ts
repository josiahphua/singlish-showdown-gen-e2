import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Clear existing questions
  await prisma.question.deleteMany();

  // Seed with multiple choice questions (2 choices each)
  await prisma.question.createMany({
    data: [
      {
        text: 'What does "lah" mean in Singlish?',
        choices: ['emphasis', 'question'],
        answer: 'emphasis',
        difficulty: 'easy',
      },
      {
        text: 'Translate "shiok" to English.',
        choices: ['delicious', 'boring'],
        answer: 'delicious',
        difficulty: 'medium',
      },
      {
        text: 'What is "kiasu"?',
        choices: ['afraid to lose', 'very happy'],
        answer: 'afraid to lose',
        difficulty: 'hard',
      },
      {
        text: 'What does "can" mean in Singlish?',
        choices: ['possible', 'impossible'],
        answer: 'possible',
        difficulty: 'easy',
      },
      {
        text: 'What is the meaning of "catch no ball"?',
        choices: ['do not understand', 'caught a ball'],
        answer: 'do not understand',
        difficulty: 'medium',
      },
      {
        text: 'What does "makan" mean?',
        choices: ['eat', 'run'],
        answer: 'eat',
        difficulty: 'easy',
      },
      {
        text: 'What is "ang moh" referring to?',
        choices: ['Caucasian', 'local person'],
        answer: 'Caucasian',
        difficulty: 'medium',
      },
      {
        text: 'What does "sabo" mean?',
        choices: ['sabotage', 'help'],
        answer: 'sabotage',
        difficulty: 'medium',
      },
      {
        text: 'What is "chiong" in Singlish?',
        choices: ['rush', 'relax'],
        answer: 'rush',
        difficulty: 'easy',
      },
      {
        text: 'What does "blur" mean in Singlish?',
        choices: ['confused', 'clear'],
        answer: 'confused',
        difficulty: 'easy',
      },
      {
        text: 'What is the meaning of "bo jio"?',
        choices: ['not invited', 'invited'],
        answer: 'not invited',
        difficulty: 'medium',
      },
      {
        text: 'What does "steady pom pi pi" mean?',
        choices: ['very steady', 'very shaky'],
        answer: 'very steady',
        difficulty: 'hard',
      },
      {
        text: 'What is "lepak"?',
        choices: ['relax', 'work hard'],
        answer: 'relax',
        difficulty: 'easy',
      },
      {
        text: 'What does "alamak" express?',
        choices: ['surprise', 'boredom'],
        answer: 'surprise',
        difficulty: 'easy',
      },
      {
        text: 'What is "pai seh"?',
        choices: ['embarrassed', 'proud'],
        answer: 'embarrassed',
        difficulty: 'medium',
      },
      {
        text: 'What does "shiok" mean?',
        choices: ['great', 'bad'],
        answer: 'great',
        difficulty: 'easy',
      },
      {
        text: 'What does "bojio" mean?',
        choices: ['not invited', 'invited'],
        answer: 'not invited',
        difficulty: 'medium',
      },
      {
        text: 'What is "kepo"?',
        choices: ['nosy', 'quiet'],
        answer: 'nosy',
        difficulty: 'easy',
      },
      {
        text: 'What does "jialat" mean?',
        choices: ['in trouble', 'very good'],
        answer: 'in trouble',
        difficulty: 'medium',
      },
      {
        text: 'What is "sian"?',
        choices: ['bored', 'excited'],
        answer: 'bored',
        difficulty: 'easy',
      },
      {
        text: 'What does "cheem" mean?',
        choices: ['deep/complex', 'simple'],
        answer: 'deep/complex',
        difficulty: 'hard',
      },
      {
        text: 'What is "atas"?',
        choices: ['high class', 'messy'],
        answer: 'high class',
        difficulty: 'medium',
      },
      {
        text: 'What does "lobang" mean?',
        choices: ['good deal', 'problem'],
        answer: 'good deal',
        difficulty: 'medium',
      },
      {
        text: 'What is "gahmen"?',
        choices: ['government', 'food'],
        answer: 'government',
        difficulty: 'easy',
      },
      {
        text: 'What does "tahan" mean?',
        choices: ['endure', 'give up'],
        answer: 'endure',
        difficulty: 'medium',
      },
      {
        text: 'What is "zhao"?',
        choices: ['run away', 'stay'],
        answer: 'run away',
        difficulty: 'easy',
      },
      {
        text: 'What does "bao toh" mean?',
        choices: ['to snitch', 'to help'],
        answer: 'to snitch',
        difficulty: 'hard',
      },
      {
        text: 'What is "chio"?',
        choices: ['pretty', 'ugly'],
        answer: 'pretty',
        difficulty: 'easy',
      },
      {
        text: 'What does "swee" mean?',
        choices: ['beautiful', 'dirty'],
        answer: 'beautiful',
        difficulty: 'easy',
      },
      {
        text: 'What is "kiasuism"?',
        choices: ['fear of losing', 'love of winning'],
        answer: 'fear of losing',
        difficulty: 'hard',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
