import React, { useState, useRef } from 'react';
import HasilAI from './HasilAI';
import { Icon } from '@iconify/react';

const FoodScan = () => {
    const [showResult, setShowResult] = useState(false);
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');
    const fileInputRef = useRef(null);

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files?.[0];
        if (droppedFile) setFile(droppedFile);
    };

    const handleDragOver = (e) => e.preventDefault();

    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) setFile(selectedFile);
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!file) {
            alert('Silakan unggah gambar terlebih dahulu.');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);
        formData.append('description', description);

        console.log('Submitting...', formData);

        setShowResult(true);
    };

    return (
        <section>
            <div className="bg-secondary-10">
                <div className="container py-10">
                    <div className="mb-10 text-center">
                        <h1 className="text-neutral-0 font-bold text-2xl lg:text-4xl mb-2">
                            AI Based Food Scan
                        </h1>
                        <p className="text-neutral-0 font-semibold text-sm lg:text-base">
                            Gunakan fitur AI-Based Food Scan kami untuk mengenali makanan MPASI secara instan dan cek kandungan gizi dalam sekejap.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">
                        <div
                            className="flex flex-col items-center justify-center w-full lg:w-1/2 h-72 lg:h-96 p-6 rounded-lg border-2 border-dashed border-secondary-50 bg-white/70"
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
                            {file ? (
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt="Uploaded Preview"
                                    className="w-80 rounded-md"
                                />
                            ) : (
                                <div className="flex flex-col items-center gap-2">
                                    <Icon icon="mdi:cloud-upload-outline" width="64" height="64" className="text-secondary-50" />
                                    <p className="text-secondary-50 font-bold text-2xl">Drag and drop file here</p>
                                    <p className="text-neutral-90">atau</p>
                                    <button
                                        type="button"
                                        onClick={handleButtonClick}
                                        className="bg-secondary-50 hover:bg-secondary-70 text-white font-semibold py-2 px-20 rounded-lg mt-4"
                                    >
                                        Cari File
                                    </button>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                </div>
                            )}
                        </div>

                        <form
                            className="flex flex-col w-full lg:w-1/2 gap-2"
                            onSubmit={onSubmit}
                        >
                            <label className="font-bold text-neutral-0">
                                Tuliskan deskripsi jika ingin menambahkan penjelasan
                            </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full h-32 p-4 bg-white/70 placeholder-secondary-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-40 resize-none"
                                placeholder="Contoh: Ini adalah bubur ayam kaldu jamur"
                            />
                            <button
                                type="submit"
                                className="w-full bg-secondary-50 hover:bg-secondary-70 text-white font-semibold py-3 rounded-lg"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

            </div>

            {showResult && <HasilAI />}
        </section>
    );
};

export default FoodScan;