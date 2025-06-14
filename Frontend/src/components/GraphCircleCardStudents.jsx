import { User } from "lucide-react";
import { PieChart, Pie, Cell } from "recharts";

//Tenho que puxar do banco de dados e adicionar uma propriedade em cada aluno lá
const data = [
  { name: "Ativos", value: 5900 },
  { name: "Inativos", value: 3100 },
];

const COLORS = ["#EF4444", "#E5E7EB"];

const total = data.reduce((sum, item) => sum + item.value, 0);

const GraphCircleCardStudents = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-64 text-center mt-6">
      <h2 className="text-sm font-semibold text-gray-600 mb-2">
        Total de Alunos
      </h2>

      <div className="relative flex justify-center items-center">
        <PieChart width={150} height={150}>
          <Pie
            data={data}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            innerRadius={50}
            outerRadius={55}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>

        <div className="absolute flex flex-col items-center justify-center">
          <User />
          <p className="text-xl font-bold">{total.toLocaleString()}</p>
          {/* <p className="text-xs text-gray-500">Total</p> */}
        </div>
      </div>

      <div className="mt-3 flex justify-around text-xs text-gray-500">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-[#EF4444]" />
          <span>
            {data[0].name}: {data[0].value}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <span>
            {data[1].name}: {data[0].value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GraphCircleCardStudents;
