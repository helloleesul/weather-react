import { useState } from "react";
import History from "@/components/Calculator/History.tsx";
import Toast from "@/components/Calculator/Toast.tsx";
import Calculators from "@/components/Calculator/Calculators.tsx";
import { History as HistoryIcon } from "lucide-react";

const CalculatorPage = () => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div>
      {showHistory && <History onClose={() => setShowHistory(false)} />}
      <Toast />
      <Calculators />
      <button
        onClick={() => setShowHistory((prev) => !prev)}
        className="border-none cursor-pointer absolute right-8 bottom-5"
      >
        <HistoryIcon color="#ff9f0b" size={50} strokeWidth={1} />
      </button>
    </div>
  );
};

export default CalculatorPage;
