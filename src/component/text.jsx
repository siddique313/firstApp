import { useState } from "react";
import { useDebounce } from "use-debounce";

export default function Text() {
  const [text, setText] = useState("Hello");
  const [value] = useDebounce(text, 5000);

  return (
    <div>
      <input
        defaultValue={"Hello"}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>Actual value: {text}</p>
      <p>Debounce value: {value}</p>
    </div>
  );
}
