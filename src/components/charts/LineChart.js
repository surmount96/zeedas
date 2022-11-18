import Chart from "react-apexcharts";

const LineChart = (data) => {
  const options = {
    chart: {
      id: "basic-bar9",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 4,
    },
    colors:['#23B3E8'],
    fill: {
      gradient: {
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 0.1,
        opacityTo: 0.1,
        stops: [0, 50, 100],
      },
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
  };
  const series = [
    {
      name: "redayx",
      data: [70, 90, 30, 20, 50, 60, 100],
    },
  ];

  return (
    <>
      <Chart options={options} series={series} type="area" height={"120"} />
    </>
  );
};

export default LineChart;
