const Footer = () => {
  return (
    <div className="row gx-0 position-fixed bottom-0 w-100 bg-white">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-0 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2024 Palak Hazare
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
