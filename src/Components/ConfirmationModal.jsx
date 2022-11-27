import React from "react";

const ConfirmationModal = ({title, handleDeleteDoc,deleteDoc, cancel}) => {
  return (
    <div>
<input type="checkbox" id="confirmation-modal" className="modal-toggle " />
<div className="modal ">
  <div className="modal-box relative bg-gray-300">
    <label htmlFor="confirmation-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div class="p-6 text-center">
              <svg
                aria-hidden="true"
                class="mx-auto mb-4 w-14 h-14 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 class="mb-5 text-lg font-normal ">
                Are you sure you want to delete {title}?
              </h3>
              <label
                htmlFor="confirmation-modal"
                onClick={()=>handleDeleteDoc(deleteDoc)}
                type="button"
                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Yes, I'm sure
              </label>
              
              <label
                onClick={cancel}
                htmlFor="confirmation-modal"
                type=""
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                No, cancel
              </label>
            </div>
  </div>
  
</div>
    </div>
  );
};

export default ConfirmationModal;
