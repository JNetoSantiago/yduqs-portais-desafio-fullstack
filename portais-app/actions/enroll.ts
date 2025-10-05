"use server";

type formEnrollDataType = {
  name: string;
  email: string;
  cpf: string;
  birthdate: string;
  phone: string;
  yearConclusionSchool: string;
  acceptTerms: boolean;
  allowReceiveNotifications: boolean;
  offerId: number;
  installmentId?: number;
};

export async function enrollInCourse(formData: formEnrollDataType) {
  try {
    const res = await fetch("http://localhost:4000/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    return await res.json();
  } catch (error) {
    console.error("Erro ao criar matrícula:", error);
    throw error;
  }
}
