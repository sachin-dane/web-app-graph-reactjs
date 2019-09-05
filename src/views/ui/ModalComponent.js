import React from "react"

const ModalComponent = ({ showModal, modalBody, onCloseHandler, title }) => {
    console.log('Modal ==>>', showModal, modalBody)
    return (
        <div className={showModal ? "modal fade in hangon-popup" : "modal fade"}
            tabIndex="-1"
            style={showModal ? { display: "block" } : { display: "none" }}
            role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <h4>{title}</h4>
                        <table >
                            <tbody>
                                {
                                    Object.keys(modalBody).map(function (key, index) {
                                        return (
                                            <tr>
                                                <td>{key}</td>
                                                <td>{modalBody[key]}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <button type="button" className="btn btn-primary" onClick={(e) => onCloseHandler(false, '')}>OKAY</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalComponent