import { Participant, DrawResult } from '../types';

export function performDraw(participants: Participant[]): DrawResult[] {
  if (participants.length < 2) {
    throw new Error('É necessário pelo menos 2 participantes para realizar o sorteio');
  }

  const maxAttempts = 100;
  let attempts = 0;

  while (attempts < maxAttempts) {
    const results = attemptDraw(participants);
    if (results) {
      return results;
    }
    attempts++;
  }

  throw new Error('Não foi possível realizar o sorteio. Tente novamente.');
}

function attemptDraw(participants: Participant[]): DrawResult[] | null {
  const givers = [...participants];
  const receivers = [...participants];
  const results: DrawResult[] = [];

  // Embaralha os arrays
  shuffleArray(givers);
  shuffleArray(receivers);

  for (let i = 0; i < givers.length; i++) {
    const giver = givers[i];
    
    // Encontra um receptor válido (que não seja o próprio giver)
    const validReceiverIndex = receivers.findIndex(
      receiver => receiver.id !== giver.id
    );

    if (validReceiverIndex === -1) {
      // Não encontrou receptor válido, tenta novamente
      return null;
    }

    const receiver = receivers[validReceiverIndex];
    receivers.splice(validReceiverIndex, 1);

    results.push({
      giver: giver.name,
      receiver: receiver.name,
    });
  }

  return results;
}

function shuffleArray<T>(array: T[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function validateParticipants(participants: Participant[]): string | null {
  if (participants.length < 2) {
    return 'É necessário pelo menos 2 participantes';
  }

  const names = participants.map(p => p.name.trim().toLowerCase());
  const uniqueNames = new Set(names);
  
  if (names.length !== uniqueNames.size) {
    return 'Não é possível ter nomes duplicados';
  }

  return null;
}