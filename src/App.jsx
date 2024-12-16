import { useState } from "react";
  

    

        function App() {
            return (
                <div className="flex h-screen">
                    <Sidebar />
                    <MainContent />
                </div>
            );
        }

        function Sidebar() {
            return (
                <div className="w-64 bg-white p-4 shadow-lg">
                    <div className="flex items-center mb-8">
                        <img src="https://placehold.co/40x40" alt="Logo" className="mr-2" />
                        <span className="text-pink-500 font-bold text-xl">FROZY'S</span>
                    </div>
                    <nav>
                        <ul>
                            <li className="mb-4">
                                <a href="#" className="flex items-center text-blue-500">
                                    <i className="fas fa-home mr-2"></i>
                                    Home
                                </a>
                            </li>
                            <li className="mb-4">
                                <div className="flex items-center text-gray-500">
                                    <i className="fas fa-chart-bar mr-2"></i>
                                    View
                                </div>
                                <ul className="ml-6 mt-2">
                                    <li className="mb-2">
                                        <a href="#" className="flex items-center text-gray-500">
                                            <i className="fas fa-chart-line mr-2"></i>
                                            Sales Analytics
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="flex items-center text-gray-500">
                                            <i className="fas fa-exchange-alt mr-2"></i>
                                            Transactions
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="flex items-center text-gray-500">
                                            <i className="fas fa-file-invoice-dollar mr-2"></i>
                                            Billings
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-4">
                                <div className="flex items-center text-gray-500">
                                    <i className="fas fa-cogs mr-2"></i>
                                    Manage
                                </div>
                                <ul className="ml-6 mt-2">
                                    <li className="mb-2">
                                        <a href="#" className="flex items-center text-gray-500">
                                            <i className="fas fa-vending-machine mr-2"></i>
                                            Vending Machines
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="flex items-center text-gray-500">
                                            <i className="fas fa-boxes mr-2"></i>
                                            Inventory
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="flex items-center text-gray-500">
                                            <i className="fas fa-ad mr-2"></i>
                                            Advertisements
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="flex items-center text-gray-500">
                                            <i className="fas fa-id-card mr-2"></i>
                                            Membership Cards
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="flex items-center text-gray-500">
                                            <i className="fas fa-tags mr-2"></i>
                                            Discounts
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="flex items-center text-gray-500">
                                            <i className="fas fa-ticket-alt mr-2"></i>
                                            Coupons
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="flex items-center text-gray-500">
                                            <i className="fas fa-users mr-2"></i>
                                            Users
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="flex items-center text-gray-500">
                                    <i className="fas fa-file-invoice mr-2"></i>
                                    Taxes
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="flex items-center text-gray-500">
                                    <i className="fas fa-tools mr-2"></i>
                                    Maintenance
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            );
        }

        function MainContent() {
            return (
                <div className="flex-1 p-6 bg-gray-100">
                    <Header />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        <TodaySales />
                        <SalesAnalysis />
                        <InventoryLevel />
                        <MachineStatus />
                    </div>
                </div>
            );
        }

        function Header() {
            return (
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Cloud System</h1>
                    <div className="flex items-center">
                        <div className="relative mr-4">
                            <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 rounded-full bg-white shadow-md focus:outline-none" />
                            <i className="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
                        </div>
                        <i className="fas fa-moon mr-4 text-gray-500"></i>
                        <i className="fas fa-bell mr-4 text-gray-500"></i>
                        <div className="flex items-center">
                            <img src="https://placehold.co/40x40" alt="User" className="rounded-full mr-2" />
                            <div>
                                <p className="font-semibold">Max Klein</p>
                                <p className="text-sm text-gray-500">Super Admin</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        function TodaySales() {
            return (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Today Sales</h2>
                        <i className="fas fa-expand-arrows-alt text-gray-400"></i>
                    </div>
                    <div className="flex justify-center items-center mb-4">
                        <div className="relative">
                            <div className="w-32 h-32 rounded-full border-8 border-green-500 absolute top-0 left-0"></div>
                            <div className="w-32 h-32 rounded-full border-8 border-blue-500 absolute top-0 left-0" style={{ clipPath: 'inset(0 0 50% 0)' }}></div>
                            <div className="flex justify-center items-center w-32 h-32 rounded-full border-8 border-transparent">
                                <p className="text-2xl font-bold">€ 3562</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-center">
                            <p className="text-blue-500 font-semibold">€ 2387</p>
                            <p className="text-gray-500">Membership card</p>
                        </div>
                        <div className="text-center">
                            <p className="text-green-500 font-semibold">€ 853</p>
                            <p className="text-gray-500">Credit Card</p>
                        </div>
                    </div>
                </div>
            );
        }

        function SalesAnalysis() {
            return (
                <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Sales Analysis</h2>
                        <div className="flex items-center">
                            <p className="text-gray-500 mr-4">Day</p>
                            <p className="text-gray-500 mr-4">Week</p>
                            <p className="text-gray-500">Month</p>
                        </div>
                        <i className="fas fa-expand-arrows-alt text-gray-400"></i>
                    </div>
                    <div className="h-40">
                        <img src="https://placehold.co/400x160" alt="Sales Analysis Graph" className="w-full h-full object-cover" />
                    </div>
                </div>
            );
        }

        function InventoryLevel() {
            return (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Inventory Level</h2>
                        <i className="fas fa-expand-arrows-alt text-gray-400"></i>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-center">
                            <div className="w-10 h-32 bg-gray-200 mb-2"></div>
                            <p className="text-gray-500">25%</p>
                        </div>
                        <div className="text-center">
                            <div className="w-10 h-32 bg-gray-200 mb-2"></div>
                            <p className="text-gray-500">51%</p>
                        </div>
                        <div className="text-center">
                            <div className="w-10 h-32 bg-gray-200 mb-2"></div>
                            <p className="text-gray-500">63%</p>
                        </div>
                    </div>
                </div>
            );
        }

        function MachineStatus() {
            return (
                <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Machine Status</h2>
                        <i className="fas fa-expand-arrows-alt text-gray-400"></i>
                    </div>
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-gray-500">
                                <th className="py-2">Location</th>
                                <th className="py-2">Number</th>
                                <th className="py-2">Temperature</th>
                                <th className="py-2">Humidity</th>
                                <th className="py-2">Status</th>
                                <th className="py-2">Condition</th>
                                <th className="py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="py-2">Munich</td>
                                <td className="py-2">237886989</td>
                                <td className="py-2">-2°C to 5°C</td>
                                <td className="py-2">27</td>
                                <td className="py-2">Inactive</td>
                                <td className="py-2">Abnormal</td>
                                <td className="py-2 text-blue-500">View</td>
                            </tr>
                            <tr className="border-t">
                                <td className="py-2">Frankfurt</td>
                                <td className="py-2">878934489</td>
                                <td className="py-2">-1°C to 3°C</td>
                                <td className="py-2">24</td>
                                <td className="py-2">Active</td>
                                <td className="py-2">Abnormal</td>
                                <td className="py-2 text-blue-500">View</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

    export default App