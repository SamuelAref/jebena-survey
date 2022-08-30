import { useState, useEffect } from "react";
import exit from "../assets/images/exit.png";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const Edit = ({
  surveysSpecific,
  surveys,
  handleSurveyAddition,
  onClose,
  handleSurveyEdition,
}) => {
  const [surveyTitle, setSurveyTitle] = useState(surveysSpecific.surveyTitle);
  const [surveyType, setSurveyType] = useState(surveysSpecific.surveyType);
  const [surveyDuration, setSurveyDuration] = useState(
    surveysSpecific.surveyDuration
  );
  const [surveyDescription, setSurveyDescription] = useState(
    surveysSpecific.surveyDescription
  );
  const [addChoice, setAddChoice] = useState(surveysSpecific.choices);
  const [questions, setQuestions] = useState(surveysSpecific.questions);

  const [quest, updateQuest] = useState(questions);
  useEffect(() => {
    updateQuest(questions);
  }, [questions]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(quest);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setQuestions(items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSurveyTitle("");
    setSurveyType("none");
    setSurveyDuration();
    setSurveyDescription("");
    setQuestions([]);
  };
  const handleQuestions = () => {
    setQuestions([
      ...questions,
      {
        id: questions.length,
        questionText: "",
        questionType: "",
        choices: addChoice,
      },
    ]);
  };
  const handleAddQuestions = (
    id,
    text,
    type,
    choices,
    addBtn,
    addChoiceBtn
  ) => {
    let choiceArr = Object.values(choices);
    const newChoice = choiceArr.filter((choice) => Number(choice.name) === id);

    if (addBtn.target.innerText === "Edit Question") {
      addBtn.target.innerText = "Update Question";
      addBtn.target.previousElementSibling.disabled = false;
      addBtn.target.previousElementSibling.previousElementSibling.disabled = false;
      addChoiceBtn.style.display = "block";

      for (let i = 0; i < choices.length; i++) {
        choices[i].disabled = false;
        choices[i].nextElementSibling.style.visibility = "visible";
        choices[i + 1].disabled = false;
      }
    } else {
      setQuestions(
        questions.map((question) => {
          if (question.id === id) {
            return {
              ...question,
              id: id,
              questionText: text,
              questionType: type,
              choices: newChoice.map((choice) => {
                return choice.value;
              }),
            };
          }

          return question;
        })
      );

      addBtn.target.innerText = "Edit Question";
      addBtn.target.previousElementSibling.disabled = true;
      addBtn.target.previousElementSibling.previousElementSibling.disabled = true;
      if (type === "choice") addChoiceBtn.style.display = "none";

      for (let i = 0; i < choices.length; i++) {
        choices[i].disabled = true;
        choices[i].nextElementSibling.style.visibility = "hidden";

        choices[i + 1].disabled = true;
      }
    }
  };

  const handleMultiple = (data, component) => {
    if (data === "choice") component.style.display = "block";
    else component.style.display = "none";
  };

  const handleChoiceAdd = (id) => {
    setAddChoice([...addChoice, "choiceAdded"]);
    questions[id].choices.push(`added choice ${questions[id].choices.length}`);
  };

  const handleQuestionDelete = (id) => {
    setQuestions(
      questions.filter((question) => {
        return question.id !== id;
      })
    );
  };

  const handleChoiceDelete = (questId, choiceId) => {
    console.log(choiceId);
    setAddChoice(questions[questId].choices.splice(choiceId, 1));
  };

  return (
    <div className=" w-full h-full flex flex-row flex-wrap justify-center items-center overflow-y-auto">
      <div className="cards border-brandBrown survey-basics w-72 h-100 m-2 flex flex-col">
        <form
          spellCheck="false"
          action="#"
          onSubmit={handleSubmit}
          className="flex flex-col"
        >
          <label
            className="text-xl text-khakiDark pl-4 pt-2 mb-2 font-medium"
            htmlFor="surveyTitle"
          >
            Survey Title
          </label>
          <textarea
            onChange={(e) => setSurveyTitle(e.target.value)}
            defaultValue={surveyTitle}
            required
            cols="70"
            rows="1"
            className="border-b-2 resize-none border-khakiDark w-60 mx-4 my-1 focus:outline-none text-sm px-1"
            type="text"
            id="surveyTitle"
            name="surveyTitle"
          />
          <label
            className="text-xl text-khakiDark pl-4 pt-2 font-medium mb-2"
            htmlFor="surveyType"
          >
            Survey Type
          </label>
          <div className="flex flex-row m-1 justify-evenly items-center">
            <div className="flex flex-row justify-evenly items-center">
              <input
                onChange={(e) => setSurveyType(e.target.value)}
                className="hover:cursor-pointer"
                type="radio"
                value="Personal"
                name="surveyType"
                // checked={surveysSpecific.surveyType === "Personal" ? true : false}
              />
              <div className="text-sm m-1 text-brandBrown text-center font-medium">
                Personal
              </div>
            </div>

            <div className="flex flex-row  justify-evenly items-center">
              <input
                onChange={(e) => setSurveyType(e.target.value)}
                className="hover:cursor-pointer"
                type="radio"
                value="Research"
                name="surveyType"
                // checked={surveysSpecific.surveyType === "Research" ? true : false}
              />
              <div className="text-sm m-1 text-brandBrown  text-center font-medium">
                Research
              </div>
            </div>

            <div className="flex flex-row  justify-evenly items-center">
              <input
                onChange={(e) => setSurveyType(e.target.value)}
                className="hover:cursor-pointer"
                type="radio"
                value="Feedback"
                name="surveyType"
                // checked={surveysSpecific.surveyType === "Feedback" ? true : false}
              />
              <div className="text-sm m-1 text-brandBrown  text-center font-medium">
                Feedback
              </div>
            </div>
          </div>
          <div className=" m-1 flex flex-row justify-start items-center">
            <label
              htmlFor="surveyDuration"
              className="text-xl mr-2 ml-3  font-medium w-40 text-khakiDark"
            >
              Survey Duration
            </label>
            <input
              onChange={(e) => setSurveyDuration(e.target.value)}
              className="focus:outline-none w-16 focus:w-20 border-b-2  border-khaki"
              placeholder="minute"
              max={60}
              min={1}
              type="number"
              defaultValue={surveysSpecific.surveyDuration}
            />
          </div>
          <div className="flex flex-col justify-start items-start">
            <label
              className="text-xl pl-3 pt-2 text-khakiDark  ml-1 mt-2 font-medium"
              htmlFor="surveyDescription"
            >
              Survey Description
            </label>
            <textarea
              required
              onChange={(e) => setSurveyDescription(e.target.value)}
              defaultValue={surveyDescription}
              className="focus:outline-none border-2 border-khakiDark m-4 mt-2 resize-none p-1"
              name=""
              id=""
              cols="30"
              rows="4"
            ></textarea>
            <div className="w-64 ml-4 flex justify-end items-center">
              <button
                onClick={() => {
                  {
                    surveyTitle && surveyDescription && onClose();
                  }
                  {
                    surveyTitle &&
                      surveyDescription &&
                      handleSurveyEdition(
                        surveysSpecific.id,
                        surveyTitle,
                        surveyType,
                        surveyDuration,
                        surveyDescription,
                        questions
                      );
                  }
                }}
                type="submit"
                className="button bg-brandBrown text-khaki font-bold rounded-2xl h-6 w-20 flex justify-center items-center text-center text-md p-2"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="cards survey-questions w-134  h-100 m-2  flex-col justify-evenly items-center relative">
        <div className="font-medium text-khakiDark text-2xl mb-2">
          Questions
        </div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="questions">
            {(provided) => (
              <div
                className="overflow-y-auto questions w-full h-84"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {questions &&
                  questions.map((question, index) => (
                    <Draggable
                      key={question.id}
                      draggableId={question.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className="cards ml-2 border-khakiDark border-l-8 border-t-2 question w-133 h-auto my-4 relative flex-col"
                        >
                          <div
                            onClick={() => handleQuestionDelete(question.id)}
                            className="w-8 h-8 absolute right-0 top-0 p-1 hover:p-0 hover:cursor-pointer"
                          >
                            <img src={exit} alt="" />
                          </div>
                          <div className="font-medium text-brandBrown text-lg pl-2">
                            Question {questions.indexOf(question) + 1}
                          </div>
                          <div className="flex flex-row justify-evenly items-center">
                            <textarea
                              className="question-text focus:outline-none border-2 border-khakiDark m-2 mb-6 resize-none p-1 text-xs"
                              name=""
                              id=""
                              cols="70"
                              rows="2"
                            >
                              {question.questionText}
                            </textarea>
                            <select
                              onChange={(e) =>
                                handleMultiple(
                                  document.getElementsByClassName(
                                    "questionType"
                                  )[question.id].value,
                                  document.getElementsByClassName(
                                    "show-Multiple"
                                  )[question.id]
                                )
                              }
                              className="questionType border-2 border-khakiDark text-md font-medium bg-khakiDark m-2 -mt-6 hover:cursor-pointer"
                              name="questionType"
                              id="questionType"
                              defaultValue={question.questionType}
                            >
                              <option value="text">Open Question</option>
                              <option value="boolean">True or False</option>
                              <option value="numbered">
                                Numbered Question
                              </option>
                              <option value="choice">Multiple Choice</option>
                            </select>
                            <button
                              id={`button-${question.id}`}
                              onClick={(e) => {
                                handleAddQuestions(
                                  question.id,
                                  document.getElementsByClassName(
                                    "question-text"
                                  )[question.id].value,
                                  document.getElementsByClassName(
                                    "questionType"
                                  )[question.id].value,
                                  document.querySelectorAll(
                                    'input[type="text"]'
                                  ),
                                  e,
                                  document.getElementById(
                                    `addChoice-${question.id}`
                                  )
                                );
                              }}
                              className="button bg-brandBrown absolute right-0 bottom-0 text-khaki font-bold rounded-2xl h-5 w-26 flex justify-center items-center text-center text-xs p-2 m-1"
                            >
                              Update Question
                            </button>
                          </div>

                          {question.questionType === "choice" && (
                            <div className="show-Multiple">
                              <div className="font-bold text-brandBrown text-md pl-1 mb-5">
                                Update Choices
                              </div>

                              <div className="choice-container flex flex-col max-h-48 overflow-auto ">
                                {question &&
                                  question.choices &&
                                  question.choices.map((choice) => (
                                    <div
                                      key={question.choices.indexOf(choice)}
                                      className={`cont flex flex-row justify-center items-center ${
                                        question.choices.indexOf(choice) <= 1
                                          ? "mr-5"
                                          : ""
                                      }`}
                                    >
                                      <div className="font-bold text-brandBrown text-sm pl-1">
                                        Choice
                                      </div>
                                      <div className="flex flex-row justify-center items-center">
                                        <input
                                          type="text"
                                          className="focus:outline-none border-2 border-khakiDark m-2  p-1 text-xs h-7 w-96"
                                          name={question.id}
                                          defaultValue={choice}
                                        />
                                        <svg
                                          onClick={() =>
                                            handleChoiceDelete(
                                              question.id,
                                              question.choices.indexOf(choice)
                                            )
                                          }
                                          className={`${
                                            question.choices.indexOf(choice) <=
                                            1
                                              ? "hidden"
                                              : ""
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
                                  id={`addChoice-${question.id}`}
                                  onClick={() => handleChoiceAdd(question.id)}
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
                          )}

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
                      )}
                    </Draggable>
                  ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <div
          onClick={handleQuestions}
          className="rounded-full hover:border-2 border-headerBlue opacity-100 hover:opacity-100 hover:cursor-pointer  border-2 w-6 h-6 absolute left-0 top-0 ml-28 mt-2  bg-none flex justify-center items-center"
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
  );
};

export default Edit;
