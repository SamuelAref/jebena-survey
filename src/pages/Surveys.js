import { useState } from "react";
import SurveyCard from "../components/Cards/SurveyCard";
import ModalPreview from "../components/Modals/ModalPreview";
import ModalEdit from "../components/Modals/ModalEdit";
import ModalCreate from "../components/Modals/ModalCreate";

const Surveys = ({
  surveys,
  handleSurveyAddition,
  handleSurveyDeletion,
  handleSurveyEdition,
}) => {
  //states
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState("");
  const [surveyId, setSurveyId] = useState(0);

  //functions
  const handleSetShow = (value) => setShow(value);
  const handleModalType = (value) => setModalType(value);
  const handleSurveyId = (value) => setSurveyId(value);

  return (
    <div className="container mx-auto mt-10 px-10 py-3 h-128 flex flex-col justify-start align-center">
      <div className="text-5xl text-brandBrown font-bold">Surveys</div>
      <div className=" w-full  h-112 flex flex-row flex-wrap justify-start items-start overflow-y-auto mt-5">
        {surveys &&
          surveys.map((survey, index) => (
            <div key={index}>
              <SurveyCard
                survey={survey}
                handleSetShow={handleSetShow}
                handleModalType={handleModalType}
                handleSurveyId={handleSurveyId}
                handleSurveyDeletion={handleSurveyDeletion}
              />
            </div>
          ))}
      </div>

      {modalType === "create" && (
        <ModalCreate
          show={show}
          onClose={() => setShow(false)}
          handleSurveyAddition={handleSurveyAddition}
          surveys={surveys}
        />
      )}

      {modalType === "edit" && (
        <ModalEdit
          show={show}
          onClose={() => setShow(false)}
          surveysSpecific={surveys[surveyId]}
          surveys={surveys}
          handleSurveyAddition={handleSurveyAddition}
          handleSurveyEdition={handleSurveyEdition}
        />
      )}

      {modalType === "preview" && (
        <ModalPreview
          show={show}
          onClose={() => setShow(false)}
          surveysSpecific={surveys[surveyId]}
        />
      )}
      <div
        id="create-survey-button"
        onClick={() => {
          setShow(true);
          setModalType("create");
        }}
        className="rounded-full hover:border-2 border-green opacity-100 hover:opacity-100 hover:cursor-pointer   fixed bottom-10 w-14 h-14 right-24 mr-2 bg-none flex justify-center items-center"
      >
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
