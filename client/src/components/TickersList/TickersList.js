import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tickersOperations, tickersSelector } from "../../redux/tickers";
import TickersItem from "../TickerItem";
import s from "./TickersList.module.scss";

const Tickers = () => {
  const tickers = useSelector(tickersSelector.getTickers);
  const [localTickers, setLocalTickers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tickersOperations.getTickers());
  }, [dispatch]);

  useEffect(() => {
    if (localTickers.length) {
      setLocalTickers((prevState) => prevState);
    } else {
      setLocalTickers(tickers);
    }
  }, [tickers, localTickers]);

  const isPrevPrice = localTickers.map((ticker) => ticker.price);
  const isCurrentPrice = tickers.map((ticker) => ticker.price);

  function getPriceDifference(index) {
    return isCurrentPrice[index] > isPrevPrice[index];
  }

  return (
    <>
      <ul className={s.tickersList}>
        {tickers.map((ticker, index) => (
          <TickersItem
            key={ticker.id}
            id={ticker.id}
            isPriceUp={getPriceDifference(index)}
            ticker={ticker.ticker}
            exchange={ticker.exchange}
            price={ticker.price}
            change={ticker.change}
            changePercent={ticker.change_percent}
            dividend={ticker.dividend}
            yd={ticker.yield}
            lastTradeTime={ticker.last_trade_time}
          />
        ))}
      </ul>
    </>
  );
};

export default Tickers;
