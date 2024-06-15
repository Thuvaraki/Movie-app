import React from "react";
import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className="hover:text-amber-500">
      {/* sm:hidden => Hides the icon on screens larger than the small breakpoint */}
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
}
