import toast, { Toaster } from "react-hot-toast";

const notify = (message, icon) =>
  toast(message, {
    duration: 3000,
    position: "top-center",
    icon: icon,
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export default notify;
