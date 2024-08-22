import useCalculator from "@/hooks/useCalculator.ts";
import { buttonList } from "@/constants/calculatorElements.ts";

const buttonStyle = {
  number: "text-[40px] bg-[#333333] text-white",
  operator: "text-[46px] bg-[#ff9f0b] pb-1",
  setting: "text-3xl bg-[#a5a5a5] text-[#111111] font-medium",
};

const Calculator = () => {
  const { input, handleInput, onCalculator, onAllClean } = useCalculator();

  const handleClick: { [key: string]: () => void } = {
    calculator: onCalculator,
    allClean: onAllClean,
  };

  return (
    <div>
      <input
        className="w-full cursor-default border-none bg-transparent text-white text-right text-6xl mb-2.5"
        type="text"
        value={input}
        readOnly
      />
      <section className="grid grid-cols-4 gap-2.5">
        {buttonList.map((item, index) => (
          <button
            key={index}
            value={item.value}
            className={`border-none h-[96px] rounded-full cursor-pointer ${buttonStyle[item.type]}`}
            onClick={handleClick[item.value] || handleInput}
          >
            {item.text || item.value}
          </button>
        ))}
      </section>
    </div>
  );
};

export default Calculator;
