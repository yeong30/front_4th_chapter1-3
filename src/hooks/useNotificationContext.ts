import { useContext } from "react";
import { NotificationContext } from "../store/notificationContext";

// // 커스텀 훅: useAppContext
const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default useNotificationContext;