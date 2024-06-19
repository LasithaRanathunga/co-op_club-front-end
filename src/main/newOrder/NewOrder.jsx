import { Input, Button } from "@nextui-org/react";
import { useState } from "react";

export default function NewOrder() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div className="p-6">
      <h3 className="font-bold text-2xl">Place New Order</h3>
      <form className="w-1/2 mt-4">
        <Input
          type="name"
          label="Name of the item"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="amount"
          label="Amount in Kg"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-6"
        />
      </form>
    </div>
  );
}
