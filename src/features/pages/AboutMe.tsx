function AboutMe() {
	return (
		<div className="min-h-screen flex items-center justify-center px-6 py-20">
			<div className="max-w-4xl mx-auto text-center">
				<div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-12">
					<h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-8">
						About Me
					</h1>
					<div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-8"></div>
					<p className="text-lg text-slate-600 leading-relaxed mb-8">
						This page is currently under development. I'm crafting a comprehensive story about my journey, 
						passion for technology, and the experiences that shaped my career as a Full Stack Developer.
					</p>
					<div className="flex justify-center space-x-4">
						<div className="w-4 h-4 bg-teal-500 rounded-full animate-bounce"></div>
						<div className="w-4 h-4 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
						<div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
