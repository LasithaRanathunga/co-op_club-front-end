import { Divider } from "@nextui-org/divider";
import Tab from "./Tab";

export default function SideNav() {
  return (
    <section className="w-1/4 py-6 h-dvh border-r-2 border-gray-300">
      <h1 className="font-bold text-3xl mb-4 pl-6">CO-OP farmer</h1>
      <Divider />
      <div className="mt-4 w-full">
        <Tab to="/newOrder" text="NewOrder" />
        <Tab to="/pending" text="Pending" />
        <Tab to="/received" text="Received" />
      </div>
    </section>
  );
}
