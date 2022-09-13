import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CreateQuestionCard from "../components/Cards/CreateQuestionCard";
import SurveyTypes from "../components/SurveyTypes/SurveyTypes";

const CreateSurvey = ({ handleSurveyAddition, surveys, onClose }) => {
  //states
  const [surveyTitle, setSurveyTitle] = useState();
  const [surveyType, setSurveyType] = useState("none");
  const [surveyDuration, setSurveyDuration] = useState();
  const [surveyDescription, setSurveyDescription] = useState("");
  const [addChoice, setAddChoice] = useState([" ", " "]);
  const [questions, setQuestions] = useState([
    {
      id: 0,
      questionText: "",
      questionType: "",
      choices: addChoice,
    },
  ]);
  const [onDragQuestion, setOnDragQuestion] = useState(questions);

  //keep track of questions
  useEffect(() => {
    setOnDragQuestion(questions);
  }, [questions]);

  //functions

  //keeps track of rearranged question indices
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(onDragQuestion);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setQuestions(items);
  };

  //resets the survey creating template
  const handleSubmit = (e) => {
    e.preventDefault();
    setSurveyTitle("");
    setSurveyType("none");
    setSurveyDuration();
    setSurveyDescription("");
    setQuestions([]);
  };

  //adds empty question template to survey
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

  //adds question to the survey array
  const handleAddQuestions = (
    id,
    text,
    type,
    choices,
    addBtn,
    addChoiceBtn
  ) => {
    let choiceArr = Object.values(choices);
    const newChoice = choiceArr.filter((choice) => Number(choice.name) === id); //filters the choice array with respect to question id

    setAddChoice(["choiceOne", "choiceTwo"]); // reset choice array to 2 default

    //toggles if the question is in add state or edit state
    if (addBtn.target.innerText === "Edit Question") {
      addBtn.target.innerText = "Add Question";
      addBtn.target.previousElementSibling.disabled = false;
      addBtn.target.previousElementSibling.previousElementSibling.disabled = false;
      addChoiceBtn.style.display = "block";

      for (let i = 0; i < choices.length; i++) {
        choices[i].disabled = false;
        choices[i].nextElementSibling.style.visibility = "visible";
        choices[i + 1].disabled = false;
      }
    } else {
      addChoiceBtn.style.display = "none";

      if (id === 0) {
        if (questions[id].questionText !== "") {
          questions[id].questionText = text;
          questions[id].questionType = type;
        } else {
          setQuestions([
            {
              id: id,
              questionText: text,
              questionType: type,
              choices: newChoice.map((choice) => {
                return choice.value;
              }),
            },
          ]);
        }
      } else {
        questions.splice(id);
        setQuestions([
          ...questions,
          {
            id: id,
            questionText: text,
            questionType: type,
            choices: newChoice.map((choice) => {
              return choice.value;
            }),
          },
        ]);
      }

      addBtn.target.innerText = "Edit Question";
      addBtn.target.previousElementSibling.disabled = true;
      addBtn.target.previousElementSibling.previousElementSibling.disabled = true;

      for (let i = 0; i < choices.length; i++) {
        choices[i].disabled = true;
        choices[i].nextElementSibling.style.visibility = "hidden";

        choices[i + 1].disabled = true;
      }
    }
  };

  // views question choices if it is a multiple choice question
  const handleMultiple = (data, component) => {
    if (data === "choice") component.style.display = "block";
    else component.style.display = "none";
  };

  // adds a choice to a multiple choice question
  const handleChoiceAdd = (id) => {
    setAddChoice([...addChoice, " "]);
    questions[id].choices.push(` `);
  };

  // deletes a question
  const handleQuestionDelete = (id) => {
    setQuestions(
      questions.filter((question) => {
        return question.id !== id;
      })
    );
  };

  // deletes a choice from a multiple choice question
  const handleChoiceDelete = (questId, choiceId) => {
    setAddChoice(questions[questId].choices.splice(choiceId, 1));
  };

  // handler function for survey type iteration
  const handleSurveyType = (value) => setSurveyType(value);

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="flex flex-row">
        <div className="border-brandBrown survey-basics w-72 h-120 m-2 flex flex-col">
          <div className="flex flex-col h-full justify-evenly">
            <label
              className="text-xl pl-4 pt-2 font-medium mb-2 text-khakiDark"
              htmlFor="surveyTitle"
            >
              Survey Title
            </label>
            <textarea
              onChange={(e) => setSurveyTitle(e.target.value)}
              value={surveyTitle}
              required
              cols="70"
              rows="1"
              className="border-b-2 resize-none border-khakiDark w-60 mx-4 my-1 focus:outline-none text-sm px-1"
              type="text"
              id="surveyTitle"
              name="surveyTitle"
            />
            <label
              className="text-xl pl-4 pt-2 font-medium text-khakiDark mb-2"
              htmlFor="surveyType"
            >
              Survey Type
            </label>

            <SurveyTypes handleSurveyType={handleSurveyType} />

            <div className=" m-1 flex flex-row justify-start items-center">
              <label
                htmlFor="surveyDuration"
                className="text-xl mr-2 ml-3 font-medium w-40 text-khakiDark"
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
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <label
                className="text-xl pl-3 pt-2 ml-1 mt-2 font-medium text-khakiDark"
                htmlFor="surveyDescription"
              >
                Survey Description
              </label>
              <textarea
                required
                onChange={(e) => setSurveyDescription(e.target.value)}
                value={surveyDescription}
                className="focus:outline-none border-2 border-khakiDark m-4 mt-2 resize-none p-1"
                name=""
                id=""
                cols="30"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="survey-questions w-134  h-100 m-2  flex-col justify-evenly items-center relative">
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
                            <CreateQuestionCard
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
      <div className="w-full flex justify-between items-center">
        <button
          onClick={onClose}
          className="button bg-red text-white rounded-2xl h-6 w-20 flex justify-center items-center text-center text-md m-3 ml-6"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            surveys &&
              handleSurveyAddition(
                surveys.length,
                surveyTitle,
                surveyType,
                surveyDuration,
                surveyDescription,
                questions
              );

            !surveys &&
              handleSurveyAddition(
                0,
                surveyTitle,
                surveyType,
                surveyDuration,
                surveyDescription,
                questions
              );

            surveyTitle && surveyDescription && onClose();
          }}
          type="submit"
          className="button bg-headerBlue text-khaki font-bold rounded-2xl h-7 w-28 flex justify-center items-center text-center text-md m-3 mr-6"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateSurvey;
