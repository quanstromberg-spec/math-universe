type Question = {
  id: number;
  q: string;
  answer: number;
};

// Helper function to get a random integer between min and max (inclusive)
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ============= ADDITION =============

/**
 * Addition Easy: a+b ≤ 10 (a and b ∈ [1, 9])
 */
export function generateAdditionEasy(): Question[] {
  const questions: Question[] = [];
  const used = new Set<string>();

  // Generate all valid combinations first
  const validPairs: Array<[number, number]> = [];
  for (let a = 1; a <= 9; a++) {
    for (let b = 1; b <= 9; b++) {
      if (a + b <= 10) {
        validPairs.push([a, b]);
      }
    }
  }

  // Shuffle and pick 10
  const shuffled = validPairs.sort(() => Math.random() - 0.5);

  for (let i = 0; i < Math.min(10, shuffled.length); i++) {
    const [a, b] = shuffled[i];
    questions.push({
      id: i + 1,
      q: `${a} + ${b}`,
      answer: a + b,
    });
  }

  return questions;
}

/**
 * Addition Medium: a+b ≤ 15
 */
export function generateAdditionMedium(): Question[] {
  const questions: Question[] = [];
  for (let i = 0; i < 10; i++) {
    let a: number, b: number;
    do {
      a = randomInt(1, 14);
      b = randomInt(1, 14);
    } while (a + b > 15);

    questions.push({
      id: i + 1,
      q: `${a} + ${b}`,
      answer: a + b,
    });
  }
  return questions;
}

/**
 * Addition Hard: a+b ≤ 100
 */
export function generateAdditionHard(): Question[] {
  const questions: Question[] = [];
  for (let i = 0; i < 10; i++) {
    const a = randomInt(1, 99);
    const b = randomInt(1, 100 - a);

    questions.push({
      id: i + 1,
      q: `${a} + ${b}`,
      answer: a + b,
    });
  }
  return questions;
}

// ============= SUBTRACTION =============

/**
 * Subtraction Easy: a-b, a ≤ 10, result ≥ 0
 */
export function generateSubtractionEasy(): Question[] {
  const questions: Question[] = [];
  for (let i = 0; i < 10; i++) {
    const a = randomInt(1, 10);
    const b = randomInt(0, a); // ensures result ≥ 0

    questions.push({
      id: i + 1,
      q: `${a} − ${b}`,
      answer: a - b,
    });
  }
  return questions;
}

/**
 * Subtraction Medium: a-b, a is a two-digit number > 20, b is a two-digit number > 10, result ≥ 0
 */
export function generateSubtractionMedium(): Question[] {
  const questions: Question[] = [];
  for (let i = 0; i < 10; i++) {
    const a = randomInt(21, 99);
    const b = randomInt(11, Math.min(a, 99)); // b > 10 and b ≤ a

    questions.push({
      id: i + 1,
      q: `${a} − ${b}`,
      answer: a - b,
    });
  }
  return questions;
}

/**
 * Subtraction Hard: a-b-c, a is a two-digit number > 20, result ≥ 0
 */
export function generateSubtractionHard(): Question[] {
  const questions: Question[] = [];
  for (let i = 0; i < 10; i++) {
    const a = randomInt(21, 99);
    const b = randomInt(1, Math.floor(a / 2));
    const c = randomInt(1, a - b); // ensures result ≥ 0

    questions.push({
      id: i + 1,
      q: `${a} − ${b} − ${c}`,
      answer: a - b - c,
    });
  }
  return questions;
}

// ============= MULTIPLICATION =============

/**
 * Multiplication Easy: a*b, a and b ∈ [1, 4]
 */
export function generateMultiplicationEasy(): Question[] {
  const questions: Question[] = [];
  for (let i = 0; i < 10; i++) {
    const a = randomInt(1, 4);
    const b = randomInt(1, 4);

    questions.push({
      id: i + 1,
      q: `${a} × ${b}`,
      answer: a * b,
    });
  }
  return questions;
}

