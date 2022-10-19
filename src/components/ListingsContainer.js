import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(()=>{fetchListings()}, [])

  function fetchListings () {
    const url = "http://localhost:6001/listings";

    fetch(url)
    .then((r)=>r.json())
    .then((data)=>setListings(data))
  }

  function handleDeleteItem(delItem){
    console.log("In Container:", delItem)
    const updatedItems = listings.filter((item)=> {
      return item.id !== delItem
    })

    return setListings(updatedItems)
  }

  const updatedListing = listings.map((listItem)=>{
    return <ListingCard key={listItem.id} item={listItem} onDelete={handleDeleteItem} />
  })

  return (
    <main>
      <ul className="cards">
        {updatedListing}
      </ul>
    </main>
  );
}

export default ListingsContainer;
