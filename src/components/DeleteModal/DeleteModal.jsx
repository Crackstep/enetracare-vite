import React from 'react';
import './DeleteModalCustomCSS.css'

function DeleteModal({ onDelete, visibility, setVisibility }) {
  const handleCancel = () => {
    setVisibility('hidden');
  };

  const handleDeleteModal = async () => {
    setVisibility('hidden');
    await onDelete();
  };

  return (
    <div className={`fixed inset-0 flex justify-center items-center ${visibility} z-50`} id='delete-modal'>
      <div className='bg-white p-12 flex flex-col gap-4 bg-opacity-65 backdrop-blur-sm shadow-lg rounded-md'>
        <h2 className='text-3xl text-[#017f84]'>Are you sure you want to delete this?</h2>
        <div className='flex gap-4'>
          <button
            onClick={handleDeleteModal}
            type='button'
            className='bg-red-700 text-white rounded-md px-3 font-semibold text-lg py-2 opacity-90 hover:opacity-100'
          >
            Delete
          </button>
          <button
            onClick={handleCancel}
            type='button'
            className='bg-white text-[#017f84] rounded-md px-3 font-semibold text-lg py-2 opacity-90 hover:opacity-100'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;