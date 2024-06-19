import { Button } from "@nextui-org/react";
import SignInForm from "./SignInForm";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function SignIn() {
  const [role, setRole] = useState("buyer");

  //   function getRandomInt(min, max) {
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
  //   }

  const createUser = async (formData) => {
    console.log("Form Data:", {
      id: uuid(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: formData.address,
      telNumber: formData.phoneNumber,
      password: formData.password,
      role: role,
    });
    try {
      const response = await fetch("http://localhost:8080/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //id: uuid(),
          firstName: formData.firstName,
          lastName: formData.lastName,
          address: formData.address,
          telNumber: formData.phoneNumber,
          password: formData.password,
          role: role,
        }),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
        alert("SignIn successful");
      } else {
        alert("SignIn failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-dvh">
      <h2 className="text-6xl font-bold mb-12">SignIn</h2>
      <div className="mb-12">
        <Button
          color="primary"
          variant="bordered"
          className={`w-48 mr-4 border-3 ${
            role == "buyer" ? "bg-blue-600 text-white" : null
          }`}
          onClick={() => setRole("buyer")}
        >
          Seller
        </Button>
        <Button
          color="primary"
          variant="bordered"
          className={`w-48 border-3 ${
            role == "seller" ? "bg-blue-600 text-white" : null
          }`}
          onClick={() => setRole("seller")}
        >
          Member
        </Button>
      </div>
      <SignInForm createUser={createUser} />
    </div>
  );
}
