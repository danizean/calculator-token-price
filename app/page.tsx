import { useState } from "react";

export default function Home() {
  const [fdv, setFdv] = useState("");
  const [totalSupply, setTotalSupply] = useState("");
  const [price, setPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    const fdvValue = parseFloat(fdv);
    const totalSupplyValue = parseFloat(totalSupply);

    if (!isNaN(fdvValue) && !isNaN(totalSupplyValue) && totalSupplyValue > 0) {
      setPrice(fdvValue / totalSupplyValue);
    } else {
      setPrice(null);
      alert("Please enter valid numerical values.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Token Price Calculator</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="fdv" className="block text-sm font-medium text-gray-700 mb-2">
            Fully Diluted Valuation (FDV):
          </label>
          <input
            type="text"
            id="fdv"
            value={fdv}
            onChange={(e) => setFdv(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter FDV"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="totalSupply" className="block text-sm font-medium text-gray-700 mb-2">
            Total Supply:
          </label>
          <input
            type="text"
            id="totalSupply"
            value={totalSupply}
            onChange={(e) => setTotalSupply(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter Total Supply"
          />
        </div>

        <button
          onClick={calculatePrice}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
          Calculate
        </button>

        {price !== null && (
          <div className="mt-4 text-center text-lg font-medium text-green-600">
            Predicted Token Price: ${price.toFixed(6)}
          </div>
        )}
      </div>
    </div>
  );
}