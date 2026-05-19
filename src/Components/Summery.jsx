import React from "react";

const Summery = ({ Icon, title, figures }) => {
	return (
		<div className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-2xl p-6 shadow-lg min-w-0 overflow-hidden">
			<div className="flex items-center gap-4">
				<div className="p-3 bg-zinc-800 rounded-xl text-emerald-500 shrink-0">
					<Icon size={24} />
				</div>
				<h2 className="text-zinc-400 text-sm font-medium tracking-wide uppercase truncate">
					{title}
				</h2>
			</div>
			<p className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 mt-5 truncate">
				$ {figures}
			</p>
		</div>
	);
};

export default Summery;
