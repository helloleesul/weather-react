import { create } from "zustand";
import { persist } from "zustand/middleware";

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
        result: number;
      }[]
    | [];
  addHistory: (value: { expression: string; result: number }) => void;
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

          // 연산자 중복으로 입력 시, 마지막으로 선택한 연산자로 입력
          if (isNaN(Number(lastInput)) && isNaN(Number(value))) {
            newPrev.pop();
            newPrev.push(value);
            return { input: newPrev.join("") };
          }
          return { input: state.input + value };
        }),
      updateInput: (value: string) => set({ input: value }),
      updateToast: (value: string) => set({ toast: value }),
      history: [],
      addHistory: (value: { expression: string; result: number }) =>
        set((state) => ({
          history: [{ ...value, id: new Date().toString() }, ...state.history],
        })),
      removeHistory: (value: string) =>
        set((state) => ({
          history: state.history.filter((item) => item.id !== value),
        })),
    }),
    { name: "calculatorStore" },
  ),
);
