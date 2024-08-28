import { Calculator, Trash2, X } from "lucide-react";

import { useCalculatorStore } from "@/stores/useCalculatorStore.ts";

const History = ({ onClose }: { onClose: () => void }) => {
  const { removeHistory } = useCalculatorStore();
  const history = useCalculatorStore((state) => state.history);

  return (
    <section className="inset-x-8 inset-y-1/4 absolute bg-white bg-opacity-30 backdrop-blur-xl rounded-2xl p-6">
      <div className="text-white flex flex-col h-full">
        <div className="flex justify-between items-center mb-2 border-b border-b-white border-opacity-50 pb-2">
          <h3>계산 기록</h3>
          <button onClick={() => onClose()}>
            <X />
          </button>
        </div>
        {!history.length ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <div>
              <Calculator
                size={100}
                strokeWidth={1.5}
                className="m-auto mb-3"
              />
              <p>아직 기록된 계산이 없습니다.</p>
            </div>
          </div>
        ) : (
          <ul className="flex flex-col gap-2 h-[328px] overflow-y-scroll no-scrollbar">
            {history.map((item, index) => (
              <li
                key={item.id}
                className="flex justify-between items-center gap-3"
              >
                <span className="opacity-50 font-extralight">{index + 1}.</span>
                <p className="text-lg flex-1">
                  {item.expression} = {item.result}
                </p>
                <button
                  onClick={() => removeHistory(item.id)}
                  className="bg-rose-700 bg-opacity-40 hover:bg-opacity-100 p-2 rounded-full"
                >
                  <Trash2 stroke="#ffffff" strokeWidth={1.5} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default History;
