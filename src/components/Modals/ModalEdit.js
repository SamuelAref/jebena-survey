import EditSurvey from "../../pages/EditSurvey";

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
        <div className="modal-header  w-full">
          <div className="modal-title font-bold text-brandBrown text-3xl pl-3 mt-1 mb-2">
            Edit - {surveysSpecific.surveyTitle}
          </div>
        </div>
        <div className="modal-body">
          <EditSurvey
            surveysSpecific={surveysSpecific}
            surveys={surveys}
            handleSurveyAddition={handleSurveyAddition}
            onClose={onClose}
            handleSurveyEdition={handleSurveyEdition}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
