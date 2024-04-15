"use client";
import { Input } from "@/components";
import { useState } from "react";
import styles from "./styles.module.scss";

const isNumeric = (value: string) => {
  if (value.length === 0) return false;
  for (let i = 0; i < value.length; i++) {
    if (value[i] < "0" || value[i] > "9") {
      return false;
    }
  }
  return true;
};

export default function Calculator() {
  const [values, setValues] = useState({
    firstNumber: "",
    secondNumber: "",
  });

  const [total, setTotal] = useState(0);

  function calculate() {
    const fNumber = parseInt(values.firstNumber);
    const sNumber = parseInt(values.secondNumber);

    setTotal(fNumber + sNumber);
  }

  function handleSetNumber(value: string, name: string) {
    if (!isNumeric(value)) return;

    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <div>
      <div className={styles.container}>
        <Input
          value={values.firstNumber}
          onTextChange={handleSetNumber}
          name="firstNumber"
          placeHolder="First Number"
        />
        <Input
          value={values.secondNumber}
          onTextChange={handleSetNumber}
          name="secondNumber"
          placeHolder="Second Number"
        />
        <button className={styles.button} onClick={calculate}>
          Add Two Numbers
        </button>

        <div>Total: {total} </div>
      </div>
    </div>
  );
}
