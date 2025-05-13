import React, { useState } from 'react';
import Food from "../../../assets/sweet-carrot.png"
import Profile from "../../../assets/bunda-profile.webp"

const RekomendasiMakanan = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const recommendationGroups = [
        {
            title: "Wortel, Kentang dan Ayam",
            recipes: [
                {
                    title: "Sweet Carrot Cream",
                    author: "Kamilia Arina",
                    description: "Puree lembut dari wortel kukus yang dipadukan dengan susu"
                },
                {
                    title: "Sweet Carrot Cream",
                    author: "Kamilia Arina",
                    description: "Puree lembut dari wortel kukus yang dipadukan dengan susu"
                },
                {
                    title: "Sweet Carrot Cream",
                    author: "Kamilia Arina",
                    description: "Puree lembut dari wortel kukus yang dipadukan dengan susu"
                }
            ]
        }
    ];

    return (
        <section>
            <div className="space-y-8">
                <div className="border border-blue-400 rounded-lg">
                    <div className="border-2 border-primary-70 rounded-lg">
                        <button onClick={toggleOpen} className="w-full flex justify-between items-center p-3 text-primary-70 font-extrabold hover:bg-blue-50 transition-colors">
                            <span>Lihat Rekomendasi Menu Makanan sesuai Bahan Makanan</span>
                            <span className="text-xl">+</span>
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="bg-primary-40 p-6 rounded-lg">
                        {recommendationGroups.map((group, groupIndex) => (
                            <div key={groupIndex} className="mb-4">
                                <h3 className="text-center justify-start text-zinc-800 font-extrabold mb-3">{group.title}</h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {group.recipes.map((recipe, recipeIndex) => (
                                        <div key={recipeIndex} className="bg-white rounded-lg overflow-hidden flex">
                                            <div className="w-1/3">
                                                <div className="bg-orange-200 rounded-lg h-full flex items-center justify-center">
                                                    <img src={Food} alt="food" />
                                                </div>
                                            </div>
                                            <div className="w-2/3 p-3">
                                                <h4 className="font-extrabold text-sm">{recipe.title}</h4>
                                                <div className="flex items-center space-x-1 my-1">
                                                    <div className="w-5 h-5 bg-gray-300 rounded-full">
                                                        <img src={Profile} alt="profile" />
                                                    </div>
                                                    <span className="text-xs font-bold">{recipe.author}</span>
                                                </div>
                                                <p className="text-neutral-500 text-xs font-semibold mt-2">{recipe.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default RekomendasiMakanan;