"use client";
import GroupType from "@/features/voluntary/components/GroupType";
import Policies from "@/features/voluntary/components/Policies";
import voluntaryStore from "@/features/voluntary/store/formVoluntary.store";

export default function Voluntary() {
  const { stepForm, setStepForm } = voluntaryStore();

  switch (stepForm) {
    case 1:
      return <Policies />;

    case 2:
      return <GroupType/>

    default:
      break;
  }

  return (
    <div className="flex flex-col gap-28">
      <h2>Solicitud de Afiliación para vincularse al Seguro Voluntario</h2>

      <p>
        Regístrate si no estas sujeto al régimen obligatorio, o eres miembro de
        organismos internacionales, misiones diplomáticas o consulares, o
        cuidadores familiares o independientes contribuyentes.
      </p>

      <button onClick={setStepForm}>Comenzar ahora</button>
    </div>
  );
}
