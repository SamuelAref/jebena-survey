import CreateSurvey from "./CreateSurvey";

const Modal = ({show, onClose, handleSurveyAddition, surveys}) => {
  if (!show) return null;
  return (
    <div className="modal z-10">
      <div className="modal-content cards rounded mt-10   h-auto flex justify-start items-center flex-col">
        <div className="modal-header  w-full m-1">
          <div className="modal-title font-bold text-brandBrown text-3xl pl-3">Add Survey</div>
        </div>
        <div className="modal-body w-full h-86">
            <CreateSurvey handleSurveyAddition={handleSurveyAddition} surveys={surveys} onClose={onClose}/>
            
        </div>
        <div className="modal-footer flex w-full h-10 flex-row justify-end items-end">
          <button  onClick={onClose} className="button bg-red text-white rounded-2xl h-6 w-20 flex justify-center items-center text-center text-md p-2 m-2">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
