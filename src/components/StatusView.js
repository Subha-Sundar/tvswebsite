// src/components/StatusView.js
import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import axiosInstance from "../api";

// Register necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);
const StatusView = () => {
  const [data, setData] = useState(null);

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    // Function to fetch user data
    const fetchUserDetails = async () => {
      try {
        const response = await axiosInstance.get(
          "users_latlong/",
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("Users Response:", response.data);
        // console.log(response.data.filter(engineer => engineer.serviceProviding !== null));
        // console.log(engineers);
        // setEngineers(response.data)
        const serviceLabels = [
          ...new Set(
            response.data.map((engineer) => engineer.serviceProviding)
          ),
        ];
        // Generate colors for each service
        const backgroundColors = serviceLabels.map(() => getRandomColor());
        const borderColors = backgroundColors.map((color) =>
          color.replace("0.2", "1")
        );
        setData({
          labels: serviceLabels,
          datasets: [
            {
              label: "Service Providers",
              data: serviceLabels.map(
                (label) =>
                  response.data.filter(
                    (engineer) => engineer.serviceProviding === label
                  ).length
              ),
              backgroundColor: backgroundColors,
              borderColor: borderColors,
              borderWidth: 1,
            },
          ],
        });
        console.log(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        return [];
      }
    };

    fetchUserDetails();
  },[]);

  // Example pie chart data

  return (
    <div className="my-4">
      <h2 className="text-3xl font-bold">
        View <span className="text-blue-500">Status</span>
      </h2>
      <div className="p-4 rounded">{data && <Pie data={data} />}</div>
    </div>
  );
};

export default StatusView;
