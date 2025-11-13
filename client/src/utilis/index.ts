import type { CURRENCY } from "@/types";


export const priceFormat = (price: number, currency: CURRENCY) => {
  const char = currency === "USD" ? "$" : currency;
  return `${char}${price.toFixed(2)}`;
};

export const enrolledFormat = (enrroled: number) => `${enrroled} ${enrroled < 2 ? "Enrollment" : "Enrollments"}`


export const getTypeColor = (type: string) => {
  const colors = {
    Course: "text-blue-500",
    Category: "text-green-500",
    Instructor: "text-purple-500",
  };
  return colors[type as keyof typeof colors] || "text-gray-400";
};
