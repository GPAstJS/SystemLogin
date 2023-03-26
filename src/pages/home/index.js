import React from "react";
import Dashboard from "../../components/dashboard/index";
import DashboardData from "../../components/dashboardData/index";
import Header from "../../components/header/index";

const Home = () => {
  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {sessionStorage.getItem("user") ? (
        <div
          className="content-box"
          style={{
            width: "1440px",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Header />
          <div
            className="dashboard-container"
            style={{
              display: "flex",
              width: '1440px',  
              alignItems: "center",
              justifyContent: "center",
              height: '700px'
            }}
          >
            <div
              className="dashboard"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                justifyContent: "center",
              }}
            >
              {DashboardData.map((data) => (
                <>
                  <Dashboard
                    title={data.title}
                    currentWeeklyHours={data.currentWeeklyHours}
                    previousWeeklyHours={data.previousWeeklyHours}
                    image={data.image}
                    imageAlt={data.description}
                    background={data.background}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h1>To access the content of this page you must be connected!</h1>
      )}
    </div>
  );
};

export default Home;
