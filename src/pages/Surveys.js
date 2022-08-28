import { useState } from "react";
import tag from "../assets/images/tag.svg";
import CreateSurvey from "../components/CreateSurvey";
import Modal from "../components/Modal";

const Surveys = ({surveys, handleSurveyAddition}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="container mx-auto mt-10 px-10 py-3 h-128 flex flex-col justify-start align-center">
      <div className="text-5xl text-brandBrown font-bold">Surveys</div>
      <div className=" w-full  h-112 flex flex-row flex-wrap justify-start items-start overflow-y-auto mt-5">
        {surveys &&
          surveys.map((survey) => (
            <div
              key={survey.id}
              className="cards rounded bg-white w-86 border-black h-auto my-2 mr-4 "
            >
              <div className="text-3xl font-bold text-brandBrown pt-4 pl-4">
                {survey.surveyTitle}
              </div>
              <div className="flex flex-row justify-start items-start p-2">
                <div className="flex flex-row justify-evenly items-center mx-2 auto text-xs font-medium text-textGrey text-center">
                  <svg
                    className="w-3 h-3 rotate-90 fill-textGrey mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 2"
                    viewBox="0 0 35 35"
                  >
                    <path d="M18.77,34.75A5.33,5.33,0,0,1,15,33.21L1.79,20A5.39,5.39,0,0,1,.26,15.87l.57-9.2A6.3,6.3,0,0,1,6.67.83l9.2-.57A5.44,5.44,0,0,1,20,1.79L33.21,15a5.79,5.79,0,0,1-.31,8.16h0L23.13,32.9A6.16,6.16,0,0,1,18.77,34.75Zm-2.54-32H16l-9.21.56a3.83,3.83,0,0,0-3.5,3.5L2.76,16a2.85,2.85,0,0,0,.8,2.24L16.74,31.44a2.9,2.9,0,0,0,2.19.81,3.69,3.69,0,0,0,2.43-1.12l9.78-9.77a3.3,3.3,0,0,0,.3-4.62L18.26,3.56A2.81,2.81,0,0,0,16.23,2.75ZM32,22.25h0Z" />
                    <path d="M11.48,15.73a4.25,4.25,0,0,1-4.25-4.25,4.25,4.25,0,0,1,7.26-3,4.25,4.25,0,0,1-3,7.25Zm0-6a1.75,1.75,0,0,0-1.24,3,1.8,1.8,0,0,0,2.48,0,1.76,1.76,0,0,0,0-2.48h0A1.74,1.74,0,0,0,11.48,9.73Z" />
                  </svg>
                  <div>{survey.surveyType}</div>
                </div>
                <div className="flex flex-row justify-evenly items-center mx-2 w-auto text-xs font-medium text-textGrey text-center">
                  <svg
                    className="w-3 h-3 fill-textGrey mr-1"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.50009 0.877014C3.84241 0.877014 0.877258 3.84216 0.877258 7.49984C0.877258 11.1575 3.8424 14.1227 7.50009 14.1227C11.1578 14.1227 14.1229 11.1575 14.1229 7.49984C14.1229 3.84216 11.1577 0.877014 7.50009 0.877014ZM1.82726 7.49984C1.82726 4.36683 4.36708 1.82701 7.50009 1.82701C10.6331 1.82701 13.1729 4.36683 13.1729 7.49984C13.1729 10.6328 10.6331 13.1727 7.50009 13.1727C4.36708 13.1727 1.82726 10.6328 1.82726 7.49984ZM8 4.50001C8 4.22387 7.77614 4.00001 7.5 4.00001C7.22386 4.00001 7 4.22387 7 4.50001V7.50001C7 7.63262 7.05268 7.7598 7.14645 7.85357L9.14645 9.85357C9.34171 10.0488 9.65829 10.0488 9.85355 9.85357C10.0488 9.65831 10.0488 9.34172 9.85355 9.14646L8 7.29291V4.50001Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>{survey.surveyDuration} min</div>
                </div>
                <div className="flex flex-row justify-evenly items-center mx-2 w-auto text-xs font-medium text-textGrey text-center">
                  <div className="font-bold mr-1 text-md">Q</div>
                  {survey.questions && <div>{survey.questions.length}</div>}
                  {!survey.questions && <div>0</div>}
                </div>
              </div>
              <p className="px-5 my-2 text-textGrey font-medium">
                {survey.surveyDescription}
              </p>
              <div className="flex flex-row justify-evenly items-center p-3">
                <button className="bg-headerBlue text-white rounded-2xl h-5 flex justify-center items-center text-center text-xs p-2">
                  Preview Survey
                </button>
                <button className="bg-brandBrown text-white rounded-2xl h-5 flex justify-center items-center text-center text-xs p-2">
                  Edit Survey
                </button>
                <button className="bg-red text-white rounded-2xl h-5 flex justify-center items-center text-center text-xs p-2">
                  Delete Survey
                </button>
              </div>
            </div>
          ))}
      </div>
      {/* <CreateSurvey/> */}
      <Modal show={show} onClose={() => setShow(false)} handleSurveyAddition={handleSurveyAddition} surveys={surveys} />
      <div
        onClick={() => setShow(true)}
        className="rounded-full hover:border-2 border-green opacity-100 hover:opacity-100 hover:cursor-pointer   fixed bottom-10 w-14 h-14 right-24 mr-2 bg-none flex justify-center items-center"
      >
        {/* <svg className="fill-green cover w-full bg-white rounded-full height-full" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z" fillRule="evenodd" clipRule="evenodd"></path></svg> */}
        <svg
          className="fill-green cover w-full bg-white rounded-full height-full hover:p-0  p-2"
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
  );
};

export default Surveys;
