import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Daily Drip" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return <div>Daily Drip Home Route</div>;
}
