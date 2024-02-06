import FormModal from "./components/form/FormModal";
import { ModalProvider } from "./hooks/ModalContext";
import "./css/main.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ModalProvider>
        <body>
          {children}
          <FormModal />
        </body>
      </ModalProvider>
    </html>
  );
}
