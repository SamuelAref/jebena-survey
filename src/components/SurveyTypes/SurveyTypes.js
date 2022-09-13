export default function SurveyTypes({ handleSurveyType }) {
  const surveyTypes = ["Personal", "Research", "Feedback"];

  return (
    <div className="flex flex-row m-1 justify-evenly items-center">
      {surveyTypes.map((type, index) => (
        <div key={index} className="flex flex-row justify-evenly items-center">
          <input
            onChange={(e) => handleSurveyType(e.target.value)}
            className="hover:cursor-pointer"
            type="radio"
            value={type}
            name="surveyType"
          />
          <div className="text-sm m-1 text-center font-medium">{type}</div>
        </div>
      ))}
    </div>
  );
}
