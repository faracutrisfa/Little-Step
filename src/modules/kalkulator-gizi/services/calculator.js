export function calculateIdealWeightRange(heightCm, ageMonths) {
  if (!heightCm || !ageMonths) return { min: 0, max: 0 };

  const height = parseFloat(heightCm);
  let minWeight = 0;
  let maxWeight = 0;

  if (height <= 65) {
    minWeight = 6.4;
    maxWeight = 7.8;
  } else if (height <= 66) {
    minWeight = 7.1;
    maxWeight = 7.94;
  } else if (height <= 67) {
    minWeight = 7.3;
    maxWeight = 8.3;
  } else if (height <= 68) {
    minWeight = 7.5;
    maxWeight = 8.6;
  } else {
    minWeight = 7.7;
    maxWeight = 9;
  }

  return {
    min: parseFloat(minWeight.toFixed(2)),
    max: parseFloat(maxWeight.toFixed(2)),
  };
}

export function checkWeightCategory(weight, idealMin, idealMax) {
  const w = parseFloat(weight);
  if (w < idealMin) return "Kurang";
  if (w > idealMax && w <= idealMax + 0.95) return "Berlebihan";
  if (w > idealMax + 0.95) return "Obesitas";
  return "Sehat";
}

export function estimateNutritionFromIngredients(ingredients) {
  const baseData = {
    wortel: {
      energy: 41,
      protein: 0.9,
      fat: 0.2,
      carb: 10,
      iron: 0.3,
      calcium: 33,
      vitaminA: 835,
      vitaminC: 5.9,
    },
    kentang: {
      energy: 77,
      protein: 2,
      fat: 0.1,
      carb: 17,
      iron: 0.8,
      calcium: 12,
      vitaminA: 0,
      vitaminC: 19.7,
    },
    ayam: {
      energy: 165,
      protein: 31,
      fat: 3.6,
      carb: 0,
      iron: 1.3,
      calcium: 15,
      vitaminA: 13,
      vitaminC: 0,
    },
  };

  const values = {
    energy: 0,
    protein: 0,
    fat: 0,
    carb: 0,
    iron: 0,
    calcium: 0,
    vitaminA: 0,
    vitaminC: 0,
  };

  ingredients.forEach((item) => {
    const lower = item.toLowerCase();
    if (baseData[lower]) {
      Object.keys(baseData[lower]).forEach((key) => {
        values[key] += baseData[lower][key];
      });
    }
  });

  return values;
}

export function getNutritionNeeds(ageMonths) {
  if (ageMonths !== 6) return null;
  return {
    energy: 625,
    protein: 9,
    fat: 30,
    carb: 60,
    iron: 11,
    calcium: 270,
    vitaminA: 375,
    vitaminC: 50,
  };
}

function calculateAgeInMonths(birthdateStr) {
  const birthDate = new Date(birthdateStr);
  const today = new Date();
  const months =
    (today.getFullYear() - birthDate.getFullYear()) * 12 +
    today.getMonth() -
    birthDate.getMonth();
  return Math.max(months, 0);
}

const text = {
  kurang:
    "Bayi Bunda memiliki berat badan kurang dari ideal. Disarankan untuk konsultasi lebih lanjut.",
  ideal: `Bayi Bunda terindikasi sehat dengan berat badan ideal, yaitu antara {minIdeal} – {maxIdeal} kg. Si kecil berada dalam kategori gizi baik, sesuai dengan standar WHO untuk usianya.`,
  berlebih:
    "Bayi Bunda memiliki berat badan berlebih dari ideal. Perlu diperhatikan asupan gizinya.",
  obesitas:
    "Bayi Bunda terindikasi obesitas. Segera konsultasikan dengan dokter atau ahli gizi untuk perencanaan diet yang tepat.",
};

export function calculateNutrition({ height, weight, birthdate, ingredients }) {
  const ageMonths = calculateAgeInMonths(birthdate);
  const idealWeight = calculateIdealWeightRange(height, ageMonths);
  const weightCategory = checkWeightCategory(
    weight,
    idealWeight.min,
    idealWeight.max
  );
  const ingredientsList = ingredients.split(",").map((i) => i.trim());
  const estimatedNutrition = estimateNutritionFromIngredients(ingredientsList);
  const nutritionNeeds = getNutritionNeeds(ageMonths);

  let weightStatusMessage = "";

  switch (weightCategory) {
    case "Kurang":
      weightStatusMessage = text.kurang;
      break;
    case "Sehat":
      weightStatusMessage = text.ideal
        .replace("{minIdeal}", idealWeight.min)
        .replace("{maxIdeal}", idealWeight.max);
      break;
    case "Berlebihan":
      weightStatusMessage = text.berlebih;
      break;
    case "Obesitas":
      weightStatusMessage = text.obesitas;
      break;
    default:
      weightStatusMessage = "Status berat badan tidak diketahui.";
  }

  return {
    idealWeight,
    weightCategory,
    statusText: weightStatusMessage,
    estimatedNutrition,
    nutritionNeeds,
  };
}
