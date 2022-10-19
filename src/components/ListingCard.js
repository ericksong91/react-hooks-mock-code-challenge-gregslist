import React, { useState } from "react";

function ListingCard({ item, onDelete }) {
  const {id, description, image, location} = item;
  const [favorite, setFavorite] = useState(false);

  function handleClick () {
    return setFavorite(!favorite)
  }

  function handleDelete (delItem) {
    console.log("Deleted!", delItem)
    console.log(`http://localhost:6001/listings/${delItem}`)

    fetch(`http://localhost:6001/listings/${delItem}`, {
      method:"DELETE",
    })
      .then((r)=>r.json())
      .then(()=>onDelete(id))
  }

  return (
    <li className="card" id={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active"  onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={()=>handleDelete(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
