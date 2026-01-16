import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminNavbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="navbar navbar-dark bg-primary navbar-expand-lg sticky-top admin-navbar"
      role="navigation"
    >
      <div className="container">
        <Link className="navbar-brand" to="/admin">
          <i className="fas fa-cog me-2" aria-hidden="true"></i>
          Panel de Administración
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNav"
          aria-controls="adminNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="adminNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/admin") ? "active" : ""}`}
                to="/admin"
                aria-current={isActive("/admin") ? "page" : undefined}
              >
                <i className="fas fa-tachometer-alt me-1"></i>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive("/admin/products") ? "active" : ""
                }`}
                to="/admin/products"
                aria-current={isActive("/admin/products") ? "page" : undefined}
              >
                <i className="fas fa-box me-1"></i>
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive("/admin/categories") ? "active" : ""
                }`}
                to="/admin/categories"
                aria-current={
                  isActive("/admin/categories") ? "page" : undefined
                }
              >
                <i className="fas fa-tags me-1"></i>
                Categorías
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive("/admin/reservations") ? "active" : ""
                }`}
                to="/admin/reservations"
                aria-current={
                  isActive("/admin/reservations") ? "page" : undefined
                }
              >
                <i className="fas fa-calendar-check me-1"></i>
                Reservas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive("/admin/news") ? "active" : ""
                }`}
                to="/admin/news"
                aria-current={isActive("/admin/news") ? "page" : undefined}
              >
                <i className="fas fa-newspaper me-1"></i>
                Noticias
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive("/admin/config") ? "active" : ""
                }`}
                to="/admin/config"
                aria-current={isActive("/admin/config") ? "page" : undefined}
              >
                <i className="fas fa-cog me-1"></i>
                Configuración
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning" to="/">
                <i className="fas fa-home me-1"></i>
                Volver al Sitio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
