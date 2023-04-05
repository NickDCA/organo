import "./campo.css";

interface CampoProps {
  aoAlterado: (valor: string) => void;
  placeholder: string;
  label: string;
  valor: string;
  type: string;
  obrigatorio: boolean;
}

const Campo = ({
  aoAlterado,
  type,
  label,
  valor,
  obrigatorio,
  placeholder,
}: CampoProps) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default Campo;
