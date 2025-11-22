
export const Footer = () => {
	return (
			<footer className="container-fluid mt-auto d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-dark text-light">
				<div className="col-md-4 d-flex align-items-center">
					<a href="/" className="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1" aria-label="Bootstrap">
						<svg className="bi" width="30" height="24" aria-hidden="true"><use xlinkHref="#bootstrap"></use></svg>
					</a>
					<span className="mb-3 mb-md-0 text-light">© 2025 Company, Inc</span>
				</div>
				<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
					<li className="ms-3">
						<a className="text-light" href="#" aria-label="Instagram">
							<i className="fa-brands fa-instagram"></i>
						</a>
					</li>
					<li className="ms-3">
						<a className="text-light" href="#" aria-label="Facebook">
							<i className="fa-brands fa-facebook"></i>
						</a>
					</li>
				</ul>
			</footer>
		)
};
