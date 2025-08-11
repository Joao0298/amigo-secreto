import React from 'react';
import { Shuffle, Loader2 } from 'lucide-react';

interface DrawButtonProps {
  onDraw: () => void;
  canDraw: boolean;
  isDrawing: boolean;
  participantCount: number;
}

export function DrawButton({ onDraw, canDraw, isDrawing, participantCount }: DrawButtonProps) {
  const getButtonText = () => {
    if (isDrawing) return 'Realizando Sorteio...';
    if (participantCount < 2) return 'Adicione mais participantes';
    return 'Realizar Sorteio';
  };

  const getButtonIcon = () => {
    if (isDrawing) {
      return <Loader2 className="w-5 h-5 animate-spin" />;
    }
    return <Shuffle className="w-5 h-5" />;
  };

  return (
    <div className="card animate-fade-in text-center">
      <div className="mb-6">
        <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
          <Shuffle className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Hora do Sorteio!
        </h3>
        <p className="text-gray-600">
          {participantCount >= 2 
            ? 'Clique no botão abaixo para realizar o sorteio mágico'
            : `Adicione pelo menos ${2 - participantCount} participante${2 - participantCount !== 1 ? 's' : ''} para continuar`
          }
        </p>
      </div>

      <button
        onClick={onDraw}
        disabled={!canDraw || isDrawing}
        className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
          canDraw && !isDrawing
            ? 'btn-primary text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {getButtonIcon()}
        {getButtonText()}
      </button>

      {isDrawing && (
        <div className="mt-4 animate-pulse">
          <p className="text-gray-600 text-sm">
            🎲 Embaralhando os nomes...
          </p>
        </div>
      )}
    </div>
  );
}