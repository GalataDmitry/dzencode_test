import {useDeleteOrderModal} from "../../componentsHooks/componentsHooks"
import {removeOrder, setOrderIdlDeleteModalTitle} from "../../toolkit/reducers/mainReducer"
import {DELETE_BUTTON, MODAL_TITLE, REMOVE_ORDER_BUTTON} from "../../__test__/test_ids"
import {DeleteOrderModalPropsTypes} from "../componentsPropsTypes/ComponentsPropsTypes"

const DeleteOrderModal = ({orderId}: DeleteOrderModalPropsTypes) => {

    const {dispatch, deleteModalTitle} = useDeleteOrderModal()

    return <>
        <button
            onClick={() => dispatch(setOrderIdlDeleteModalTitle(orderId))}
            type="button" className="btn btn-secondary btn-sm" data-bs-toggle="modal"
            data-bs-target="#deleteModal"
            data-testid={`${DELETE_BUTTON}-${orderId}`}
        >
            delete
        </button>
        <div className="modal fade" id="deleteModal" tabIndex={-1} aria-labelledby="deleteModalLabel"
             aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 fst-italic"
                            id="deleteModalLabel"
                            data-testid={`${MODAL_TITLE}-${orderId}`}>
                            Delete {deleteModalTitle}
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"/>
                    </div>
                    <div className="modal-body">
                        If you are sure click delete
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close
                        </button>
                        <button onClick={() => dispatch(removeOrder())}
                                type="button"
                                className="btn btn-danger btn-sm"
                                data-bs-dismiss="modal"
                                data-testid={`${REMOVE_ORDER_BUTTON}-${orderId}`}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default DeleteOrderModal