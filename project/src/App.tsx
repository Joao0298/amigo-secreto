import React, { useState } from 'react';
import { Gift, Heart, Star } from 'lucide-react';
import { useAmigoSecreto } from './hooks/useAmigoSecreto';
import { ParticipantForm } from './components/ParticipantForm';
import { ParticipantList } from './components/ParticipantList';
import { DrawButton } from './components/DrawButton';
import { DrawResults } from './components/DrawResults';

function App() {
  const {
    participants,
    results,
    isDrawn,
    isDrawing,
    addParticipant,
    removeParticipant,
    clearParticipants,
    performDraw,
    resetDraw,
  } = useAmigoSecreto();

  const [error, setError] = useState('');

  const handleDraw = async () => {
    try {
      setError('');
      await performDraw();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    }
  };

  const handleReset = () => {
    resetDraw();
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4">
            <div className="p-3 bg-gradient-to-r from-red-500 to-green-500 rounded-full">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
                🎁 Amigo Secreto
              </h1>
              <p className="text-gray-600 mt-1">
                Organize seu sorteio de forma fácil e divertida!
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {!isDrawn ? (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center py-8">
              <div className="flex justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-yellow-500 animate-bounce-gentle" />
                <Heart className="w-6 h-6 text-red-500 animate-bounce-gentle" style={{ animationDelay: '0.2s' }} />
                <Star className="w-6 h-6 text-yellow-500 animate-bounce-gentle" style={{ animationDelay: '0.4s' }} />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Vamos começar o sorteio!
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Adicione os nomes dos participantes e deixe a magia acontecer. 
                Nosso sistema garante que ninguém tire a si mesmo no sorteio.
              </p>
            </div>

            {/* Form and List */}
            <div className="grid lg:grid-cols-2 gap-8">
              <ParticipantForm
                onAddParticipant={addParticipant}
                participantCount={participants.length}
              />
              
              <ParticipantList
                participants={participants}
                onRemoveParticipant={removeParticipant}
                onClearAll={clearParticipants}
              />
            </div>

            {/* Draw Button */}
            {participants.length > 0 && (
              <DrawButton
                onDraw={handleDraw}
                canDraw={participants.length >= 2 && !isDrawing}
                isDrawing={isDrawing}
                participantCount={participants.length}
              />
            )}

            {/* Error Message */}
            {error && (
              <div className="card bg-red-50 border-red-200 animate-slide-up">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-full">
                    <Gift className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-red-800">Ops! Algo deu errado</h4>
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <DrawResults results={results} onReset={handleReset} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Gift className="w-5 h-5 text-red-500" />
              <span className="font-medium text-gray-700">Amigo Secreto</span>
            </div>
            <p className="text-gray-600 text-sm">
              Desenvolvido com ❤️ para tornar seus sorteios mais especiais
            </p>
            <div className="flex justify-center gap-4 mt-4 text-sm text-gray-500">
              <span>React + TypeScript</span>
              <span>•</span>
              <span>Tailwind CSS</span>
              <span>•</span>
              <span>Lucide Icons</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;