import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import Breadcrumb from "../../Utils/Breadcrumb";

interface Document {
  id: string;
  documentName: string;
  createdDate: string;
  fileLink: string;
}

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Job Details", path: "/profile/job-details" },
  { name: "Upload Documents", path: "/profile/job-details/upload-documents" },
];

const ShowDocuments: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/uploadedDocuments")
      .then((response) => response.json())
      .then((data) => setDocuments(data))
      .catch((error) => console.error("Error fetching documents:", error));
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen">
      <Layout>
        <div className="flex flex-col items-center bg-gray-50 w-3/4 mx-auto p-6">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mb-4 text-xl font-bold">
            Job Details / View Documents
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex flex-col items-center p-4 rounded shadow bg-white"
              >
                <img
                  src="https://www.svgrepo.com/show/152004/pdf.svg"
                  alt="PDF Icon"
                  className="w-12 h-12 mb-2"
                />
                <span className="text-sm text-center">{doc.documentName}</span>
                <a
                  href={doc.fileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-2"
                >
                  View Document
                </a>
              </div>
            ))}
          </div>
          <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded">
            Download ALL (Zip)
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default ShowDocuments;
