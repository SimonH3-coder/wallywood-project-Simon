import style from "./ScrollBar.module.scss";

interface ScrollBarProps {
  scrollPercent: number;
}

export function ScrollBar({ scrollPercent }: ScrollBarProps) {
  return <span className={style.scroollBar} style={{ width: scrollPercent + "%" }}></span>;
}
