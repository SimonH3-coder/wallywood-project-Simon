import style from "./Input.module.scss";

interface InputProps {
  label: string;
  type: string;
  name: string;
  value?: string;
}

export function Input({ label, type, name }: InputProps) {
  return (
    <label className={style.inputStyle}>
      {label}
      <input type={type} name={name} placeholder={`Indtast ${name}`}></input>
    </label>
  );
}
