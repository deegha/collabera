"use client";
import styles from "./styles.module.scss";

interface IPorps {
  onTextChange: Function;
  name: string;
  placeHolder: string;
  value?: string;
}

export default function input({
  onTextChange,
  name,
  placeHolder,
  value,
}: IPorps) {
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    onTextChange(e.target.value, e.target.name);
  }
  return (
    <div className={styles.container}>
      <input
        value={value}
        type="text"
        onChange={handleOnChange}
        name={name}
        placeholder={placeHolder}
      />
    </div>
  );
}
