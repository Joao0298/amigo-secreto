import React, { useState } from 'react';
import { Share2, MessageCircle, Mail, Copy, Check } from 'lucide-react';
import { DrawResult } from '../types';

interface ShareButtonsProps {
  results: DrawResult[];
}

export function ShareButtons({ results }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const formatResults = () => {
    const header = '🎁 *Resultado do Amigo Secreto* 🎁\n\n';
    const resultsList = results
      .map(result => `🎯 *${result.giver}* → *${result.receiver}*`)
      .join('\n');
    const footer = '\n\n✨ _Sorteio realizado com o app Amigo Secreto_';
    
    return header + resultsList + footer;
  };

  const formatIndividualMessage = (result: DrawResult) => {
    return `🎁 *Amigo Secreto* 🎁\n\nOlá, ${result.giver}!\n\nSeu amigo secreto é: *${result.receiver}*\n\n🎯 Agora é só escolher um presente especial!\n\n✨ _Bom sorteio!_`;
  };

  const shareViaWhatsApp = () => {
    const text = encodeURIComponent(formatResults());
    const url = `https://wa.me/?text=${text}`;
    window.open(url, '_blank');
  };

  const shareViaEmail = () => {
    const subject = encodeURIComponent('🎁 Resultado do Amigo Secreto');
    const body = encodeURIComponent(formatResults().replace(/\*/g, ''));
    const url = `mailto:?subject=${subject}&body=${body}`;
    window.open(url);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formatResults().replace(/\*/g, ''));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  const shareIndividual = (result: DrawResult) => {
    const text = encodeURIComponent(formatIndividualMessage(result));
    const url = `https://wa.me/?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <div className="card animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Share2 className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Compartilhar Resultados
          </h3>
          <p className="text-gray-600 text-sm">
            Envie os resultados para os participantes
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-700 mb-3">Compartilhar Todos os Resultados:</h4>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={shareViaWhatsApp}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>

            <button
              onClick={shareViaEmail}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              E-mail
            </button>

            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copiado!' : 'Copiar'}
            </button>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-700 mb-3">Enviar Individualmente:</h4>
          <div className="space-y-2">
            {results.map((result, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <span className="text-sm text-gray-700">
                  Enviar para <strong>{result.giver}</strong>
                </span>
                <button
                  onClick={() => shareIndividual(result)}
                  className="flex items-center gap-1 px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded transition-colors duration-200"
                >
                  <MessageCircle className="w-3 h-3" />
                  WhatsApp
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-blue-800 text-sm">
          💡 <strong>Dica:</strong> Ao enviar individualmente, cada pessoa receberá apenas o nome do seu amigo secreto, mantendo o mistério!
        </p>
      </div>
    </div>
  );
}