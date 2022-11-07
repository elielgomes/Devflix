import { FooterBody } from "./styled";

const Footer: React.FC = () => {
  let footerList = [
    "Perguntas frequentes",
    "Formas de assistir",
    "Só na Devflix",
    "Central de Ajuda",
    "Termos de Uso",
    "Entre em contato",
    "Privacidade",
    "Avisos legais",
  ];

  return (
    <FooterBody>
      <div className="container-footer">
        <div className="container-brand-footer">
          <img src="/assets/DEVFLIX-brand-sm.png" alt="Brand-footer" />
        </div>
        <ul>
          {footerList.map((element) => {
            return (
              <li key={element}>
                <span>{element}</span>
              </li>
            );
          })}
        </ul>
        <p>© Devflix Brasil</p>
      </div>
    </FooterBody>
  );
};

export default Footer;
