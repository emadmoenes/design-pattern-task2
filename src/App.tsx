import React from "react";
import "./App.css";
import { range } from "./utils/Iterator";
import { rangeGenerator } from "./utils/Generator";

function App() {
  const iteratorRange = range(0, 23, 1.5);
  const generatorRange = rangeGenerator(0, 23, 2);

  return (
    <div className="bg-green-700 flex flex-col items-center justify-center min-h-screen p-6">
      <header className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-serif text-white mb-4">
          Range Function Examples
        </h1>
      </header>
      <main className="grid gap-8 max-w-4xl w-full">
        <section className="bg-yellow-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-serif text-white mb-4 text-center">
            Iterator Range
          </h2>
          <ul className="grid grid-cols-5 gap-4">
            {Array.from(iteratorRange).map((value) => (
              <li
                className="border border-green-900 bg-slate-300 text-center p-4 rounded-lg text-xl"
                key={value}
              >
                {value}
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-yellow-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-serif text-white mb-4 text-center">
            Generator Range
          </h2>
          <ul className="grid grid-cols-5 gap-4">
            {Array.from(generatorRange).map((value) => (
              <li
                className="border border-green-950 bg-slate-200 text-center p-4 rounded-lg text-xl"
                key={value}
              >
                {value}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
