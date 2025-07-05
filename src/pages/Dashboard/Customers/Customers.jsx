import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from 'recharts';

const cashData = [
  { month: 'Jan', cash: 500 },
  { month: 'Feb', cash: 600 },
  { month: 'Mar', cash: 700 },
  { month: 'Apr', cash: 800 },
  { month: 'May', cash: 900 },
  { month: 'Jun', cash: 1000 },
];

const buyData = [
  { month: 'Jan', actual: 120, target: 150, forecast: 130 },
  { month: 'Feb', actual: 140, target: 160, forecast: 150 },
  { month: 'Mar', actual: 160, target: 140, forecast: 500 },
  { month: 'Apr', actual: 180, target: 400, forecast: 175 },
  { month: 'May', actual: 200, target: 190, forecast: 205 },
  { month: 'Jun', actual: 220, target: 180, forecast: 600 },
];

const expensesData = [
  { month: 'Jan', actual: 200, budget: 180, forecast: 190 },
  { month: 'Feb', actual: 220, budget: 100, forecast: 350 },
  { month: 'Mar', actual: 240, budget: 220, forecast: 230 },
  { month: 'Apr', actual: 260, budget: 650, forecast: 140 },
  { month: 'May', actual: 280, budget: 120, forecast: 270 },
  { month: 'Jun', actual: 300, budget: 280, forecast: 290 },
];

const solvencyData = [
  { month: 'Jan', income: 600, outgoings: 400 },
  { month: 'Feb', income: 650, outgoings: 450 },
  { month: 'Mar', income: 700, outgoings: 500 },
  { month: 'Apr', income: 750, outgoings: 550 },
  { month: 'May', income: 800, outgoings: 600 },
  { month: 'Jun', income: 850, outgoings: 650 },
];

const debtorsData = [
  { month: 'Jan', debtors: 300 },
  { month: 'Feb', debtors: 350 },
  { month: 'Mar', debtors: 400 },
  { month: 'Apr', debtors: 450 },
  { month: 'May', debtors: 500 },
  { month: 'Jun', debtors: 550 },
];

const Customers = () => {
  return (
    <div className="p-8  bg-gray-900 text-white w-full min-h-screen">
      {/* Dashboard Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-lg text-gray-400">Al-customers financial optimization. One app for your fiscal needs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Cash in Bank */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold">Cash in bank</h3>
          <p className="text-2xl font-bold">$616.5K</p>
          <p className="text-sm text-gray-400">Current</p>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={cashData}>
              <XAxis dataKey="month" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip contentStyle={{ backgroundColor: '#374151', border: 'none' }} />
              <Bar dataKey="cash" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-400 mt-2">Past 6 months</p>
        </div>

        {/* Buy */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold">Buy</h3>
          <p className="text-2xl font-bold">$63.9K</p>
          <p className="text-sm text-gray-400">6 month avg</p>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={buyData}>
              <XAxis dataKey="month" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip contentStyle={{ backgroundColor: '#374151', border: 'none' }} />
              <Line type="monotone" dataKey="actual" stroke="#10B981" strokeWidth={2} name="Actual" />
              <Line type="monotone" dataKey="target" stroke="#EF4444" strokeWidth={2} strokeDasharray="5 5" name="Target" />
              <Line type="monotone" dataKey="forecast" stroke="#3B82F6" strokeWidth={2} strokeDasharray="5 5" name="Forecast" />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-400 mt-2">Past 6 months</p>
        </div>

        {/* Expenses */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold">Expenses</h3>
          <p className="text-2xl font-bold">$250K</p>
          <p className="text-sm text-gray-400">Salary (inc on cost) $Fixed costs Expenses</p>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={expensesData}>
              <XAxis dataKey="month" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip contentStyle={{ backgroundColor: '#374151', border: 'none' }} />
              <Line type="monotone" dataKey="actual" stroke="#F59E0B" strokeWidth={2} name="Actual" />
              <Line type="monotone" dataKey="budget" stroke="#EF4444" strokeWidth={2} strokeDasharray="5 5" name="Budget" />
              <Line type="monotone" dataKey="forecast" stroke="#3B82F6" strokeWidth={2} strokeDasharray="5 5" name="Forecast" />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-400 mt-2">Past 6 months</p>
        </div>

        {/* Solvency */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold">Solvency</h3>
          <p className="text-2xl font-bold">10.8mth</p>
          <p className="text-sm text-gray-400">Runway</p>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={solvencyData}>
              <XAxis dataKey="month" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip contentStyle={{ backgroundColor: '#374151', border: 'none' }} />
              <Bar dataKey="income" fill="#4F46E5" />
              <Bar dataKey="outgoings" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-400 mt-2">Income / outgoings</p>
        </div>

        {/* Debtors */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold">Debtors</h3>
          <p className="text-2xl font-bold">$345K</p>
          <p className="text-sm text-gray-400">Total</p>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie data={debtorsData} dataKey="debtors" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#F59E0B" label>
                {debtorsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#3B82F6', '#8B5CF6'][index % 6]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#374151', border: 'none' }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-400 mt-2">Debtors (past 6 months)</p>
        </div>

        {/* USD X. Rate */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold">USD X. Rate</h3>
          <p className="text-sm text-gray-400">EUR: 0.89</p>
          <p className="text-sm text-gray-400">GBP: 0.75</p>
          <p className="text-sm text-gray-400">CAD: 1.27</p>
        </div>
      </div>
    </div>
  );
};

export default Customers;