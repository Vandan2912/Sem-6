"use client";
import React, { useState } from "react";
import { Folder, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import DynamicPdfViewer from "./DynamicPdfViewer";

const Dashboard = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  // Sample data - replace with your actual PDF paths
  const subjects = [
    {
      id: 1,
      name: "601 - Cloud",
      pdfs: [
        { name: "Chapter 1", path: "/pdfs/Cloud/1.pdf" },
        { name: "Chapter 2", path: "/pdfs/Cloud/2.pdf" },
        { name: "Chapter 3", path: "/pdfs/Cloud/3.pdf" },
        { name: "Chapter 4", path: "/pdfs/Cloud/4.pdf" },
        { name: "Full Syllabus", path: "/pdfs/Cloud/syllabus.pdf" },
      ],
    },
    {
      id: 2,
      name: "602 - Python",
      pdfs: [
        { name: "Chapter 1", path: "/pdfs/Python/1.pdf" },
        { name: "Chapter 2", path: "/pdfs/Python/2.pdf" },
        { name: "Chapter 3", path: "/pdfs/Python/3.pdf" },
        { name: "Chapter 4", path: "/pdfs/Python/4.pdf" },
        { name: "Full Syllabus", path: "/pdfs/Python/syllabus.pdf" },
        { name: "Practical List", path: "/pdfs/Python/practical.pdf" },
      ],
    },
    {
      id: 3,
      name: "603 - IOT",
      pdfs: [
        { name: "Chapter 1", path: "/pdfs/IoT/1.pdf" },
        { name: "Chapter 2", path: "/pdfs/IoT/2.pdf" },
        { name: "Chapter 3", path: "/pdfs/IoT/3.pdf" },
        { name: "Chapter 4", path: "/pdfs/IoT/4.pdf" },
        { name: "Full Syllabus", path: "/pdfs/IoT/syllabus.pdf" },
        { name: "Assignment", path: "/pdfs/IoT/assignment.pdf" },
      ],
    },
    {
      id: 4,
      name: "604 - Java",
      pdfs: [
        { name: "Chapter 1", path: "/pdfs/Java/1.pdf" },
        { name: "Chapter 2", path: "/pdfs/Java/2.pdf" },
        { name: "Chapter 3", path: "/pdfs/Java/3.pdf" },
        { name: "Chapter 4", path: "/pdfs/Java/4.pdf" },
        { name: "Full Syllabus", path: "/pdfs/Java/syllabus.pdf" },
        { name: "Practical List", path: "/pdfs/Java/practical.pdf" },
      ],
    },
    {
      id: 5,
      name: "605 - Mobile Programming",
      pdfs: [
        { name: "Chapter 1", path: "/pdfs/Mobile/1.pdf" },
        { name: "Chapter 2", path: "/pdfs/Mobile/2.pdf" },
        { name: "Chapter 3", path: "/pdfs/Mobile/3.pdf" },
        { name: "Chapter 4", path: "/pdfs/Mobile/4.pdf" },
        { name: "Full Syllabus", path: "/pdfs/Mobile/syllabus.pdf" },
        { name: "Assignment", path: "/pdfs/Mobile/assignment.pdf" },
      ],
    },
    {
      id: 6,
      name: "603 - OS",
      pdfs: [
        { name: "Chapter 1", path: "/pdfs/OS/1.pdf" },
        { name: "Chapter 2", path: "/pdfs/OS/2.pdf" },
        { name: "Chapter 3", path: "/pdfs/OS/3.pdf" },
        { name: "Chapter 4", path: "/pdfs/OS/4.pdf" },
        { name: "Full Syllabus", path: "/pdfs/OS/syllabus.pdf" },
        { name: "Assignment", path: "/pdfs/OS/assignment.pdf" },
      ],
    },
    {
      id: 7,
      name: "607.4 - Software Test Automation",
      pdfs: [
        { name: "Chapter 1", path: "/pdfs/IoT/1.pdf" },
        { name: "Chapter 2", path: "/pdfs/IoT/2.pdf" },
        { name: "Chapter 3", path: "/pdfs/IoT/3.pdf" },
        { name: "Chapter 4", path: "/pdfs/IoT/4.pdf" },
        { name: "Full Syllabus", path: "/pdfs/IoT/syllabus.pdf" },
        { name: "Assignment", path: "/pdfs/IoT/assignment.pdf" },
      ],
    },
  ];

  const syllabusPdfs = [{ id: 1, name: "Practical Syllabus", path: "/pdfs/Practical_Exam_Syllabus.pdf" }];

  if (selectedPdf) {
    return <DynamicPdfViewer pdfPath={selectedPdf} setSelectedPdf={setSelectedPdf} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">6th Semester Dashboard</h1>

        {/* Syllabus Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Practical Syllabus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {syllabusPdfs.map((pdf) => (
              <Card key={pdf.id} className="hover:shadow-lg transition-shadow" onClick={() => setSelectedPdf(pdf.path)}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 cursor-pointer">
                    <FileText className="h-6 w-6 text-blue-500" />
                    <span className="text-gray-700">{pdf.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Subjects Grid */}
        <h2 className="text-xl font-semibold mb-4">Subjects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Card key={subject.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Folder className="h-8 w-8 text-blue-500" />
                  <h3 className="text-lg font-medium">{subject.name}</h3>
                </div>
                {subject.pdfs.length > 0 && (
                  <div className="space-y-2">
                    {subject.pdfs.map((pdf, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-500 cursor-pointer"
                        onClick={() => setSelectedPdf(pdf.path)}
                      >
                        <FileText className="h-4 w-4" />
                        <span>{pdf.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
