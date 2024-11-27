import React, { useState } from "react";

const GenerateContentPage = () => {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleGenerate = () => {
    console.log("Generate content for:", description, file);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Generate Web Series</h1>
      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full mt-4"
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mt-4"
      />
      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white px-4 py-2 mt-4"
      >
        Generate
      </button>
    </div>
  );
};

export default GenerateContentPage;
