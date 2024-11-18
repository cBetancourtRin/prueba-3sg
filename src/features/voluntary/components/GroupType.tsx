type Props = {};

const OPTIONS_TYPES = [
    {
      title: "",
      description: "No tengo claro a qué grupo pertenezco.",
      value: "x",
    },
    {
      title: "Grupo A",
      description:
        "Las personas naturales que hayan dejado de estar sujetas al régimen obligatorio con un mínimo de 36 cuotas en los últimos 6 meses.",
      value: "a",
    },
    {
      title: "Grupo B1",
      description: "Panameños de nacimiento o por naturalización.",
      value: "b1",
    },
    {
      title: "Grupo B2",
      description:
        "Ciudadanos extranjeros, incluyendo independientes no contribuyentes.",
      value: "b2",
    },
    {
      title: "Grupo C",
      description:
        "Las personas naturales domiciliadas en el territorio nacional al servicio de Organismos Internacionales.",
      value: "c",
    },
    {
      title: "Grupo D",
      description:
        "Las personas naturales al servicio de misiones diplomáticas y consulares acreditadas en Panamá.",
      value: "d",
    },
    {
      title: "Grupo E",
      description:
        "Los hombres y mujeres mayores de edad, así como los emancipados, que se dedican de manera exclusiva a la atención y cuidado de su familia.",
      value: "e",
    },
    {
      title: "Grupo F",
      description:
        "Los trabajadores señalados en el parágrafo 2 del artículo 77 de la Ley 51 de 27 de diciembre de 2005, Orgánica de la Caja de Seguro Social, hasta tanto se reglamente su incorporación al régimen obligatorio.",
      value: "f",
    },
    {
      title: "Grupo G",
      description:
        "Los independientes contribuyentes que no estén sujetos a la afiliación obligatoria.",
      value: "g",
    },
  ];
  

export default function GroupType({}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <h2>¿Identifica su grupo? Si lo conoce, selecciónelo a continuación.</h2>
      {
        OPTIONS_TYPES.map((option) => (
          <label key={option.value} className="flex items-center gap-2">
            <input
              type="radio"
              name="group-type"
              value={option.value}
              className="h-4 w-4 text-black"
              onClick={()=> alert(`${option.value}`)}
            />
            <span>{option.description}</span>
          </label>
        ))
      }
    </div>
  );
}
