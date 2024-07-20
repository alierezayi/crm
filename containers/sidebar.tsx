import NavLinks from "@/components/modules/nav-links";
import { images } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-[250px] hidden sm:block bg-gray-900 dark:bg-gray-300 text-white dark:text-black">
      <Link href="/main" className="flex justify-center mt-2 mb-5">
        <Image src={images.logo} alt="logo" width={156} height={52} />
      </Link>
      <NavLinks />
    </div>
  );
}
