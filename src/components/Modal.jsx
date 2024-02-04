import { useState, useRef, forwardRef, useImperativeHandle } from "react"
import { createPortal } from 'react-dom'


const Modal = forwardRef(function Modal({ project }, ref) {

    const dialog = useRef();

    const [dialogIsOpen, setDialogIsOpen] = useState(false)

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                if (dialogIsOpen) {

                } else {
                    setDialogIsOpen(true)
                }

            }
        }
    })

    function handleClose() {
        setDialogIsOpen(false)
    }

    return (
        createPortal(
            <dialog ref={dialog} open={dialogIsOpen}>
                <button onClick={handleClose} className="button button-close-modal">x</button>
                <embed src={project.siteLink}></embed>
                <div className="button-container">
                    <a className="button website-buttons" href={project.codeLink}>Link to Code</a>
                    <a className="button website-buttons" href={project.siteLink}>Link to Full Site</a>

                </div>
            </dialog>
            , document.getElementById('modal'))
    )
})

export default Modal