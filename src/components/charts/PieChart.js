import Chart from "react-apexcharts";
import { Text } from "@chakra-ui/react";
const PieChart = (type = "bar", width = "150") => {
  const options = {
    chart: {
      type: "bar",
    },
    labels: ["4hrs Coding",'8hrs  Code Review','1hrs  QA Review ','3hrs  Idle Time ','1hr  Deployment'],
    dataLabels: {
      enabled: false,
    },
    toolbar: {
        show: false,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: '17 hrs',
              value: 'Average across 50 tickets in 4 weeks'
            }
          }
        }
      },
    //   fill: { colors: ['red', 'green', 'yellow'] },
    colors: ['#4DBD98', '#23B3E8', '#03293D', '#F15832', '#826AF9'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 400,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  const series = [44, 55, 41, 17, 15];

  return (
    <>
      <Chart
        options={options}
        series={series}
        type="donut"
        // height="120"
        width={340}
      />
    </>
  );
};

export default PieChart;
