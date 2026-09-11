import React, { useState } from "react";
import "../../assets/css/ProductMockup.css";

export default function ProductMockup({ variant = "hero" }) {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className={`product-mockup-wrapper ${variant}`}>
      <div className="product-glow-backdrop"></div>
      
      {/* Browser Window Frame */}
      <div className="browser-window">
        {/* Browser Top Chrome Bar */}
        <div className="browser-chrome">
          <div className="traffic-lights">
            <span className="light light-close"></span>
            <span className="light light-minimize"></span>
            <span className="light light-expand"></span>
          </div>
          
          <div className="browser-url-bar">
            <svg className="lock-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>app.hsynex.com/restaurant/{activeTab}</span>
          </div>

          <div className="browser-status">
            <span className="status-ping"></span>
            <span className="status-text">Live Sync</span>
          </div>
        </div>

        {/* Mockup Main Shell */}
        <div className="mockup-app-shell">
          {/* App Sidebar */}
          <aside className="mockup-sidebar">
            <div className="sidebar-brand">
              <div className="sidebar-logo-h">H</div>
              <div className="sidebar-brand-text">
                <span className="brand-title">HSynex</span>
                <span className="brand-sub">Restaurant OS</span>
              </div>
            </div>

            <nav className="sidebar-nav">
              <button
                className={`nav-btn ${activeTab === "dashboard" ? "active" : ""}`}
                onClick={() => setActiveTab("dashboard")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span>Dashboard</span>
              </button>

              <button
                className={`nav-btn ${activeTab === "orders" ? "active" : ""}`}
                onClick={() => setActiveTab("orders")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span>Live Orders</span>
                <span className="order-pill">6</span>
              </button>

              <button
                className={`nav-btn ${activeTab === "tables" ? "active" : ""}`}
                onClick={() => setActiveTab("tables")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>Floor & Tables</span>
              </button>

              <button
                className={`nav-btn ${activeTab === "inventory" ? "active" : ""}`}
                onClick={() => setActiveTab("inventory")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
                <span>Inventory & AI</span>
              </button>
            </nav>

            <div className="sidebar-footer">
              <div className="user-profile">
                <div className="user-avatar">AD</div>
                <div className="user-meta">
                  <span className="user-name">Central Kitchen</span>
                  <span className="user-role">Main Station</span>
                </div>
              </div>
            </div>
          </aside>

          {/* App Body Content */}
          <main className="mockup-content">
            {activeTab === "dashboard" && (
              <div className="tab-pane animate-fade-in">
                {/* Metric Summary Cards */}
                <div className="metrics-grid">
                  <div className="metric-box">
                    <span className="metric-label">Today's Revenue</span>
                    <div className="metric-value">$4,820.50</div>
                    <span className="metric-trend positive">↑ +18.4% vs avg</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-label">Active Orders</span>
                    <div className="metric-value">28</div>
                    <span className="metric-trend positive">6 in prep kitchen</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-label">Table Occupancy</span>
                    <div className="metric-value">18 / 24</div>
                    <span className="metric-trend neutral">75% capacity</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-label">Avg Fulfillment</span>
                    <div className="metric-value">18m</div>
                    <span className="metric-trend positive">↓ 4m faster</span>
                  </div>
                </div>

                {/* Dashboard Chart & Live Feed Grid */}
                <div className="dashboard-columns">
                  <div className="chart-card">
                    <div className="card-header-flex">
                      <h4>Hourly Sales Volume</h4>
                      <span className="badge-sm">Real-time</span>
                    </div>
                    <div className="mock-bar-chart">
                      <div className="bar-col" style={{ height: "40%" }} data-label="12 PM"></div>
                      <div className="bar-col" style={{ height: "65%" }} data-label="1 PM"></div>
                      <div className="bar-col" style={{ height: "85%" }} data-label="2 PM"></div>
                      <div className="bar-col" style={{ height: "45%" }} data-label="3 PM"></div>
                      <div className="bar-col" style={{ height: "50%" }} data-label="4 PM"></div>
                      <div className="bar-col" style={{ height: "92%" }} data-label="5 PM"></div>
                      <div className="bar-col active-peak" style={{ height: "100%" }} data-label="6 PM"></div>
                      <div className="bar-col" style={{ height: "80%" }} data-label="7 PM"></div>
                    </div>
                  </div>

                  <div className="live-feed-card">
                    <div className="card-header-flex">
                      <h4>Kitchen Pipeline</h4>
                      <span className="pulse-text">● Live</span>
                    </div>
                    <div className="feed-list">
                      <div className="feed-item">
                        <span className="table-badge">T-04</span>
                        <div className="feed-info">
                          <div className="item-name">Truffle Pasta & Ribeye</div>
                          <span className="item-time">Table 04 • 4 mins ago</span>
                        </div>
                        <span className="status-tag tag-prep">Cooking</span>
                      </div>
                      <div className="feed-item">
                        <span className="table-badge">T-12</span>
                        <div className="feed-info">
                          <div className="item-name">Signature Sushi Platter</div>
                          <span className="item-time">Table 12 • 9 mins ago</span>
                        </div>
                        <span className="status-tag tag-ready">Ready</span>
                      </div>
                      <div className="feed-item">
                        <span className="table-badge">D-88</span>
                        <div className="feed-info">
                          <div className="item-name">Woodfired Pizza × 2</div>
                          <span className="item-time">Delivery • 14 mins ago</span>
                        </div>
                        <span className="status-tag tag-transit">Dispatched</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="tab-pane animate-fade-in">
                <div className="card-header-flex orders-header">
                  <h4>Active Order Management</h4>
                  <div className="order-filter-pills">
                    <span className="filter-pill active">All (28)</span>
                    <span className="filter-pill">Kitchen (6)</span>
                    <span className="filter-pill">Ready (4)</span>
                    <span className="filter-pill">Completed (18)</span>
                  </div>
                </div>

                <div className="orders-table-grid">
                  <div className="order-row header-row">
                    <span>Order #</span>
                    <span>Destination</span>
                    <span>Items</span>
                    <span>Total</span>
                    <span>Status</span>
                  </div>
                  <div className="order-row">
                    <span className="order-num">#HS-4089</span>
                    <span>Table 04 (4 Guests)</span>
                    <span>3 items (Prime Ribeye, Pinot Noir)</span>
                    <span className="order-price">$142.50</span>
                    <span className="status-tag tag-prep">In Kitchen</span>
                  </div>
                  <div className="order-row">
                    <span className="order-num">#HS-4088</span>
                    <span>Table 12 (2 Guests)</span>
                    <span>2 items (Salmon Carpaccio, Tart)</span>
                    <span className="order-price">$88.00</span>
                    <span className="status-tag tag-ready">Ready to Serve</span>
                  </div>
                  <div className="order-row">
                    <span className="order-num">#HS-4087</span>
                    <span>Online Delivery #88</span>
                    <span>4 items (Pasta Combo, Tiramisu)</span>
                    <span className="order-price">$94.20</span>
                    <span className="status-tag tag-transit">Courier Picked</span>
                  </div>
                  <div className="order-row">
                    <span className="order-num">#HS-4086</span>
                    <span>Table 08 (6 Guests)</span>
                    <span>7 items (Chef Tasting Course)</span>
                    <span className="order-price">$310.00</span>
                    <span className="status-tag tag-prep">In Kitchen</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "tables" && (
              <div className="tab-pane animate-fade-in">
                <div className="card-header-flex">
                  <h4>Floor Map & Table Occupancy</h4>
                  <div className="table-legend">
                    <span className="legend-item"><span className="dot dot-occupied"></span> Occupied (18)</span>
                    <span className="legend-item"><span className="dot dot-reserved"></span> Reserved (2)</span>
                    <span className="legend-item"><span className="dot dot-free"></span> Available (4)</span>
                  </div>
                </div>

                <div className="floor-grid">
                  {[
                    { id: "T-01", seats: "2 Seats", status: "occupied", bill: "$64.00" },
                    { id: "T-02", seats: "4 Seats", status: "occupied", bill: "$142.00" },
                    { id: "T-03", seats: "4 Seats", status: "free", bill: "--" },
                    { id: "T-04", seats: "6 Seats", status: "occupied", bill: "$218.50" },
                    { id: "T-05", seats: "2 Seats", status: "reserved", bill: "7:30 PM" },
                    { id: "T-06", seats: "8 Seats (VIP)", status: "occupied", bill: "$490.00" },
                    { id: "T-07", seats: "2 Seats", status: "free", bill: "--" },
                    { id: "T-08", seats: "4 Seats", status: "occupied", bill: "$112.00" },
                  ].map((table) => (
                    <div key={table.id} className={`table-card status-${table.status}`}>
                      <div className="table-top">
                        <span className="t-name">{table.id}</span>
                        <span className={`status-bubble ${table.status}`}></span>
                      </div>
                      <span className="t-seats">{table.seats}</span>
                      <div className="t-bill">{table.bill}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "inventory" && (
              <div className="tab-pane animate-fade-in">
                <div className="card-header-flex">
                  <h4>Smart Inventory & AI Forecasting</h4>
                  <span className="badge-sm badge-cyan">Auto-Restock Active</span>
                </div>

                <div className="inventory-grid">
                  <div className="inventory-card alert-card">
                    <div className="inv-top">
                      <span className="inv-name">Wagyu A5 Striploin</span>
                      <span className="inv-badge low">15% Stock</span>
                    </div>
                    <div className="inv-progress-bar">
                      <div className="inv-progress fill-low" style={{ width: "15%" }}></div>
                    </div>
                    <p className="inv-desc">Predicted depletion: Today by 8:30 PM. Auto draft purchase order generated for supplier.</p>
                  </div>

                  <div className="inventory-card">
                    <div className="inv-top">
                      <span className="inv-name">Organic Truffle Oil</span>
                      <span className="inv-badge normal">78% Stock</span>
                    </div>
                    <div className="inv-progress-bar">
                      <div className="inv-progress fill-normal" style={{ width: "78%" }}></div>
                    </div>
                    <p className="inv-desc">Optimal buffer maintained for next 14 days of average forecast volume.</p>
                  </div>

                  <div className="inventory-card">
                    <div className="inv-top">
                      <span className="inv-name">Arborio Risotto Rice</span>
                      <span className="inv-badge normal">92% Stock</span>
                    </div>
                    <div className="inv-progress-bar">
                      <div className="inv-progress fill-normal" style={{ width: "92%" }}></div>
                    </div>
                    <p className="inv-desc">Shipment received this morning from certified distributor.</p>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
