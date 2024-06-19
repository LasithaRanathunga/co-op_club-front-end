import { Card, CardBody } from "@nextui-org/react";

export default function Order({ name, amount }) {
  return (
    <div className="w-full flex flex-col items-center">
      <Card className="border-3 w-11/12 mt-6">
        <CardBody>
          <p className="font-bold">{`${name} ${amount}`}</p>
        </CardBody>
      </Card>
    </div>
  );
}
