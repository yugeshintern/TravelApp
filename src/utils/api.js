export const BASE_URL = "https://traveladmin.duckdns.org";

export const createOrder = async (orderData) => {
  const res = await fetch(`${BASE_URL}/order/create-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  });
  return res.json();
};

export const addTip = async (orderId, tip) => {
  const res = await fetch(`${BASE_URL}/order/${orderId}/add-tip`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tip }),
  });
  return res.json();
};

export const getOrder = async (orderId) => {
  const res = await fetch(`${BASE_URL}/order/${orderId}`);
  return res.json();
};