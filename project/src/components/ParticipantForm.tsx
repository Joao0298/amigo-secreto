import React, { useState } from 'react';
import { UserPlus, Users } from 'lucide-react';

interface ParticipantFormProps {
  onAddParticipant: (name: string) => boolean;
  participantCount: number;
}

export function ParticipantForm({ onAddParticipant, participantCount }: ParticipantFormProps) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Por favor, digite um nome');
      return;
    }

    if (name.trim().length < 2) {
      setError('O nome deve ter pelo menos 2 caracteres');
      return;
    }

    const success = onAddParticipant(name.trim());
    if (success) {
      setName('');
    } else {
      setError('Erro ao adicionar participante');
    }
  };

  return (
    <div className="card animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Users className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Adicionar Participantes
          </h2>
          <p className="text-gray-600 text-sm">
            {participantCount === 0 
              ? 'Comece adicionando os nomes dos participantes'
              : `${participantCount} participante${participantCount !== 1 ? 's' : ''} adicionado${participantCount !== 1 ? 's' : ''}`
            }
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="participant-name" className="block text-sm font-medium text-gray-700 mb-2">
            Nome do Participante
          </label>
          <input
            id="participant-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite o nome completo..."
            className="input-field"
            maxLength={50}
          />
          {error && (
            <p className="text-red-500 text-sm mt-2 animate-slide-up">
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          <UserPlus className="w-5 h-5" />
          Adicionar Participante
        </button>
      </form>

      {participantCount < 2 && (
        <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-amber-800 text-sm">
            💡 <strong>Dica:</strong> Você precisa de pelo menos 2 participantes para realizar o sorteio.
          </p>
        </div>
      )}
    </div>
  );
}