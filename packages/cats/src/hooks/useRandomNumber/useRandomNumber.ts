import { useState } from "react";

export const useRandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  return { randomNumber, setRandomNumber };
};
