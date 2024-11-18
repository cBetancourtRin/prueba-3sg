import voluntaryStore from "../store/formVoluntary.store";
const Policies = () => {
  const { setStepForm } = voluntaryStore();
  return (
    <div className="flex flex-col gap-28">
      <h3>Solicitud de Afiliación para vincularse al Seguro Voluntario</h3>
      <p>
        GENERALIDADES La Ley 51 de 27 de diciembre de 2005, Orgánica de la Caja
        de Seguro Social señala en su artículo 79, que pueden ingresar
        voluntariamente al régimen de Seguro Social: 1. Las personas naturales
        que no estén sujetas al régimen obligatorio. 2. Las personas naturales
        domiciliadas en el territorio nacional al servicio de organismos
        internacionales. 3. Las personas naturales al servicio de Misiones
        Diplomáticas y Consulares acreditadas en Panamá. 4. Los hombres y
        mujeres mayores de edad, así como los emancipados, que se dedican de
        manera exclusiva a la atención y cuidado de su familia. 5. Los
        trabajadores señalados en el parágrafo 2 del artículo 77, hasta tanto se
        reglamente su incorporación al régimen obligatorio. 6. Los
        independientes contribuyentes que no estén sujetos a la afiliación
        obligatoria.
      </p>

      <button onClick={setStepForm}>Siguiente</button>
    </div>
  );
};

export default Policies;
