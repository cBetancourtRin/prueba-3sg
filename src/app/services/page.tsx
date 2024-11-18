"use client";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();

  return (
    <div>
      <h1>Servicios</h1>

      <div className="flex gap-4 py-5">
        <button onClick={() => router.push("/services/voluntary")}>Voluntario comenzar ahora</button>
        <button>Empleado comenzar ahora</button>
      </div>
    </div>
  );
}
