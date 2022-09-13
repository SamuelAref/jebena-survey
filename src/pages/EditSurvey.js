import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import EditQuestionCard from "../components/Cards/EditQuestionCard";
import SurveyTypes from "../components/SurveyTypes/SurveyTypes";

const Edit = ({ surveysSpecific, onClose, handleSurveyEdition }) => {
  // states

  const [surveyTitle, setSurveyTitle] = useState(surveysSpecific.surveyTitle);
  const [surveyType, setSurveyType] = useState(surveysSpecific.surveyType);
  const [surveyDuration, setSurveyDuration] = useState(
    surveysSpecific.surveyDuration
  );
  const [surveyDescription, setSurveyDescription] = useState(
    surveysSpecific.surveyDescription
  );
  const [addChoice, setAddChoice] = useState(
    surveysSpecific.questions.map((question) => {
      return question.questionType === "choice" ? question.choices : "";
    })
  );
  const [questions, setQuestions] = useState(surveysSpecific.questions);
  const [onDragQuestion, setOnDragQuestion] = useState(questions);

  //keep track of draggable questions
  useEffect(() => {
    setOnDragQuestion(questions);
  }, [questions]);

  // functions

  // keeps track of the question indices when rearranged
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(onDragQuestion);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setQuestions(items);
  };

  // resets the create survey template after submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSurveyTitle("");
    setSurveyType("none");
    setSurveyDuration();
    setSurveyDescription("");
    setQuestions([]);
  };

  // handles Question Addition
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

  // updates the edited question in the survey
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

    // toggles between edit state and update state
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

  // toggles view choice on multiple choice quesiton
  const handleMultiple = (data, component, questionId) => {
    if (data === "choice") component.style.display = "block";
    else component.style.display = "none";

    setQuestions(
      questions.map((question) => {
        if (question.id === questionId) {
          return { ...question, choices: [" ", " "] };
        }

        return question;
      })
    );
  };

  // adds choice to an existing multiple choice question
  const handleChoiceAdd = (id) => {
    setAddChoice([...addChoice, " "]);
    questions[id].choices.push(`  `);
  };

  // deletes a question from an existing survey
  const handleQuestionDelete = (id) => {
    setQuestions(
      questions.filter((question) => {
        return question.id !== id;
      })
    );
  };

  // deletes a choice from an existing choice question
  const handleChoiceDelete = (questId, choiceId) => {
    setAddChoice(questions[questId].choices.splice(choiceId, 1));
  };

  // handler function for survey type iteration
  const handleSurveyType = (value) => setSurveyType(value);

  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <div className="flex flex-row">
        <div className="border-brandBrown survey-basics w-72 h-108 m-2 flex flex-col">
          <form
            spellCheck="false"
            action="#"
            onSubmit={handleSubmit}
            className="flex flex-col h-full justify-evenly"
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

            <SurveyTypes handleSurveyType={handleSurveyType} />

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
                rows="5"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="survey-questions w-134  h-108 m-2  flex-col justify-evenly items-center relative">
          <div className="font-medium text-khakiDark text-2xl mb-2">
            Questions
          </div>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="questions">
              {(provided) => (
                <div
                  className="overflow-y-auto questions w-full h-86"
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
                            <EditQuestionCard
                              question={question}
                              index={index}
                              handleQuestionDelete={handleQuestionDelete}
                              handleMultiple={handleMultiple}
                              handleAddQuestions={handleAddQuestions}
                              handleChoiceDelete={handleChoiceDelete}
                              handleChoiceAdd={handleChoiceAdd}
                            />
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

      <div className="flex flex-row justify-between w-full m-2">
        <button
          onClick={onClose}
          className="button bg-brandBrown text-khaki rounded-2xl h-6 w-20 flex justify-center items-center text-center text-md p-2 m-2 ml-6 mb-4"
        >
          Close
        </button>

        <div className="ml-4 flex justify-end items-center mr-10 mb-2">
          <button
            onClick={() => {
              surveyTitle && surveyDescription && onClose();
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
            }}
            type="submit"
            className="button bg-headerBlue text-khaki font-bold rounded-2xl h-6 w-36 flex justify-center items-center text-center text-md p-2"
          >
            Update Survey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