/**
 * Multiplication Medium: a*b, a and b ∈ [6, 9]
 */
export function generateMultiplicationMedium(): Question[] {
  const questions: Question[] = [];
  for (let i = 0; i < 10; i++) {
    const a = randomInt(6, 9);
    const b = randomInt(6, 9);

    questions.push({
      id: i + 1,
      q: `${a} × ${b}`,
      answer: a * b,
    });
  }
  return questions;
}

/**
 * Multiplication Hard: a*b, a ∈ [10, 99] (two-digit number), b ∈ [2, 9]
 */
export function generateMultiplicationHard(): Question[] {
  const questions: Question[] = [];
  for (let i = 0; i < 10; i++) {
    const a = randomInt(10, 99);
    const b = randomInt(2, 9);

    questions.push({
      id: i + 1,
      q: `${a} × ${b}`,
      answer: a * b,
    });
  }
  return questions;
}

// ============= DIVISION =============

// Helper to generate multiplication table (1-9)
function getMultiplicationTable(): number[] {
  const table: number[] = [];
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      table.push(i * j);
    }
  }
  return [...new Set(table)]; // remove duplicates
}

/**
 * Division Easy: a/b, a comes from the 9×9 multiplication table, b ∈ [2, 4]
 */
export function generateDivisionEasy(): Question[] {
  const questions: Question[] = [];
  const multTable = getMultiplicationTable();

  for (let i = 0; i < 10; i++) {
    const b = randomInt(2, 4);
    // Pick a number from multiplication table that's divisible by b
    let a: number;
    do {
      a = multTable[randomInt(0, multTable.length - 1)];
    } while (a % b !== 0);

    questions.push({
      id: i + 1,
      q: `${a} ÷ ${b}`,
      answer: a / b,
    });
  }
  return questions;
}

/**
 * Division Medium: a/b, a comes from the 9×9 multiplication table, b ∈ [6, 9]
 */
export function generateDivisionMedium(): Question[] {
  const questions: Question[] = [];
  const multTable = getMultiplicationTable();

  for (let i = 0; i < 10; i++) {
    const b = randomInt(6, 9);
    // Pick a number from multiplication table that's divisible by b
    let a: number;
    do {
      a = multTable[randomInt(0, multTable.length - 1)];
    } while (a % b !== 0);

    questions.push({
      id: i + 1,
      q: `${a} ÷ ${b}`,
      answer: a / b,
    });
  }
  return questions;
}

/**
 * Division Hard: N/A (disabled)
 */
export function generateDivisionHard(): Question[] {
  return [];
}

// ============= MAIN GENERATOR =============

export type MathOperation = 'addition' | 'subtraction' | 'multiplication' | 'division';
export type DifficultyLevel = 'easy' | 'medium' | 'hard';

/**
 * Generate 10 questions based on operation and difficulty
 */
export function generateQuestions(
  operation: MathOperation,
  difficulty: DifficultyLevel
): Question[] {
  switch (operation) {
    case 'addition':
      if (difficulty === 'easy') return generateAdditionEasy();
      if (difficulty === 'medium') return generateAdditionMedium();
      if (difficulty === 'hard') return generateAdditionHard();
      break;
    case 'subtraction':
      if (difficulty === 'easy') return generateSubtractionEasy();
      if (difficulty === 'medium') return generateSubtractionMedium();
      if (difficulty === 'hard') return generateSubtractionHard();
      break;
    case 'multiplication':
      if (difficulty === 'easy') return generateMultiplicationEasy();
      if (difficulty === 'medium') return generateMultiplicationMedium();
      if (difficulty === 'hard') return generateMultiplicationHard();
      break;
    case 'division':
      if (difficulty === 'easy') return generateDivisionEasy();
      if (difficulty === 'medium') return generateDivisionMedium();
      if (difficulty === 'hard') return generateDivisionHard();
      break;
  }
  return [];
}
