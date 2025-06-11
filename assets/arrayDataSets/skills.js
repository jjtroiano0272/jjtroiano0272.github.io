const skills = [
	// Programming Languages
	{
		name: "C#",
		icon: "devicon-csharp-plain colored",
		category: "programming-languages",
	},
	{
		name: "C++",
		icon: "devicon-cplusplus-plain colored",
		category: "programming-languages",
	},
	{
		name: "PHP",
		icon: "devicon-php colored",
		category: "programming-languages",
	},
	{
		name: "Java",
		icon: "devicon-java-plain colored",
		category: "programming-languages",
	},
	{
		name: "M Power Query",
		icon: "devicon-powershell-plain colored",
		category: "dbms",
	},
	{
		name: "Javascript",
		icon: "devicon-javascript-plain colored",
		category: "programming-languages",
	},
	{
		name: "Typescript",
		icon: "devicon-typescript-plain colored",
		category: "programming-languages",
	},
	{
		name: "R",
		icon: "devicon-r-plain colored",
		category: "programming-languages",
	},
	{
		name: "Python",
		icon: "devicon-python-plain colored",
		category: "programming-languages",
	},

	// Web Design
	{ name: "CSS", icon: "devicon-css3-plain colored", category: "web-dev" },
	{
		name: "HTML",
		icon: "devicon-html5-plain-wordmark colored",
		category: "web-dev",
	},
	{
		name: "REST APIs",
		icon: "devicon-powershell-plain colored",
		category: "web-dev",
	},
	{
		name: "Bootstrap",
		icon: "devicon-bootstrap-plain colored",
		category: "web-dev",
	},
	{
		name: "Node.js",
		icon: "devicon-nodejs-plain colored",
		category: "web-dev",
	},
	{
		name: "Responsive WebDev",
		icon: "devicon-powershell-plain colored",
		category: "web-dev",
	},
	{
		name: "Three.js",
		icon: "devicon-threejs-original colored",
		category: "web-dev",
	},
	{
		name: "React",
		icon: "devicon-react-original colored",
		category: "web-dev",
	},
	{
		name: "Material UI Design",
		icon: "devicon-materialui-plain colored",
		category: "web-dev",
	},

	// Mobile Dev
	{
		name: "React Native",
		icon: "devicon-react-original colored",
		category: "mobile-dev",
	},
	{
		name: "React Native Reanimated",
		icon: "devicon-powershell-plain colored",
		category: "mobile-dev",
	},
	{
		name: "Expo",
		icon: "devicon-powershell-plain colored",
		category: "mobile-dev",
	},
	{
		name: "Xcode",
		icon: "devicon-xcode-plain colored",
		category: "mobile-dev",
	},

	// DBMS
	{ name: "MySQL", icon: "devicon-mysql-original colored", category: "dbms" },
	{
		name: "Postgres",
		icon: "devicon-postgresql-plain colored",
		category: "dbms",
	},
	{
		name: "Firebase",
		icon: "devicon-firebase-plain colored",
		category: "dbms",
	},
	{
		name: "Supabase",
		icon: "devicon-supabase-plain colored",
		category: "dbms",
	},
	{
		name: "MongoDB",
		icon: "devicon-mongodb-plain colored",
		category: "dbms",
	},

	// Business Analytics
	{
		name: "Microsoft Power BI",
		icon: "devicon-powershell-plain colored",
		category: "business-analytics",
	},
	{
		name: "TOAD Data Point",
		icon: "devicon-powershell-plain colored",
		category: "business-analytics",
	},

	// Game Dev
	{ name: "Unity", icon: "devicon-unity-plain colored", category: "game-dev" },

	// OS & Shell
	{ name: "Bash", icon: "devicon-bash-plain colored", category: "os" },
	{ name: "Linux", icon: "devicon-linux-plain colored", category: "os" },
	{ name: "Ubuntu", icon: "devicon-ubuntu-plain colored", category: "os" },
	{
		name: "Windows",
		icon: "devicon-windows11-original colored",
		category: "os",
	},
	{ name: "Mac", icon: "devicon-apple-original colored", category: "os" },
];

const container = document.getElementById("skills-container"); // Or any target element

skills.forEach((skill) => {
	const skillElement = document.createElement("div");
	skillElement.className = `isotope-item filter-${skill.category} col-xl-2 col-lg-4 col-md-6`;

	skillElement.innerHTML = `
  <div class="icon-box d-flex flex-column justify-content-center align-items-center text-center p-3 rounded h-100">
    <i class="${skill.icon}" style="font-size: 4rem; min-height: 3rem;"></i>
    <div class="icon-label mt-2">${skill.name}</div>
  </div>
`;
	container.appendChild(skillElement);
});
