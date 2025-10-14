import React, { useState } from "react";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({ item: "", quantity: 0 });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addToCart = () => {
    if (!formData.item || formData.quantity <= 0)
      return alert("Enter valid item and quantity!");

    const newItem = {
      id: count + 1,
      item: formData.item,
      quantity: Number(formData.quantity),
    };

    setItems((prev) => [...prev, newItem]);
    setCount((prev) => prev + 1);
    setFormData({ item: "", quantity: 0 }); 
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 0) return;
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Number(newQuantity) } : item
      )
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Cart</h1>
        <form
          style={{ display: "flex", flexDirection: "column", justifyItems: "center" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            name="item"
            placeholder="item"
            value={formData.item}
            onChange={handleChange}
          />
          <br />
          <input
            min={0}
            name="quantity"
            type="number"
            placeholder="item quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
          <br />
        </form>
        <div>
          <button onClick={addToCart} style={{ marginRight: "10px" }}>
            Add Item
          </button>
        </div>
      </div>

      <div>
        <h1>Items in Cart</h1>
        {items.length === 0 ? (
          <p>No items in Cart yet.</p>
        ) : (
          items.map((i) => (
            <ul
              key={i.id}
              style={{ backgroundColor: "lightgrey", padding: "10px", margin: "5px" }}
            >
              <li>Item: {i.item}</li>
              <li>Quantity: {i.quantity}</li>

              <input
                type="number"
                min={0}
                defaultValue={i.quantity}
                onChange={(e) => updateQuantity(i.id, e.target.value)}
              />

              <button onClick={() => removeItem(i.id)} style={{ marginLeft: "10px" }}>
                Remove Item
              </button>
            </ul>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
