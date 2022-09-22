




export const Promociones = () => {



  return (
    <div className="container mt-5 p-3 rounded cart">
      <div className="row no-gutters">
        <div className="col-md-8">
          <div className="product-details mr-2">

            <div className="d-flex flex-row align-items-center"><i className="fa fa-long-arrow-left"></i><span className="ml-2">Volver</span>
            </div>
            <hr />
            <h6 className="mb-0">Carrito</h6>
          </div>
          <div className="col-md-4">
            <div className="payment-info">
              <div className="d-flex justify-content-between align-items-left">
                <span>Formulario Compra</span>
              </div>
              <div><label className="credit-card-label">Nombre</label><input type="text" className="form-control credit-inputs" placeholder="Name" /></div>
              <div><label className="credit-card-label">Apellido</label><input type="text" className="form-control credit-inputs" placeholder="Apellido" /></div>
              <div><label className="credit-card-label">Telefono</label><input type="text" className="form-control credit-inputs" placeholder="Telefono" /></div>
              <div><label className="credit-card-label">E-MAIL</label><input type="text" className="form-control credit-inputs" placeholder="e-mail" /></div>
              <hr className="line" />
              <div className="d-flex justify-content-between information"><span>Total(Incl. taxes)</span><span>$3020.00</span></div><button className="btn btn-primary btn-block d-flex justify-content-center mt-3" type="button"><span>Finalizar</span></button></div>
          </div>
        </div>
      </div>
    </div>
  )
}
