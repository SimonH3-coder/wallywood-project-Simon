import style from "./Submit.module.scss";

interface SubmitProps {
  value: string;
}

export function Submit({ value }: SubmitProps) {
  return <input className={style.submitButton} type={"submit"} value={value}></input>;
}
