
const Modal = ({title, content, action}: {title: string, content: string, action: string}) => {
  return (
    <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-sky-500 border-none px-8 rounded-sm text-white" onClick={()=>(document.getElementById('my_modal_1')as HTMLDialogElement)?.showModal()}>Register</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{content}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-sky-500 text-white">{action}</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Modal