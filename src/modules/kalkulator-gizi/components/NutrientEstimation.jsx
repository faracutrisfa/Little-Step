// components/NutrientEstimation.jsx

import React from 'react';

const NutrientEstimation = ({ estimatedNutrition }) => {
  if (!estimatedNutrition) return null;

  const { energy, protein, fat, carb, iron, calcium, vitaminA, vitaminC } = estimatedNutrition;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-4">
      <h3 className="text-lg font-semibold mb-2">Estimasi Kandungan Gizi</h3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>Energi: <span className="font-medium">{energy} kkal</span></div>
        <div>Protein: <span className="font-medium">{protein} g</span></div>
        <div>Lemak: <span className="font-medium">{fat} g</span></div>
        <div>Karbohidrat: <span className="font-medium">{carb} g</span></div>
        <div>Zat Besi: <span className="font-medium">{iron} mg</span></div>
        <div>Kalsium: <span className="font-medium">{calcium} mg</span></div>
        <div>Vitamin A: <span className="font-medium">{vitaminA} µg</span></div>
        <div>Vitamin C: <span className="font-medium">{vitaminC} mg</span></div>
      </div>
    </div>
  );
};

export default NutrientEstimation;
