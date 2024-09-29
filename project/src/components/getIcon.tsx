import { State } from "@/utils/types";
import { CheckCircle, Circle, XCircle } from "lucide-react";

export const getStatusIcon = (state: State) => {
  //"completed" | "in progress" | "not completed" | "canceled"
  switch (state) {
    case "completed":
      return <CheckCircle className="h-5 w-5 text-gray-600" />;
    case "in progress":
      return <Circle className="h-5 w-5 text-gray-600" />;
    case "canceled":
      return <XCircle className="h-5 w-5 text-gray-600" />;
  }
};
