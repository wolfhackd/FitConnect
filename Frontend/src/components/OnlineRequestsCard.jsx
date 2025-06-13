import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "New", value: 5900 },
  { name: "Returning", value: 3100 },
];

const COLORS = ["#3b82f6", "#e5e7eb"]; // Azul e cinza claro

const total = data.reduce((sum, item) => sum + item.value, 0);

const OnlineRequestsCard = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-64 text-center mt-6">
      <h2 className="text-sm font-semibold text-gray-600 mb-2">
        Online Requests
      </h2>

      <div className="relative flex justify-center items-center">
        <PieChart width={150} height={150}>
          <Pie
            data={data}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            innerRadius={50}
            outerRadius={70}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>

        <div className="absolute flex flex-col items-center justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="icon"
            className="w-6 h-6 mb-1"
          />
          <p className="text-xl font-bold">{total.toLocaleString()}</p>
          <p className="text-xs text-gray-500">Requests</p>
        </div>
      </div>

      <div className="mt-3 flex justify-around text-xs text-gray-500">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <span>New: 5.9k</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <span>Returning: 3.1k</span>
        </div>
      </div>
    </div>
  );
};

export default OnlineRequestsCard;
