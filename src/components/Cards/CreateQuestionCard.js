import exit from "../../assets/images/cross.png";

export default function QuestionCard({
  question,
  index,
  handleQuestionDelete,
  handleMultiple,
  handleAddQuestions,
  handleChoiceDelete,
  handleChoiceAdd,
}) {
  return (
    <div>
      <div
        onClick={() => handleQuestionDelete(index)}
        className="w-8 h-8 absolute right-0 top-0 p-1 hover:p-0 hover:cursor-pointer"
      >
        <img src={exit} alt="" />
      </div>
      <div className="font-medium text-brandBrown text-lg pl-1">
        Question {index + 1}
      </div>
      <div className="flex flex-row justify-evenly items-center">
        <textarea
          className="question-text focus:outline-none border-2 border-khakiDark m-2 mb-6 resize-none p-1 text-xs"
          name=""
          id=""
          cols="70"
          rows="2"
        ></textarea>
        <select
          onChange={() =>
            handleMultiple(
              document.getElementsByClassName("questionType")[question.id]
                .value,
              document.getElementsByClassName("show-Multiple")[index]
            )
          }
          className="questionType border-2 border-khakiDark text-md font-medium bg-khakiDark m-2 -mt-6 hover:cursor-pointer"
          name="questionType"
          id="questionType"
        >
          <option value="text">Open Question</option>
          <option value="boolean">True or False</option>
          <option value="numbered">Numbered Question</option>
          <option value="choice">Multiple Choice</option>
        </select>
        <button
          id={`button-${index}`}
          onClick={(e) => {
            e.preventDefault();
            handleAddQuestions(
              index,
              document.getElementsByClassName("question-text")[index].value,
              document.getElementsByClassName("questionType")[index].value,
              document.querySelectorAll('input[type="text"]'),
              e,
              document.getElementById(`addChoice-${index}`)
            );
          }}
          className="button bg-brandBrown absolute right-0 bottom-0 text-khaki font-bold rounded-2xl h-5 w-24 flex justify-center items-center text-center text-xs p-2 m-1 mr-5"
        >
          Add Question
        </button>
      </div>

      {
        <div className="show-Multiple" style={{ display: "none" }}>
          <div className="font-bold text-brandBrown text-md pl-1 mb-5">
            Add Choices
          </div>

          <div className="choice-container flex flex-col max-h-48 overflow-auto ">
            {question &&
              question.choices &&
              question.choices.map((choice, choiceIndex) => (
                <div
                  key={choiceIndex}
                  className={`cont flex flex-row justify-center items-center ${
                    choiceIndex <= 1 ? "mr-5" : ""
                  }`}
                >
                  <div className="font-bold text-brandBrown text-sm pl-1">
                    Choice
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <input
                      type="text"
                      className="focus:outline-none border-2 border-khakiDark m-2  p-1 text-xs h-7 w-80"
                      name={index}
                    />
                    <svg
                      onClick={() => handleChoiceDelete(index, choiceIndex)}
                      className={`${
                        choiceIndex <= 1 ? "hidden" : ""
                      } fill-red hover:cursor-pointer`}
                      width="20"
                      height="20"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM4.50003 7C4.22389 7 4.00003 7.22386 4.00003 7.5C4.00003 7.77614 4.22389 8 4.50003 8H10.5C10.7762 8 11 7.77614 11 7.5C11 7.22386 10.7762 7 10.5 7H4.50003Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              ))}

            <div
              id={`addChoice-${index}`}
              onClick={() => handleChoiceAdd(index)}
              className="rounded-full ml-28 hover:border-2 border-headerBlue opacity-100 hover:opacity-100 hover:cursor-pointer  border-2 w-6 h-6 mr-2 mb-2 bg-none flex justify-center items-center"
            >
              <svg
                className="fill-headerBlue cover w-full bg-white rounded-full height-full hover:p-0  p-1"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      }

      <svg
        className="w-5 h-5 absolute left-0 bottom-0 fill-black rotate-90"
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
}
