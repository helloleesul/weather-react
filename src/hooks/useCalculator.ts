import React from "react";
import { calculate } from "calculator-utils";
import { useCalculatorStore } from "@/stores/useCalculatorStore.ts";

export default function useCalculator() {
  const { updateInput, updateToast, addHistory, handleInput } =
    useCalculatorStore();
  const input = useCalculatorStore((state) => state.input);
  const toast = useCalculatorStore((state) => state.toast);

  // 입력 핸들러
  const onInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value: currentInput } = e.target as HTMLButtonElement;

    updateToast("");
    handleInput(currentInput);
  };

  // 모듈 사용해 계산
  const onCalculator = () => {
    const resultValue = calculate(input);

    if (isNaN(resultValue)) {
      updateToast(resultValue);
    } else {
      updateInput(resultValue);
      addHistory({ expression: input, result: resultValue });
    }
  };

  // 리셋
  const onAllClean = () => {
    updateToast("");
    updateInput("");
  };

  return { onInput, onCalculator, onAllClean, input, toast };
}
