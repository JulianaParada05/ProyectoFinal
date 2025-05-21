import React, { useEffect } from "react";

export default function Programa() {
  useEffect(() => {
    // Cargar CSS de Leaflet
    const leafletCSS = document.createElement("link");
    leafletCSS.rel = "stylesheet";
    leafletCSS.href = "https://unpkg.com/leaflet/dist/leaflet.css";
    document.head.appendChild(leafletCSS);

    // Cargar script de Leaflet
    const leafletScript = document.createElement("script");
    leafletScript.src = "https://unpkg.com/leaflet/dist/leaflet.js";
    leafletScript.onload = () => {
      if (!window.L) return;

      // Inicializar el mapa
      const map = window.L.map("map").setView(
        [4.667658766670203, -74.12272803489356],
        13
      );

      // Capa base
      window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      // Polígono
      const puntosPoligono = [
        [4.660006292237558, -74.12358791050606],
        [4.662065301482043, -74.12147143592206],
        [4.660001030704979, -74.11917546102086],
        [4.657777345784757, -74.1214065174826],
        [4.660006292237558, -74.12358791050606],
      ];

      const poligono = window.L.polygon(puntosPoligono, {
        color: "blue",
        fillColor: "lightblue",
        fillOpacity: 0.4,
      }).addTo(map);

      poligono.bindPopup("Zona del polígono en La Felicidad").openPopup();
    };
    document.body.appendChild(leafletScript);

    // Scroll suave
    const handler = (e) => {
      e.preventDefault();
      const target = document.querySelector(
        e.currentTarget.getAttribute("href")
      );
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => anchor.addEventListener("click", handler));

    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handler)
      );
    };
  }, []);

  return (
    <>
      <style>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        nav {
          background-color: #333;
          padding: 10px;
        }
        nav ul {
          list-style: none;
          display: flex;
          justify-content: center;
          margin: 0;
          padding: 0;
        }
        nav li {
          margin: 0 15px;
        }
        nav a {
          color: white;
          text-decoration: none;
          font-size: 18px;
        }
        nav a:hover {
          text-decoration: underline;
        }
        #map {
          height: 500px;
          width: 100%;
        }
        section {
          padding: 20px;
          margin-top: 20px;
        }
        #acerca-de {
          background-color: #f4f4f4;
        }
        #descripcion {
          background-color: #e9e9e9;
        }
        #autor {
          background-color: #dcdcdc;
        }
      `}</style>

      <nav>
        <ul>
          <li>
            <a href="#acerca-de">Acerca de</a>
          </li>
          <li>
            <a href="#descripcion">Descripción</a>
          </li>
          <li>
            <a href="#autor">Autor</a>
          </li>
        </ul>
      </nav>

      <section id="acerca-de">
        <h2>Acerca de</h2>
        <p>
          Esta página presenta un proyecto sobre la deficiencia en el alumbrado público en el sector de La Felicidad, cerca del conjunto residencial Los Cerros.
        </p>
      </section>

      <section id="descripcion">
        <h2>Descripción</h2>
        <p>
          El objetivo de esta aplicación es permitir a los usuarios visualizar
          el área afectada mediante un polígono interactivo en el mapa,
          facilitando su análisis y estudio.
        </p>
      </section>

      <section id="autor">
        <h2>Autor</h2>
        <p>Juliana Parada Romero</p>
      </section>

      <h1>Deficiencia de alumbrado público</h1>
      <div id="map"></div>
    </>
  );
} 