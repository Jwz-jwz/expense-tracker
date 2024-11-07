import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);
export const ChartHero = ({ dashboardRecords }) => {
  const data = {
    labels: ["Bills", "Food", "Shopping", "Insurance", "Clothing"],

    datasets: [
      {
        label: "My First Dataset",
        data: [5000000, 5000000, 5000000, 5000000, 5000000],
        backgroundColor: [
          "#E74694",
          "#1C64F2",
          "#F2901C",
          "#16BDCA",
          "#FDBA8C",
        ],

        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex flex-col w-[588px] h-[284px] rounded-xl bg-white">
      <div className="flex justify-between px-6 py-4 items-center border-b border-b-[#E2E8F0]">
        <p className="text-[16px] font-[600] leading-6">Income-expense</p>
        <p className="text-[#6B7280] text-[16px] font-[400] leading-6">
          Jun 1 - Nov 30
        </p>
      </div>
      <Doughnut className="w-[156px] h-[156px]" data={data} />
      <table>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
