import React from "react";
import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";

const options1 = {
  chart: {
    type: "pie",
  },
  title: {
    text: "Top 5 Ads",
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false,
      },
      showInLegend: false,
    },
  },
  series: [
    {
      name: "",
      color: "#006600",
      lineWidth: 1,
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 3,
        states: {
          hover: {
            enabled: true,
            lineWidth: 1,
          },
        },
      },
      data: [
        {
          y: 50,
          sliced: true,
        },
        {
          y: 50,
          sliced: true,
        },
      ],
    },
  ],
};

const options2 = {
  chart: {
    type: "pie",
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false,
      },
      showInLegend: false,
    },
  },
  series: [
    {
      name: "",
      color: "#006600",
      lineWidth: 1,
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 3,
        states: {
          hover: {
            enabled: true,
            lineWidth: 1,
          },
        },
      },
      data: [
        {
          y: 70,
          sliced: true,
        },
        {
          y: 30,
          sliced: true,
        },
      ],
    },
  ],
};

const PieChartComp = ({ type }) => {
  return (
    <div>
      <PieChart
        highcharts={Highcharts}
        options={type == 1 ? options1 : options2}
        containerProps={{ style: { width: "100%", height: "100%" } }}
      />
    </div>
  );
};

export default PieChartComp;
