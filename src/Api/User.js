import { useState } from "react";

// get user
export const getUserInfo = async (email) => {
  const url = `https://server-angon777.vercel.app/users/${email}`;
  const res = await fetch(url, {
    headers: {
      authorization: `bearer ${localStorage.getItem("motocross-token")}`,
    },
  });
  const data = await res.json();

  return data;
};

// get user role

export const getRole = async (email) => {
  const url = `https://server-angon777.vercel.app/users/${email}`;
  const res = await fetch(url, {
    headers: {
      authorization: `bearer ${localStorage.getItem("motocross-token")}`,
    },
  });
  const data = await res.json();
  const userRole = data?.role;
  return userRole;
};

// get seller verification info

export const isSellerVerifyed = async (email) => {
  const url = `https://server-angon777.vercel.app/users/${email}`;
  const res = await fetch(url, {
    headers: {
      authorization: `bearer ${localStorage.getItem("motocross-token")}`,
    },
  });
  const data = await res.json();
  const isVerified = data?.isSellerVerified;
  return isVerified;
};

// set seler role and verification
export const SetSellerInfo = async (id, sellerRole) => {
  const res = await fetch(
    `https://server-angon777.vercel.app/users/seller/${id}`,
    {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("motocross-token")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(sellerRole),
    }
  );
  const data = res.json();
  return data;
};
