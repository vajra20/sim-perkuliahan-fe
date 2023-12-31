import React from "react";
import NavbarDashboard from "../../components/NavbarDashboard";
import Time from "../../components/Time";

// Icons
import { Icon } from "@iconify/react";
import saveSolid from "@iconify/icons-la/save-solid";

const Index = () => {
	return (
		<div className="w-full h-full">
			<NavbarDashboard />

			<div className="md:px-7 lg:py-6 android:px-3">
				<div className="lg:grid md:flex md:flex-col lg:gap-0 xl:gap-10 grid-cols-dashboard mb-2">
					<div className="md:px-0 lg:pl-0 lg:pr-10 android:px-0">
						<div className="flex justify-start my-6">
							<span className="lg:text-3xl font-normal sm:text-2xl android:text-center android:text-2xl text-black">
								Halo! Selamat datang di
								<span className="font-bold text-black">
									{" "}
									Beranda
								</span>
								.
							</span>
						</div>

						<div className="w-full flex justify-center sm:gap-10 android:gap-5 sm:mb-0 android:mb-10 android:flex-row">
							<div className="flex flex-col lg:max-w-sm android:max-w-full w-full">
								<div className="sm:p-6 android:p-2 border border-dark-gray bg-[#FFC80466] sm:rounded-t-3xl android:rounded-t-xl justify-center flex text-center h-1/2 items-center">
									<span className="text-black font-medium sm:text-2xl android:text-lg">
										Belum Selesai
									</span>
								</div>
								<div className="bg-white border sm:rounded-b-3xl android:rounded-b-xl border-dark-gray border-t-0 flex justify-center items-center sm:h-32 android:h-24">
									<span className="text-red sm:text-6xl android:text-4xl font-medium">
										2
									</span>
								</div>
							</div>
							<div className="flex flex-col lg:max-w-sm android:max-w-full w-full">
								<div className="sm:p-6 android:p-2 border border-dark-gray bg-[#45FF044D] sm:rounded-t-3xl android:rounded-t-xl justify-center flex h-1/2 items-center">
									<span className="text-black font-medium sm:text-2xl android:text-lg">
										Selesai
									</span>
								</div>
								<div className="bg-white border sm:rounded-b-3xl android:rounded-b-xl border-dark-gray border-t-0 flex justify-center items-center sm:h-32 android:h-24">
									<span className="text-black sm:text-6xl android:text-4xl font-medium">
										12
									</span>
								</div>
							</div>
						</div>

						<div className=" w-full sm:my-6 android:mb-10">
							<div className="bg-[#AC98F933] border border-dark-gray sm:rounded-3xl android:rounded-2xl sm:py-6 sm:px-8 android:py-4 android:px-6">
								<div className="flex items-center justify-between gap-2">
									<span className="text-dashboard-line sm:text-2xl android:text-base sm:font-medium android:font-bold text-center">
										Download PDF KRS disini!
									</span>
									<Icon
										icon={saveSolid}
										className="sm:block android:hidden text-black android:w-10 android:h-10 stroke-1"
									></Icon>
								</div>
							</div>
						</div>

						<div className="flex flex-col sm:gap-3 android:gap-1.5">
							<span className="text-black font-medium sm:text-3xl android:text-2xl">
								Galeri
							</span>
							<div className="android:mb-6 lg:mb-0">
								<img
									src="/public/galeri.png"
									alt=""
									className="sm:rounded-3xl android:rounded-2xl h-full max-h-64 w-full object-cover"
								></img>
							</div>
						</div>
					</div>

					<div className="android:px-5 md:px-10 lg:px-0">
						<div className="flex flex-col gap-6 items-center">
							<Time />
							<div className="flex lg:flex-wrap flex-row gap-2 w-full md:justify-center sm:justify-between android:justify-center android:flex-nowrap">
								<div className="border border-dashboard-line bg-absent-color android:p-1.5 sm:p-3 android:w-10 sm:w-14  flex justify-center items-center sm:rounded-xl android:rounded-lg">
									<span className="font-medium text-center text-black sm:text-2xl android:text-lg">
										M
									</span>
								</div>
								<div className="border border-dashboard-line bg-absent-color android:p-1.5 sm:p-3 android:w-10 sm:w-14  flex justify-center items-center sm:rounded-xl android:rounded-lg">
									<span className="font-medium text-center text-black sm:text-2xl android:text-lg">
										S
									</span>
								</div>
								<div className="border border-dashboard-line bg-absent-color android:p-1.5 sm:p-3 android:w-10 sm:w-14  flex justify-center items-center sm:rounded-xl android:rounded-lg">
									<span className="font-medium text-center text-black sm:text-2xl android:text-lg">
										S
									</span>
								</div>
								<div className="border border-dashboard-line bg-absent-green-color android:p-1.5 sm:p-3 android:w-10 sm:w-14  flex justify-center items-center sm:rounded-xl android:rounded-lg">
									<span className="font-medium text-center text-black sm:text-2xl android:text-lg">
										R
									</span>
								</div>
								<div className="border border-dashboard-line bg-absent-color android:p-1.5 sm:p-3 android:w-10 sm:w-14 flex justify-center items-center sm:rounded-xl android:rounded-lg">
									<span className="font-medium text-center text-black sm:text-2xl android:text-lg">
										K
									</span>
								</div>
								<div className="border border-dashboard-line bg-absent-color android:p-1.5 sm:p-3 android:w-10 sm:w-14 flex justify-center items-center sm:rounded-xl android:rounded-lg">
									<span className="font-medium text-center text-black sm:text-2xl android:text-lg">
										J
									</span>
								</div>
							</div>

							<div className="flex flex-col gap-3 w-full android:mb-10 lg:mb-0">
								<div className="w-full border-black border-b ">
									<span className=" font-medium sm:text-3xl android:text-2xl text-black">
										List Acara
									</span>
								</div>

								<div className="bg-white rounded-lg text-black p-3 hover:shadow-md hover:shadow-gray-400 transition-shadow cursor-pointer">
									<div className="flex flex-row gap-3 sm:mb-3 android:mb-0 items-center">
										<div className="bg-event-color w-12 h-12 rounded-md sm:block android:hidden lg:hidden xl:block"></div>
										<div className="flex justify-between w-full sm:items-center android:items-left android:gap-2 sm:gap-0 sm:flex-row android:flex-col">
											<div className="flex flex-col gap-0 justify-between">
												<span className="text-xs font-medium">
													Aula Kampus
												</span>
												<span className="sm:text-xl android:text-lg font-medium">
													Lomba E-Sport
												</span>
											</div>
											<div className="bg-event-color sm:rounded-full android:rounded-lg sm:px-1.5 android:px-3 sm:py-0.5 android:py-1 h-fit text-center">
												<span className=" sm:text-base android:text-sm text-black font-normal ">
													On Progress
												</span>
											</div>
										</div>
									</div>
									<div className="sm:flex md:flex-row lg:flex-col xl:flex-row lg:gap-1 xl:gap-4 android:flex-col md:gap-4 android:gap-1 android:mt-3 md:mt-0 items-center mb-3 android:hidden ">
										<span className="text-xs font-medium text-black">
											Start Date : 13/10/2023 || 10:00:00
										</span>
										<span className="text-xs font-medium text-black">
											End Date : 14/10/2023 || 17:00:00
										</span>
									</div>
								</div>

								<div className="bg-white rounded-lg text-black p-3 hover:shadow-md hover:shadow-gray-400 transition-shadow cursor-pointer">
									<div className="flex flex-row gap-3 sm:mb-3 android:mb-0 items-center">
										<div className="bg-event-color w-12 h-12 rounded-md sm:block android:hidden lg:hidden xl:block"></div>
										<div className="flex justify-between w-full sm:items-center android:items-left android:gap-2 sm:gap-0 sm:flex-row android:flex-col">
											<div className="flex flex-col gap-0 justify-between">
												<span className="text-xs font-medium">
													Aula Kampus
												</span>
												<span className="sm:text-xl android:text-lg font-medium">
													Lomba E-Sport
												</span>
											</div>
											<div className="bg-event-color sm:rounded-full android:rounded-lg sm:px-1.5 android:px-3 sm:py-0.5 android:py-1 h-fit text-center">
												<span className=" sm:text-base android:text-sm text-black font-normal ">
													On Progress
												</span>
											</div>
										</div>
									</div>
									<div className="sm:flex md:flex-row lg:flex-col xl:flex-row lg:gap-1 xl:gap-4 android:flex-col md:gap-4 android:gap-1 android:mt-3 md:mt-0 items-center mb-3 android:hidden ">
										<span className="text-xs font-medium text-black">
											Start Date : 13/10/2023 || 10:00:00
										</span>
										<span className="text-xs font-medium text-black">
											End Date : 14/10/2023 || 17:00:00
										</span>
									</div>
								</div>

								<div className="bg-white rounded-lg text-black p-3 hover:shadow-md hover:shadow-gray-400 transition-shadow cursor-pointer">
									<div className="flex flex-row gap-3 sm:mb-3 android:mb-0 items-center">
										<div className="bg-event-color w-12 h-12 rounded-md sm:block android:hidden lg:hidden xl:block"></div>
										<div className="flex justify-between w-full sm:items-center android:items-left android:gap-2 sm:gap-0 sm:flex-row android:flex-col">
											<div className="flex flex-col gap-0 justify-between">
												<span className="text-xs font-medium">
													Aula Kampus
												</span>
												<span className="sm:text-xl android:text-lg font-medium">
													Lomba E-Sport
												</span>
											</div>
											<div className="bg-event-color sm:rounded-full android:rounded-lg sm:px-1.5 android:px-3 sm:py-0.5 android:py-1 h-fit text-center">
												<span className=" sm:text-base android:text-sm text-black font-normal ">
													On Progress
												</span>
											</div>
										</div>
									</div>
									<div className="sm:flex md:flex-row lg:flex-col xl:flex-row lg:gap-1 xl:gap-4 android:flex-col md:gap-4 android:gap-1 android:mt-3 md:mt-0 items-center mb-3 android:hidden ">
										<span className="text-xs font-medium text-black">
											Start Date : 13/10/2023 || 10:00:00
										</span>
										<span className="text-xs font-medium text-black">
											End Date : 14/10/2023 || 17:00:00
										</span>
									</div>
								</div>

								<div className="bg-white rounded-lg text-black p-3 hover:shadow-md hover:shadow-gray-400 transition-shadow cursor-pointer">
									<div className="flex flex-row gap-3 sm:mb-3 android:mb-0 items-center">
										<div className="bg-event-color w-12 h-12 rounded-md sm:block android:hidden lg:hidden xl:block"></div>
										<div className="flex justify-between w-full sm:items-center android:items-left android:gap-2 sm:gap-0 sm:flex-row android:flex-col">
											<div className="flex flex-col gap-0 justify-between">
												<span className="text-xs font-medium">
													Aula Kampus
												</span>
												<span className="sm:text-xl android:text-lg font-medium">
													Lomba E-Sport
												</span>
											</div>
											<div className="bg-event-color sm:rounded-full android:rounded-lg sm:px-1.5 android:px-3 sm:py-0.5 android:py-1 h-fit text-center">
												<span className=" sm:text-base android:text-sm text-black font-normal ">
													On Progress
												</span>
											</div>
										</div>
									</div>
									<div className="sm:flex md:flex-row lg:flex-col xl:flex-row lg:gap-1 xl:gap-4 android:flex-col md:gap-4 android:gap-1 android:mt-3 md:mt-0 items-center mb-3 android:hidden ">
										<span className="text-xs font-medium text-black">
											Start Date : 13/10/2023 || 10:00:00
										</span>
										<span className="text-xs font-medium text-black">
											End Date : 14/10/2023 || 17:00:00
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
