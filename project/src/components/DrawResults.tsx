import React from 'react';
import { Gift, RotateCcw, Share2 } from 'lucide-react';
import { DrawResult } from '../types';
import { ShareButtons } from './ShareButtons';

interface DrawResultsProps {
  results: DrawResult[];
  onReset: () => void;
}

export function DrawResults({ results, onReset }: DrawResultsProps) {
  return (
    <div className="space-y-6">
      <div className="card animate-fade-in">
        <div className="text-center mb-6">
          <div className="inline-flex p-4 bg-green-100 rounded-full mb-4">
            <Gift className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            🎉 Sorteio Realizado!
          </h3>
          <p className="text-gray-600">
            Aqui estão os resultados do seu Amigo Secreto
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-green-50 rounded-lg border border-gray-200 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white rounded-full shadow-sm">
                  <Gift className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    {result.giver}
                  </p>
                  <p className="text-sm text-gray-600">
                    vai presentear
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold text-lg text-secondary">
                  {result.receiver}
                </p>
                <p className="text-sm text-gray-500">
                  🎁 Amigo Secreto
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={onReset}
            className="btn-outline flex items-center gap-2 flex-1"
          >
            <RotateCcw className="w-4 h-4" />
            Refazer Sorteio
          </button>
        </div>
      </div>

      <ShareButtons results={results} />
    </div>
  );
}