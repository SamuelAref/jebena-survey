import Tags from "../Tags";

export default function SurveyCard({
  survey,
  handleSetShow,
  handleModalType,
  handleSurveyId,
  handleSurveyDeletion,
}) {
  return (
    <div
      key={survey.id}
      className="cards rounded bg-white w-86 border-black h-auto my-2 mr-4 "
    >
      <div className="text-3xl font-bold text-brandBrown pt-4 pl-4">
        {survey.surveyTitle}
      </div>

      <Tags surveys={survey} />
      <p className="px-5 my-2 text-textGrey font-medium">
        {survey.surveyDescription}
      </p>
      <div className="flex flex-row justify-evenly items-center p-3">
        <button
          onClick={(e) => {
            handleSetShow(true);
            handleModalType("preview");
            handleSurveyId(survey.id);
          }}
          className="bg-headerBlue text-white rounded-2xl h-5 flex justify-center items-center text-center text-xs p-2"
        >
          Preview Survey
        </button>
        <button
          onClick={(e) => {
            handleSetShow(true);
            handleModalType("edit");
            handleSurveyId(survey.id);
          }}
          className="bg-brandBrown text-white rounded-2xl h-5 flex justify-center items-center text-center text-xs p-2"
        >
          Edit Survey
        </button>
        <button
          onClick={(e) => handleSurveyDeletion(survey.id)}
          className="bg-red text-white rounded-2xl h-5 flex justify-center items-center text-center text-xs p-2"
        >
          Delete Survey
        </button>
      </div>
    </div>
  );
}
