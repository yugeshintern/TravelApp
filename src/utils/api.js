const BASE_URL = 'http://YOUR_SERVER_IP:5000/api';

export const createOrder = async (orderData, token) => {
  const res = await fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(orderData),
  });
  return res.json();
};

export const addTip = async (orderId, tip, token) => {
  const res = await fetch(`${BASE_URL}/orders/${orderId}/add-tip`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ tip }),
  });
  return res.json();
};

export const getOrder = async (orderId, token) => {
  const res = await fetch(`${BASE_URL}/orders/${orderId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};