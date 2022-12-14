export default function Tags({ surveys }) {
  return (
    <div className="flex flex-row justify-start items-end  pl-2 pt-2">
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
        <div>{surveys.surveyType}</div>
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
        <div>{surveys.surveyDuration} min</div>
      </div>
      <div className="flex flex-row justify-evenly items-center mx-2 w-auto text-xs font-medium text-textGrey text-center">
        <div className="font-bold mr-1 text-md">Q</div>
        {surveys.questions && <div>{surveys.questions.length}</div>}
        {!surveys.questions && <div>0</div>}
      </div>
    </div>
  );
}
