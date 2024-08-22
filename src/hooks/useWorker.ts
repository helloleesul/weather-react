import { useContext } from "react";
import { WorkerContext } from "@/contexts/WorkerContext.tsx";

const useWorker = () => useContext(WorkerContext);

export default useWorker;
