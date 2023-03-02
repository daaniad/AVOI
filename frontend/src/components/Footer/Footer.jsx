export default function Footer() {
  return (
    <>
      <div id="page-content">
        <div className="container text-center mt-5">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <h1 className="fw-light mt-4 text-dark">
                Síguenos en redes para más información
              </h1>
              <div className="container d-flex justify-content-center">
                <div className="m-3">
                    <a className="text-dark" href="https://www.instagram.com/asoc_avoi">
                  <i className="bi bi-instagram fs-1"></i>

                    </a>
                </div>
                <div className="m-3">
                    <a className="text-dark" href="https://www.facebook.com/avoi.voluntariado/">

                  <i className="bi bi-facebook fs-1"></i>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer
        id="sticky-footer"
        className="flex-shrink-0 py-4 bg-dark text-white-50"
      >
        <div className="container text-center">
          <small>Copyright &copy; AVOI</small>
        </div>
      </footer>
    </>
  );
}
