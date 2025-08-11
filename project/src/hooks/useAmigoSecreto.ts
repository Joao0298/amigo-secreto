import { useState, useCallback } from 'react';
import { Participant, DrawResult, DrawState } from '../types';
import { performDraw, validateParticipants } from '../utils/drawLogic';

export function useAmigoSecreto() {
  const [state, setState] = useState<DrawState>({
    participants: [],
    results: [],
    isDrawn: false,
    isDrawing: false,
  });

  const addParticipant = useCallback((name: string) => {
    const trimmedName = name.trim();
    if (!trimmedName) return false;

    const newParticipant: Participant = {
      id: Date.now().toString(),
      name: trimmedName,
    };

    setState(prev => ({
      ...prev,
      participants: [...prev.participants, newParticipant],
      isDrawn: false,
      results: [],
    }));

    return true;
  }, []);

  const removeParticipant = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      participants: prev.participants.filter(p => p.id !== id),
      isDrawn: false,
      results: [],
    }));
  }, []);

  const clearParticipants = useCallback(() => {
    setState(prev => ({
      ...prev,
      participants: [],
      isDrawn: false,
      results: [],
    }));
  }, []);

  const performDrawAsync = useCallback(async () => {
    const validationError = validateParticipants(state.participants);
    if (validationError) {
      throw new Error(validationError);
    }

    setState(prev => ({ ...prev, isDrawing: true }));

    // Simula um delay para mostrar a animação
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
      const results = performDraw(state.participants);
      setState(prev => ({
        ...prev,
        results,
        isDrawn: true,
        isDrawing: false,
      }));
    } catch (error) {
      setState(prev => ({ ...prev, isDrawing: false }));
      throw error;
    }
  }, [state.participants]);

  const resetDraw = useCallback(() => {
    setState(prev => ({
      ...prev,
      results: [],
      isDrawn: false,
      isDrawing: false,
    }));
  }, []);

  return {
    participants: state.participants,
    results: state.results,
    isDrawn: state.isDrawn,
    isDrawing: state.isDrawing,
    addParticipant,
    removeParticipant,
    clearParticipants,
    performDraw: performDrawAsync,
    resetDraw,
  };
}