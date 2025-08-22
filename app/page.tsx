'use client';
import { useState } from 'react';

export default function Home() {
  const [output, setOutput] = useState('');

  const generatePrompt = () => {
    const prompt = `Act as a prompt architect. Create a powerful AI prompt for a strategist who needs clarity and results.`;
    setOutput(prompt);
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Prompt Architect Studio
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
          Build world-class AI prompts with precision. Designed for engineers, creatives, and strategists who demand clarity and performance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            onClick={generatePrompt}
            className="rounded-full bg-black text-white font-semibold py-2 px-6 hover:bg-gray-800"
          >
            Generate a Prompt
          </button>
          <a
            href="https://github.com/lindindesign/prompt-architect-studio"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-300 dark:border-white text-black dark:text-white py-2 px-6 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            View on GitHub
          </a>
        </div>

        {output && (
          <div className="mt-6 p-4 border rounded-md w-full max-w-xl bg-gray-50 dark:bg-gray-900 text-left">
            <h2 className="font-semibold text-lg mb-2 text-gray-700 dark:text-gray-300">
              Your Generated Prompt:
            </h2>
            <p className="text-gray-800 dark:text-gray-100 whitespace-pre-line">{output}</p>
          </div>
        )}
      </main>

      <footer className="row-start-3 text-sm text-gray-500 dark:text-gray-400">
        Built with Next.js + Tailwind by Lindin Design & Company
      </footer>
    </div>
  );
}
