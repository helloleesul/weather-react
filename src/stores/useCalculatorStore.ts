import { create } from "zustand";
import { persist } from "zustand/middleware";

import { isOperator } from "@/utils/isOperator.ts";

interface CalculatorState {
  input: string;
  toast: string;
  handleInput: (value: string) => void;
  updateInput: (value: string) => void;
  updateToast: (value: string) => void;
  history:
    | {
        id: string;
        expression: string;
        result: string;
      }[]
    | [];
  addHistory: (value: { expression: string; result: string }) => void;
  removeHistory: (value: string) => void;
}

export const useCalculatorStore = create<CalculatorState>()(
  persist(
    (set) => ({
      input: "",
      toast: "",
      handleInput: (value: string) =>
        set((state) => {
          const newPrev = [...state.input];
          const lastInput = newPrev[newPrev.length - 1];

          // 맨 처음엔 숫자만 입력
          if (!newPrev.length && isOperator(value)) return { input: "" };

          // 연산자 중복으로 입력 시, 마지막으로 선택한 연산자로 입력
          if (isOperator(lastInput) && isOperator(value)) {
            newPrev.pop();
            newPrev.push(value);
            return { input: newPrev.join("") };
          }
          return { input: state.input + value };
        }),
      updateInput: (value: string) => set({ input: value }),
      updateToast: (value: string) => set({ toast: value }),
      history: [],
      addHistory: (value: { expression: string; result: string }) =>
        set((state) => ({
          history: [{ ...value, id: Date.now().toString() }, ...state.history],
        })),
      removeHistory: (value: string) =>
        set((state) => ({
          history: state.history.filter((item) => item.id !== value),
        })),
    }),
    { name: "calculatorStore" },
  ),
);
