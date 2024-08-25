import { TriangleAlert } from "lucide-react";
import useCalculator from "@/hooks/useCalculator.ts";

const Toast = () => {
  const { toast } = useCalculator();

  return (
    <div className="h-12">
      {toast && (
        <div className="bg-[#ff9f0b] bg-opacity-30 flex items-center justify-center gap-3 rounded-full text-white py-3 ">
          <TriangleAlert />
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
};

export default Toast;
