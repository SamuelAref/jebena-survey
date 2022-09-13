import CreateSurvey from "../../pages/CreateSurvey";

const ModalCreate = ({ show, onClose, handleSurveyAddition, surveys }) => {
  if (!show) return null;
  return (
    <div className="modal z-10">
      <div className="modal-content cards rounded mt-10 h-auto flex justify-start items-center flex-col">
        <div className="modal-header  w-full m-1">
          <div className="modal-title font-bold text-brandBrown text-3xl pl-3">
            Add Survey
          </div>
        </div>
        <div className="w-full h-auto flex flex-col">
          <CreateSurvey
            handleSurveyAddition={handleSurveyAddition}
            surveys={surveys}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalCreate;
