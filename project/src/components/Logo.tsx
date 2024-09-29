import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image className="block dark:hidden" src="/Logo.svg" alt="Logo" width={200} height={100} />
      <Image className="hidden dark:block" src="/LogoDarkMode.svg" alt="Logo" width={200} height={100} />
    </>
  );
}
