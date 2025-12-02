import ProjectCard from "../../components/ProjectCard";

export default function AIProjects() {
  const projects = [
    { title: "Car Price Prediction", level: "Beginner" },
    { title: "Salary Prediction", level: "Beginner" },
    { title: "Iris Flower Classification", level: "Beginner" },
    { title: "House Price Prediction", level: "Intermediate" },
    { title: "Breast Cancer Detection", level: "Intermediate" },
    { title: "Plant Disease Classification", level: "Intermediate" },
    { title: "Customer Churn Prediction", level: "Intermediate" },
    { title: "Handwritten Digit Recognition (MNIST)", level: "Advanced" },
    { title: "Credit Card Fraud Detection", level: "Advanced" },
    { title: "Image Classification with CNNs", level: "Advanced" },
    { title: "Face Recognition System", level: "Advanced" },
  ];

  return (
    <div className="w-full flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        AI Projects (Beginner → Advanced)
      </h1>

      <div className="w-[80vw] md:w-[60vw] grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={i} title={p.title} level={p.level} />
        ))}
      </div>
    </div>
  );
}
