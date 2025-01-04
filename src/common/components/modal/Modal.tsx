import React, { ReactNode } from 'react';


interface ModalPopI {
  closeModal: () => void;
  confirmModal: () => void;
  children: ReactNode;
  title: string;
  colorBT?: string
}

const Modal: React.FC<ModalPopI> = ({ closeModal, children, title, confirmModal, colorBT = "red" }) => {
  return (
    <div
      id="popup-modal"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full inset-0 h-[calc(100%-1rem)] max-h-full flex bg-[rgba(73,70,70,0.7)]"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative rounded-lg shadow bg-grayCT">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={closeModal}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5">
            <svg
              className="mx-auto mb-4 w-12 h-12 text-grayTextCT"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <>{
              title && <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400  text-center">
                {title}
              </h3>
            }
            </>
            <div >{children}</div>
            <div className='text-center mt-8'>
              <button
                onClick={confirmModal}
                type="button"
                className={`text-white  bg-${colorBT}-600 hover:bg-${colorBT}-800 focus:ring-4 focus:outline-none focus:ring-${colorBT}-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center`}
              >
                Yes, I'm sure
              </button>
              <button
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={closeModal}
              >
                No, cancel
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
