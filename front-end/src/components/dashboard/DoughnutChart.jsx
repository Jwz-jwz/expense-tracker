import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const DoughnutChart = ({ dashboardRecords }) => {
  // console.log(dashboardRecords);

  const data = {
    // labels: dashboardRecords?.map((record) => record?.name),

    datasets: [
      {
        label: "My First Dataset",
        data: dashboardRecords?.map((record) => record?.amount),
        backgroundColor: dashboardRecords?.map((record) => record?.icon_color),
        width: 20,
        height: 20,
        hoverOffset: 4,
      },
    ],
  };
  // const data = {
  //   labels: ["Bills", "Food", "Shopping", "Insurance", "Clothing"],

  //   datasets: [
  //     {
  //       label: "My First Dataset",
  //       data: [5000000, 5000000, 5000000, 5000000, 5000000],
  //       backgroundColor: [
  //         "#E74694",
  //         "#1C64F2",
  //         "#F2901C",
  //         "#16BDCA",
  //         "#FDBA8C",
  //       ],

  //       hoverOffset: 4,
  //     },
  //   ],
  // };

  return (
    <div className="flex flex-col w-[588px] h-[284px] rounded-xl bg-white">
      <div className="flex justify-between px-6 py-4 items-center border-b border-b-[#E2E8F0]">
        <p className="text-[16px] font-[600] leading-6">Income-expense</p>
        <p className="text-[#6B7280] text-[16px] font-[400] leading-6">
          Jun 1 - Nov 30
        </p>
      </div>
      <div className="flex w-full">
        <div style={{ width: "40%", padding: 20 }}>
          <Doughnut data={data} />
        </div>

        <table>
          <tbody>
            <tr>
              <td className="flex  w-[60%] flex-col gap-3">
                {dashboardRecords?.map((record, index) => {
                  return (
                    <div
                      key={index}
                      className=" flex items-center justify-between gap-5"
                    >
                      <div className="flex items-center gap-[2px] mt-2">
                        <div
                          style={{
                            backgroundColor: record.icon_color,
                            width: 12,
                            height: 12,
                            borderRadius: 50,
                          }}
                        ></div>
                        <p>{record.name}</p>
                      </div>
                      <p className="flex items-center">{record?.amount}₮</p>
                    </div>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
