"use client";

import { useRouter } from "next/navigation";

const Logout = () => {
  document.cookie = "";
  const router = useRouter();
  router.push("/");
  return null;
};

export default Logout;
