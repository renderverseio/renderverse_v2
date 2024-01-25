
import { useState } from "react";
import Bin from "@/assets/exchange_logos/binance.png";

export const useTokenTimeExchange = () => {
  const [exchange, setExchange] = useState("binance");
  const [tf, setTf] = useState("15m");
  const [img, setImg] = useState(Bin);

  return {
    exchange, setExchange, img, setImg, tf, setTf
  }

}
