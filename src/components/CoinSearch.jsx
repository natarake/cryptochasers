import React, { useState } from "react";
import CoinItem from "./CoinItem";
import ReactPaginate from "react-paginate";
import { GrNext, GrPrevious } from "react-icons/gr";

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const coinsPerPage = 10;
  const pagesVisited = pageNumber * coinsPerPage;
  const displayCoins = coins
    .filter((value) => {
      if (
        searchText === "" ||
        value.name.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return true;
      }
      return false;
    })
    .slice(pagesVisited, pagesVisited + coinsPerPage)
    .map((coin) => <CoinItem key={coin.id} coin={coin} />);
  const pageCount = Math.ceil(coins.length / coinsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2">Search Crypto</h1>
        <form>
          <input
            onChange={(event) => setSearchText(event.target.value)}
            type="text"
            placeholder="Search a coin.."
            className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
          />
        </form>
      </div>

      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24H</th>
            <th className="hidden md:table-cell">24H Volume</th>
            <th className="hidden sm:table-cell">Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>{displayCoins}</tbody>
      </table>
      <ReactPaginate
        previousLabel={<GrPrevious />}
        nextLabel={<GrNext />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"flex justify-center my-8"}
        pageClassName={"flex items-center justify-center p-0 w-[30px]"}
        previousLinkClassName={"flex items-center p-1"}
        nextLinkClassName={"flex items-center p-1"}
        activeClassName={"border rounded-full bg-primary text-primary"}
      />
    </div>
  );
};

export default CoinSearch;
