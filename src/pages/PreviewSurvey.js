import Tags from "../components/Tags";

const Preview = ({ surveys }) => {
  const handleListQuestions = (question) => {
    //switch statement to output question types
    switch (question.questionType) {
      case "text":
        return (
          <div className="cards text-card border-khakiDark border-l-8 border-t-2 question w-136 h-auto my-3 ml-10 relative flex-col">
            <div className="text-xl font-bold text-brandBrown pl-4 pt-2">
              Question {surveys.questions.indexOf(question) + 1}
            </div>

            <p className="pl-5 pt-1 pr-1 text-sm font-medium mr-2">
              {question.questionText}
            </p>
            <textarea
              className="question-text focus:outline-none border-2 border-khakiDark resize-none ml-4 my-2 text-xs"
              name=""
              id=""
              cols="114"
              rows="5"
            ></textarea>
          </div>
        );
      case "numbered":
        return (
          <div className="cards text-card border-khakiDark border-l-8 border-t-2 question w-136 h-auto my-4 ml-10 relative flex-col">
            <div className="text-xl font-bold text-brandBrown pl-4 pt-2">
              Question {surveys.questions.indexOf(question) + 1}
            </div>
            <div className="flex flex-row justify-start items-start">
              <p className="pl-5 pt-1 pr-4 text-sm font-medium mr-2 mb-2">
                {question.questionText}
              </p>
              <input
                className="focus:outline-none text-center w-16 border-2 border-khakiDark mx-4 h-8 mb-2"
                placeholder="0"
                type="number"
              />
            </div>
          </div>
        );
      case "boolean":
        return (
          <div className="cards text-card border-khakiDark border-l-8 border-t-2 question w-136 h-auto my-4 ml-10 relative flex-col">
            <div className="text-xl font-bold text-brandBrown pl-4 pt-2">
              Question {surveys.questions.indexOf(question) + 1}
            </div>
            <div className="flex flex-row justify-start items-center">
              <p className="pl-5 pt-1 pr-4 text-sm font-medium mr-4 mb-2">
                {question.questionText}
              </p>
              <div className="flex flex-row m-1 justify-evenly items-center w-80 mr-4 mb-2">
                <div className="flex flex-row justify-evenly items-center">
                  <input
                    className="hover:cursor-pointer"
                    type="radio"
                    value="True"
                    name="tOrF"
                  />
                  <div className="text-sm m-1 text-center  font-medium">
                    True
                  </div>
                </div>
                <div className="flex flex-row justify-evenly items-center">
                  <input
                    className="hover:cursor-pointer"
                    type="radio"
                    value="True"
                    name="tOrF"
                  />
                  <div className="text-sm m-1 text-center font-medium">
                    False
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "choice":
        return (
          <div className="cards text-card border-khakiDark border-l-8 border-t-2 question w-136 my-3 ml-10 flex-col">
            <div className="text-xl font-bold text-brandBrown pl-4 pt-2">
              Question {surveys.questions.indexOf(question) + 1}
            </div>
            <p className="pl-5 pt-1 pr-1 text-sm font-medium mr-2">
              {question.questionText}
            </p>
            <div className="flex flex-col m-1 justify-start items-start w-auto mr-4 mb-4">
              {question.choices &&
                question.choices.map((choice, index) => (
                  <div
                    key={index}
                    className="flex flex-row justify-evenly items-center pl-4 pt-2 mb-2"
                  >
                    <input
                      className="hover:cursor-pointer"
                      type="radio"
                      value={choice}
                      name="choice"
                    />
                    <div className="text-xs m-1 ml-2 font-medium">{choice}</div>
                  </div>
                ))}
            </div>
          </div>
        );
      default:
        break;
    }
  };
  return (
    <div className=" w-full h-112 flex flex-row flex-wrap justify-center items-center overflow-y-auto">
      <div className="survey-basics w-140 h-108 m-2 flex justify-start items-start flex-col overflow-y-auto">
        <div className="flex flex-row justify-centeritems-center pl-10">
          <div className="text-3xl font-bold text-brandBrown">
            {surveys.surveyTitle}
          </div>

          <Tags surveys={surveys} />
        </div>

        {surveys.questions &&
          surveys.questions.map((question, index) => (
            <div key={index}>
              {/* list of questions to preview from switch */}
              {handleListQuestions(question)}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Preview;
