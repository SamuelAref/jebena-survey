import Edit from "../pages/Edit";

const ModalEdit = ({
  show,
  onClose,
  surveysSpecific,
  surveys,
  handleSurveyAddition,
  handleSurveyEdition,
}) => {
  if (!show) return null;
  return (
    <div className="modal z-10">
      <div className="modal-content cards rounded mt-10   h-auto flex justify-start items-center flex-col">
        <div className="modal-header  w-full -mb-8">
          <div className="modal-title font-bold text-brandBrown text-3xl pl-3 mt-1 mb-2">
            Edit - {surveysSpecific.surveyTitle}
          </div>
        </div>
        <div className="modal-body w-full h-112">
          <Edit
            surveysSpecific={surveysSpecific}
            surveys={surveys}
            handleSurveyAddition={handleSurveyAddition}
            onClose={onClose}
            handleSurveyEdition={handleSurveyEdition}
          />
        </div>
        <div className="modal-footer flex w-full h-10 flex-row justify-end items-end">
          <button
            onClick={onClose}
            className="button bg-brandBrown text-khaki rounded-2xl h-6 w-20 flex justify-center items-center text-center text-md p-2 m-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
