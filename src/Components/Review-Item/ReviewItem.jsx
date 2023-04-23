import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({item, removeItemFromCart }) => {
  const { img, name, quantity, price, id } = item;
  return (
    <div className="container">
      <div className="card mb-2">
        <div className="row">
          <div className="col-md-2">
            <img
              src={img}
              className="img-fluid rounded-start h-100"
              alt="Image not found"
            />
          </div>
          <div className="col-md-10">
            <div className="card-body ms-0 ps-0">
              <h6 className="card-title">{name}</h6>
              <div className="d-flex justify-content-between fw-semibold fs-6">
                <div className="d-flex gap-3">
                <p>
                  Price: <span className="text-warning-emphasis">${price}</span>
                </p>
                <p>
                  Quantity: <span className="text-warning-emphasis">{quantity}</span>
                </p>
                </div>
                {/* icon */}
                <div>
                <button onClick={() => removeItemFromCart(id)} className="rounded-5 border-0 bg-danger text-white"><FontAwesomeIcon icon={faTrashCan} className="p-1 fs-5" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
