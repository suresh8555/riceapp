import React, { useState } from "react";


const sellersData = [
  { name: "Elysee Tomadoni", email: "etomadoni@senate.gov", region: "Asia", country: "Canada", volume: 514474.35, amount: 882329.71, satisfaction: 20.76 },
  { name: "Thain Moro", email: "tmoro@ecologyeffiz.com", region: "North America", country: "Portugal", volume: 26044.12, amount: 344544.06, satisfaction: 60.57 },
  { name: "Jens Richardson", email: "jrichardson@ondoklassniki.ru", region: "Europe", country: "China", volume: 92119.43, amount: 49724.47, satisfaction: 87.54 },
  { name: "Devlin Estler", email: "destler@blogger.com", region: "North America", country: "China", volume: 252821.95, amount: 977745.47, satisfaction: 96.68 },
  { name: "Javie Dufare", email: "jdufare@telias.com", region: "North America", country: "Pakistan", volume: 487200.27, amount: 494795.6, satisfaction: 82.03 },
  { name: "Delphine Mort", email: "dmort58@163.com", region: "Europe", country: "China", volume: 992263.11, amount: 231143.07, satisfaction: 44.75 },
  { name: "Vincent Listerick", email: "vlisterick@pba.net", region: "North America", country: "Tanzania", volume: 332527.87, amount: 870488.61, satisfaction: 35.24 },
  { name: "Neel Gannicleff", email: "ngannicleff@harvard.edu", region: "Asia", country: "Russia", volume: 907504.65, amount: 176286.67, satisfaction: 10.5 },
  { name: "Leonor Cosbee", email: "lcosbee@ondoklassniki.ru", region: "Asia", country: "Tanzania", volume: 122969.28, amount: 965247.95, satisfaction: 13.12 },
  { name: "Pippa Pordal", email: "ppordal@cisco.com", region: "Europe", country: "Ukraine", volume: 380961.39, amount: 542212.92, satisfaction: 50.71 },
];

const getSatisfactionColor = (value) => {
  if (value >= 60) return "green";
  if (value >= 30) return "yellow";
  return "red";
};

export default function OrdersTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(sellersData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = sellersData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="table-container">
      <h2 className="table-title">🌟 Top Sellers</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Region</th>
            <th>Country</th>
            <th>Volume</th>
            <th>Amount</th>
            <th>Satisfaction</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((seller, index) => (
            <tr key={index}>
              <td className="name-cell">
                <div className="avatar">{seller.name.split(" ").map(n => n[0]).join("")}</div>
                {seller.name}
              </td>
              <td><a href={`mailto:${seller.email}`} className="email-link">{seller.email}</a></td>
              <td>{seller.region}</td>
              <td>{seller.country}</td>
              <td>{seller.volume.toLocaleString()}</td>
              <td>${seller.amount.toLocaleString()}</td>
              <td>
                <div className="satisfaction-container">
                  <div
                    className={`satisfaction-bar ${getSatisfactionColor(seller.satisfaction)}`}
                    style={{ width: `${seller.satisfaction}%` }}
                  ></div>
                </div>
                <span className="satisfaction-text">{seller.satisfaction.toFixed(2)}%</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>Prev</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>Next</button>
      </div>
    </div>
  );
}

