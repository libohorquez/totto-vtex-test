import { useState } from "react";

export const ResultApp = () => {
  const [inputValue, setInputValue] = useState("");

  const [orderInfo, setOrderInfo] = useState({});

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();

    // se agrega cors-anywhere a la url ya que mostraba error de CORS.
    // Para activar ir a https://cors-anywhere.herokuapp.com/corsdemo en otra pestaña del navegador y hacer clic en botón "Solicitar acceso"
    const url = `https://cors-anywhere.herokuapp.com/https://tottoqa.vtexcommercestable.com.br/api/oms/pvt/orders/${inputValue}`;

    const resp = await fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",

      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "X-VTEX-API-AppKey": "vtexappkey-tottoqa-IGFKQO",
        "X-VTEX-API-AppToken":
          "VUMMGFNKSOVZTPBYAHDLZLPDKLEZXBRMGQZUHOBWPMMUPKBMJGPIFPZECOJDEQBPLOUEOKEKBYEHNLFAHAFCWBMNSMUMFYZRBJZZTHCVBQXXMJDJASCLFKEKRPJQYMGO",
      },
    });

    setOrderInfo(await resp.json());
    //   setOrderInfo((await getOrder(inputValue))); // 1438080519382-01
    console.log("orderInfo", orderInfo);
  };

  return (
    <>
      <header>
        <div class="container d-flex flex-wrap mw-100 first-section">
          <ul class="nav me-auto">
            <li class="nav-item">
              <a href={"/"} className="nav-link link-dark px-2">
                Totto Travel
              </a>
            </li>
            <li class="nav-item">
              <a href={"/"} className="nav-link link-dark px-2">
                Totto Kids
              </a>
            </li>
            <li class="nav-item">
              <a href={"/"} className="nav-link link-dark px-2">
                Totto Pets
              </a>
            </li>
          </ul>
          <ul class="nav">
            <li class="nav-item">
              <a href={"/"} className="nav-link link-dark px-2">
                Escríbenos por Whatsapp
              </a>
            </li>
            <li class="nav-item">
              <a href={"/"} className="nav-link link-dark px-2">
                Servicio al cliente
              </a>
            </li>
          </ul>
        </div>

        <nav className="navbar navbar-expand-lg bg-body-primary">
          <div className="container-fluid">
            <form
              onSubmit={(ev) => onSubmit(ev)}
              className="d-flex"
              role="search"
            >
              <input
                className="form-control me-2 border-bottom"
                type="text"
                placeholder="¿QUÉ ESTÁS BUSCANDO?"
                aria-label="¿QUÉ ESTÁS BUSCANDO?"
                value={inputValue}
                onChange={onInputChange}
                name="search-input"
                id="search-input"
              />
            </form>

            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbar-img"
            >
              <img
                src="https://tottoco.vtexassets.com/arquivos/logo.svg"
                alt="logo totto"
                width="120px"
              />
            </div>
            <div className="justify-content-center">
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <a href={"/"} className="nav-link text-white">
                    <img
                      src="./assets/user-logo.png"
                      alt="user logo"
                      width="30px"
                    />
                  </a>
                </li>
                <li>
                  <a href={"/"} className="nav-link text-white">
                    <img
                      src="./assets/bag-logo.png"
                      alt="bag logo"
                      width="30px"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container third-section">
          <div className="d-flex justify-content-center py-3">
            <ul class="nav nav-pills">
              <li className="nav-item">
                <a href={"/"} className="nav-link" aria-current="page">
                  DESCUBRE
                </a>
              </li>
              <li class="nav-item">
                <a href={"/"} className="nav-link">
                  MORRALES
                </a>
              </li>
              <li class="nav-item">
                <a href={"/"} className="nav-link">
                  MUJER
                </a>
              </li>
              <li class="nav-item">
                <a href={"/"} className="nav-link">
                  HOMBRE
                </a>
              </li>
              <li class="nav-item">
                <a href={"/"} className="nav-link">
                  NIÑA
                </a>
              </li>
              <li className="nav-item">
                <a href={"/"} className="nav-link" aria-current="page">
                  NIÑO
                </a>
              </li>
              <li class="nav-item">
                <a href={"/"} className="nav-link">
                  VIAJE
                </a>
              </li>
              <li class="nav-item">
                <a href={"/"} className="nav-link">
                  MASCOTAS
                </a>
              </li>
              <li class="nav-item">
                <a href={"/"} className="nav-link">
                  PERSONAJES
                </a>
              </li>
              <li class="nav-item">
                <a href={"/"} className="nav-link">
                  SALE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {!orderInfo.error ? (
        <div className="container">
          <div className="row bg-body-secondary text-center">
            <div className="col">DATOS CLIENTE</div>
          </div>
          <div className="row">
            <div className="col">Nombre cliente:</div>
            <div className="col">
              {orderInfo?.clientProfileData?.firstName}{" "}
              {orderInfo?.clientProfileData?.lastName}
            </div>
          </div>

          <div className="row">
            <div className="col">Email:</div>
            <div className="col">{orderInfo?.clientProfileData?.email}</div>
          </div>

          <div className="row">
            <div className="col">Documento:</div>
            <div className="col">{orderInfo?.clientProfileData?.document}</div>
          </div>

          <div className="row">
            <div className="col">Teléfono:</div>
            <div className="col">{orderInfo?.clientProfileData?.phone}</div>
          </div>

          <div className="row bg-body-secondary text-center">
            <div className="col">PRODUCTOS</div>
          </div>

          <ul className="orderinfo-results">
            {orderInfo?.items?.map((item) => (
              <li key={item.id} className="orderinfo-item">
                <div className="row">
                  <div className="col">Cantidad: {item.quantity}</div>
                  <div className="col">{item.name}</div>
                  <div className="col">
                    <img src={item.imageUrl} alt={item.name} />{" "}
                  </div>
                  <div className="col">${item.price}</div>
                </div>
                <hr />
              </li>
            ))}
          </ul>

          <div className="row bg-body-tertiary mb-3">
            <div className="col">VALOR TOTAL COMPRA: ${orderInfo?.value}</div>
          </div>
        </div>
      ) : (
        <p>No se encontraron resultados para el número de órden ingresado</p>
      )}

<div className="btn-whatsapp">
    <a href={'/'} className="nav-link">
    <img src="https://co.totto.com/arquivos/whatsapp.svg" alt="btn-ws" /></a>

</div>
      <footer>
        <div className="container footer-container mw-100 text-bg-dark">
          <div className="row">
            <p className="text-footer text-center">
              Regístrate y recibe un 20% de descuento en tu próxima compra.
              Además celebramos contigo, en el mes de tu cumpleaños disfruta del
              25% de descuento
            </p>
          </div>
          <div className="row justify-content-center mb-5 mt-5">
            <button className="btn btn-warning btn-subscribe">
              Suscríbete
            </button>
          </div>
          <div className="row justify-content-center mt-1 mb-3">
            <p className="text-footer text-center tyc">
              *Los descuentos de registro/actualización y de cumpleaños no son
              acumulables. Aplican términos y condiciones.
            </p>
          </div>

          <div className="row footer-menu bg-white text-bg-light p-5">
            <div className="col">
              <div className="row">SERVICIO AL CLIENTE</div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Envíos y entregas
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Servicio al cliente
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Cambios y devoluciones
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Encuentra tu tienda
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Escríbenos por Whatsapp
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Keypago
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Aviso de privacidad
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Promociones vigentes
                </a>
              </div>
            </div>

            <div className="col">
              <div className="row">SÉ PARTE DE TOTTO</div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Colaboradores
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Negocios empresariales
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Totto crea
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Trabaja con nosotros
                </a>
              </div>
            </div>

            <div className="col">
              <div className="row">NOSOTROS</div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Quiénes somos
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Línea ética
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Sostenibilidad
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Prensa
                </a>
              </div>
            </div>

            <div className="col">
              <div className="row">CATEGORÍAS</div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Morrales
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Mujer
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Hombre
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Niño
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Niña
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Mascotas
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Personajes
                </a>
              </div>
              <div className="row">
                <a href={"/"} className="nav-link">
                  Unisex
                </a>
              </div>
            </div>

            <div className="col">
              <div className="row country">
                <div className="col">
                  <span>Colombia</span>
                </div>
                <div className="col">
                  <img
                    className="img-bandera"
                    src="https://tottoco.vtexassets.com/arquivos/colombiaIcon.png"
                    alt="Bandera"
                  />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">Medios de pago</div>
              <div className="row">
                <div className="col">
                  <img
                    className="img-payments"
                    src="https://tottoco.vtexassets.com/arquivos/pse.png"
                    alt="PSE"
                  />
                </div>
                <div className="col">
                  <img
                    className="img-payments"
                    src="https://tottoco.vtexassets.com/arquivos/mastercard.png"
                    alt="Master Card"
                  />
                </div>

                <div className="col">
                  <img
                    className="img-payments"
                    src="https://tottoco.vtexassets.com/arquivos/visa.png"
                    alt="Visa"
                  />
                </div>
                <div className="col">
                  <img
                    className="img-payments"
                    src="https://tottoco.vtexassets.com/arquivos/americanexpress.png"
                    alt="American Express"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <img
                    className="img-payments"
                    src="https://tottoco.vtexassets.com/arquivos/dinersclub.png"
                    alt="Diners Club"
                  />
                </div>
                <div className="col">
                  <img
                    className="img-payments"
                    src="https://tottoco.vtexassets.com/arquivos/efecty.png"
                    alt="Efecty"
                  />
                </div>
              </div>
              <div className="row">
            

                <div className="col">
                  <img
                    className="img-payments"
                    src="https://tottoco.vtexassets.com/arquivos/creditofacil.png"
                    alt="Crédito fácil"
                  />
                </div>
                <div className="col">
                <img
                  className="img-payments"
                  src="https://tottoco.vtexassets.com/arquivos/sistecredito.png"
                  alt="Sistecrédito"
                />
              </div>
              </div>

             
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
