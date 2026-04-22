import ScoreCircle from "./ScoreCircle";

const ResumeCard = ({
  resume: { id, companyName, jobTitle, imagePath, feedback },
}: {
  resume: Resume;
}) => {
  return (
    // Dans ResumeCard.tsx
    <a
      href={`/resume/${id}`}
      className="block border border-gray-200 rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-black font-bold text-xl">{companyName}</h2>
          <h3 className="text-sm text-gray-500">{jobTitle}</h3>
        </div>
        <ScoreCircle score={feedback.overallScore} />
      </div>

      <div className="rounded-lg overflow-hidden border border-gray-100">
        <img
          src={imagePath}
          alt={companyName}
          className="w-full h-48 object-cover object-top"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/300x400?text=No+Preview";
          }}
        />
      </div>
    </a>
  );
};

export default ResumeCard;
