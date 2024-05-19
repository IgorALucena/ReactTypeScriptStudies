import React, { Children } from 'react'
import styles from './Modal.module.css'

type Props = {
    children: React.ReactNode // Tipo para passar um componente em uma props

}

const Modal = ({ children }: Props) => { // Props com reutilização de TaskForm

    const closeModal = (e: React.MouseEvent): void => {
        
        const modal = document.querySelector('#modal');

        /*
        classList.add("hide"): Adiciona a classe "hide" ao elemento modal. Presumivelmente, a classe "hide" 
        define o modal como oculto através de CSS.
        */

        modal!.classList.add("hide");
    }

    return (
        <div id="modal" className='hide'> {/*p/ ocultar*/}
            <div className={styles.fade} onClick={closeModal}></div> {/*p/ fade. Clique no fade também fecha modal*/}
            <div className={styles.modal}>
                <h2>Texto Modal</h2>
                {children} {/* renderização do formulário via modal */}
            </div>
        </div>
    )
}

export default Modal