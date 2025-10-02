"use server";

export async function getAllOffers() {
  const offers = await fetch("http://localhost:3000/offers").then((res) =>
    res.json()
  );

  return offers;
}
