import { ArrowUp, ArrowDown } from "../IconsSvg";
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
      <div className={s.tickerTitle}> {ticker}</div>
      <div className={s.exchange}>{exchange}</div>
      <div className={isPriceUp ? s.up : s.down}>{price}</div>
      <div className={s.change}> {change}</div>
      <div
        className={`${s.percent} ${isPriceUp ? s.upPercent : s.downPercent}`}
      >
        {isPriceUp ? <ArrowUp /> : <ArrowDown />}&nbsp;
        {changePercent}&nbsp;%
      </div>
      <div className={s.yd}>{yd}</div>
      <div className={s.dividend}>{dividend}</div>
      <div className={s.time}> {lastTradeTime}</div>
    </li>
  );
};

export default TickerItem;
