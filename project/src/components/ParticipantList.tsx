import React from 'react';
import { User, Trash2, Users } from 'lucide-react';
import { Participant } from '../types';

interface ParticipantListProps {
  participants: Participant[];
  onRemoveParticipant: (id: string) => void;
  onClearAll: () => void;
}

export function ParticipantList({ 
  participants, 
  onRemoveParticipant, 
  onClearAll 
}: ParticipantListProps) {
  if (participants.length === 0) {
    return null;
  }

  return (
    <div className="card animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-secondary/10 rounded-lg">
            <Users className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Lista de Participantes
            </h3>
            <p className="text-gray-600 text-sm">
              {participants.length} participante{participants.length !== 1 ? 's' : ''} confirmado{participants.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {participants.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors duration-200"
          >
            Limpar Todos
          </button>
        )}
      </div>

      <div className="space-y-3">
        {participants.map((participant, index) => (
          <div
            key={participant.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-200 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-full shadow-sm">
                <User className="w-4 h-4 text-gray-600" />
              </div>
              <span className="font-medium text-gray-800">
                {participant.name}
              </span>
            </div>

            <button
              onClick={() => onRemoveParticipant(participant.id)}
              className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200"
              title="Remover participante"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {participants.length >= 2 && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-sm">
            ✅ <strong>Pronto para o sorteio!</strong> Você tem participantes suficientes.
          </p>
        </div>
      )}
    </div>
  );
}