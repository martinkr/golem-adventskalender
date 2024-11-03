import { isValidMonth } from "@/lib/guards";
import Button from "./button";
export default function Home(): JSX.Element {
  if (isValidMonth(12) !== true) {
    return <></>;
  }
  return (
    <>
      {Array.from({ length: 24 }, (_, i) => (
        <Button day={i + 1} key={i} />
      ))}
    </>
  );
}
