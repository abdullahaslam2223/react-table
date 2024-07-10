import React, { useRef, useState } from "react";
import Breadcrumb from "../../Utils/Breadcrumb";
import { NavigateFunction, useNavigate } from "react-router-dom";

const documents: string[] = [
  "Offer Letter",
  "NYSC Certificate",
  "Guarantor's Form",
  "Degree Certificate",
  "Birth Certificate",
];

const UploadDocuments: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [selectedFiles, setSelectedFiles] = useState<(File | null)[]>(
    Array(documents.length).fill(null)
  );

  const handleUploadClick = (index: number): void => {
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index]?.click();
    }
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const updatedFiles = [...selectedFiles];
      updatedFiles[index] = file;
      setSelectedFiles(updatedFiles);
    }
  };

  const handleUploadDocuments = async () => {
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      if (file) {
        const fileLink = `http://localhost:5173/${file.name}`;
        const createdDate = new Date().toISOString();

        const metadata = {
          documentName: documents[i],
          createdDate,
          fileLink,
        };

        try {
          const response = await fetch(
            "http://localhost:3000/uploadedDocuments",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(metadata),
            }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const result = await response.json();
          navigate("/profile/job-details");
          console.log("Success:", result);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }
  };

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Job Details", path: "/profile/job-details" },
    { name: "Upload Documents", path: "/profile/job-details/upload-documents" },
  ];

  return (
    <div className="w-3/4 mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-lg">
      <Breadcrumb items={breadcrumbItems} />
      <h2 className="text-xl font-bold mb-4">Job Details / Upload Documents</h2>
      {documents.map((doc, index) => (
        <div key={index} className="mb-4">
          <label className="block text-sm font-bold mb-1">{`Upload ${doc}`}</label>
          <div className="flex items-center">
            <div className="flex-grow h-10 bg-blue-100 rounded-l-lg flex items-center px-2 overflow-hidden">
              {selectedFiles[index] ? selectedFiles[index]?.name : ""}
            </div>
            <input
              type="file"
              className="hidden"
              ref={(el) => (fileInputRefs.current[index] = el)}
              onChange={(e) => handleFileChange(e, index)}
            />
            <button
              className="p-2 h-10 bg-yellow-300 rounded-r-lg"
              onClick={() => handleUploadClick(index)}
            >
              Upload
            </button>
          </div>
        </div>
      ))}
      <button
        className="w-full p-2 bg-blue-600 text-white font-bold rounded-lg"
        onClick={handleUploadDocuments}
      >
        Upload Documents
      </button>
    </div>
  );
};

export default UploadDocuments;
