import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options1 = {
  title: {
    text: "Revenue over time of 7 days",
  },
  chart: {
    type: "spline",
  },
  series: [
    {
      data: [4, 5, 7, 32, 1, 2],
    },
  ],
};

const options2 = {
  title: {
    text: "Profit over time of 7 days",
  },
  chart: {
    type: "spline",
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6],
    },
  ],
};

const HighGraph = ({ type }) => {
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={type == 1 ? options1 : options2}
        containerProps={{ style: { width: '100%', height: '100%' } }}

      />
    </div>
  );
};

export default HighGraph;
