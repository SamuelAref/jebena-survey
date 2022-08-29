// import CreateSurvey from "./CreateSurvey";

import Preview from "../pages/Preview";

const ModalPreview = ({ show, onClose, surveys }) => {
  if (!show) return null;
  return (
    <div className="modal z-10">
      <div className="modal-content cards rounded mt-10   h-auto flex justify-start items-center flex-col">
        <div className="modal-body w-full h-112">
          <Preview surveys={surveys} />
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

export default ModalPreview;
