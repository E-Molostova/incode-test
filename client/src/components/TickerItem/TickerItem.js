import sprite from "../../icons/symbol-defs.svg";
import s from "./TickerItem.module.scss";

const TickerItem = ({
  ticker,
  exchange,
  price,
  change,
  changePercent,
  yd,
  dividend,
  lastTradeTime,
  isPriceUp,
}) => {
  return (
    <li className={s.ticker}>
      <h3 className={s.tickerTitle}> {ticker}</h3>
      <div className={s.exchange}>{exchange}</div>
      <div className={isPriceUp ? s.up : s.down}>{price}</div>
      <div className={s.change}> {change}</div>
      <div
        className={`${s.percent} ${isPriceUp ? s.upPercent : s.downPercent}`}
      >
        {isPriceUp ? (
          <svg className={s.arrowUp} width="14" height="14">
            <use href={sprite + "#icon-arrow-up"}></use>
          </svg>
        ) : (
          <svg className={s.arrowDown} width="14" height="14">
            <use href={sprite + "#icon-arrow-down"}></use>
          </svg>
        )}
        &nbsp;
        {changePercent}&nbsp;%
      </div>
      <div className={s.yd}>{yd}</div>
      <div className={s.dividend}>{dividend}</div>
      <div className={s.time}> {lastTradeTime}</div>
    </li>
  );
};

export default TickerItem;
