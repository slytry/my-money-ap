import { PortfolioRequest_CurrencyRequest } from "tinkoff-invest-api/dist/generated/operations.js";
import { CandleInterval } from "tinkoff-invest-api/dist/generated/marketdata.js";
import { TinkoffInvestApi } from "tinkoff-invest-api";

export const getData = async () => {
  // создать клиента с заданным токеном доступа
  const api = new TinkoffInvestApi({
    token: process.env.NEXT_PUBLIC_TINKOFF_INVEST_API_TOKEN,
  });
  // получить список счетов
  const { accounts } = await api.users.getAccounts({});

  // получить портфель по id счета
  const portfolio = await api.operations.getPortfolio({
    accountId: accounts[0].id,
    currency: PortfolioRequest_CurrencyRequest.RUB,
  });

  return portfolio;
};
