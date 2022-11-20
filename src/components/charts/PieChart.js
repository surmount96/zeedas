import Chart from "react-apexcharts";
const PieChart = () => {
  const options = {
    chart: {
      type: "bar",
    },
    labels: [
      "4hrs Coding",
      "8hrs  Code Review",
      "1hrs  QA Review ",
      "3hrs  Idle Time ",
      "1hr  Deployment",
    ],
    dataLabels: {
      enabled: false,
      style: {
       
      },
    },
    stroke: {
      width: 4,
      colors: ['transparent']
    },
    legend: {
      fontSize: "14px",
      fontFamily: "Nunito sans",
      marginBottom:'14px',margin:0
    },
    toolbar: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
            // name: "17 hrs",
            // value: "Average across 50 tickets in 4 weeks",
            // total: {
            //   showAlways: true,
            //   show: true
            // }
          },
        },
      },
    },
    //   fill: { colors: ['red', 'green', 'yellow'] },
    colors: ["#4DBD98", "#23B3E8", "#03293D", "#F15832", "#826AF9"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
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
        height={620}
        width={340}
      />
    </>
  );
};

export default PieChart;
