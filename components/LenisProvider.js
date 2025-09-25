"use client";

import { useLenis } from "@/hook/useLenis";

export default function LenisProvider({ children }) {
    useLenis();
    return <>{children}</>;
}
