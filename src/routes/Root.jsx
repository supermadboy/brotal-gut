import { Outlet } from "react-router-dom";
import Text from "../components/typo/Text";
import Insta from "../components/images/insta";
import EmailLink from "../components/typo/EmailLink";
import Logo from "../components/images/Logo";

export default function Root() {
  return (
    <>
      <Outlet />
      <footer className="p-6 flex gap-4 justify-between items-center bg-primary flex-wrap">
        <div className="flex flex-col">
          <div className="w-40 mb-2">
            <Logo />
          </div>
          <Text>© {new Date().getFullYear()}, Brotalgut GbR</Text>
        </div>
        <div>
          <Text className="uppercase">Adresse</Text>
          <Text>Salmannsweilergasse 4</Text>
          <Text>78462 Konstanz</Text>
        </div>
        <div>
          <Text className="uppercase">Öffnungszeiten</Text>
          <Text>Di,Do & Fr</Text>
          <Text>12 - 18 Uhr</Text>
        </div>

        <div>
          <div className="flex gap-4">
            <Insta />
            <EmailLink />
          </div>
          <Text>Impressum</Text>
        </div>
      </footer>
    </>
  );
}
