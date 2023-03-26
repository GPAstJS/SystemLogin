const Dashboard = ({
  title,
  currentDailyHours,
  previousDailyHours,
  currentWeeklyHours,
  previousWeeklyHours,
  currentMonthlyHours,
  previousMonthlyHours,
  background,
  image,
  imageAlt,
}) => {
  return (
    <div
      class="container-img-div"
      style={{
        display: "flex",
        margin: '25px', 
        flexDirection: "column",
        justifyContent: "center",
        width: "220px",
        height: '189px',
        borderRadius: "15px",
        background: background,
      }}
    >
      <div
        class="img-div"
        style={{
          height: "41px",
          borderBottom: "none",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      >
        <img
          src={image}
          alt={imageAlt}
          style={{
            float: "right",
            height: "65px",
            marginRight: "10px",
          }}
        />
      </div>

      <div
        class="container-title-content"
        style={{
          display: "flex",
          background: "var(--dark-blue)",
          flexDirection: "column",
          borderRadius: "15px",
          justifyContent: "space-between",
          height: "150px",
        }}
      >
        <div
          class="title-menu"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px",
          }}
        >
          <p
            class="dashboard-title"
            style={{
              color: "#fff",
            }}
          >
            {title}
          </p>
          <button
            class="menu-btn"
            style={{
              background: "none",
              border: "none",
              color: "#fff",
            }}
          >
            ...
          </button>
        </div>

        <div
          class="content"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: "15px",
          }}
        >
          <p
            class="timeframe-time"
            style={{
              color: "#fff",
              fontSize: "30px",
            }}
          >
            {currentWeeklyHours}hrs
          </p>
          <p
            class="previous-time"
            style={{
              color: "#fff",
            }}
          >
            Previous: {previousWeeklyHours}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
