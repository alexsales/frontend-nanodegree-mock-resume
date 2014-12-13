var bio = {};
var work = {};
var projects = {};
var education = {};

bio = {
	"name" : name,
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "323-213-3100",
		"email" : "alexsales@sbcglobal.net",
		//"twitter" : "@johndoe",
		"github" : "alexsales",
		"blog" : "http://www.tumblr.com/johndoe",
		"location" : "Los Angeles"
	},
	"picture URL" : "images/fry.jpg",
	"welcome message" : "front-end web developer in the los angeles area",
	"skills" : ["HTML5", "CSS3", "Git", "JavaScript", "jQuery", "Responsive Web Design", "UX/UI"],	
	"display" : function() {

		var name = "Alex Sales";
		var formattedName = "";
		var formattedRole = "";
		var formattedMobile = "";
		var formattedEmail = "";
		var formattedGitHub = "";
		var formattedBlog = "";
		var formattedLocation = "";
		var formattedPic = "";
		var formattedWelcome = "";
		var formattedSkills = "";

		if (bio.name != false) {
			formattedName = HTMLheaderName.replace("%data%", bio.name);
			formattedRole = HTMLheaderRole.replace("%data%", bio.role);
			formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
			formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
			formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
			formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
			formattedPic = HTMLbioPic.replace("%data%", bio["picture URL"]);
			formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio["welcome message"]);

			$("#header").prepend(formattedName + formattedRole);
			$("#topContacts").append(formattedMobile)
				.append(formattedEmail)
				.append(formattedGitHub)
				.append(formattedBlog)
				.append(formattedLocation);
			$("#header").append(formattedWelcome + formattedPic);
		}
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; i++) {
			formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkills);
		}	
		console.log("skills all set");
	}

		console.log("bio added");
	}
};

work = {
	"jobs" : [
		{
			"employer" : "Creative Labs",
			"title" : "Web Developer",
			"location" : "Los Angeles",
			"years" : "September 2014 - Present",
			"description" : "Super cool in-house ninja."
		},
		{
			"employer" : "Web Video Crew",
			"title" : "Web Developer",
			"location" : "Los Angeles",
			"years" : "June 2013 - September 2014",
			"description" : "Super cool in-house ninja."
		}
	],
	"display" : function() {
		var formattedEmployer = "";
		var formattedTitle = "";
		var formattedCityEmployer = "";
		var formattedYearsEmployer = "";
		var formattedDescription = "";

		if (work.jobs.length > 0) {
			for (job in work.jobs) {
				formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
				formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				formattedCityEmployer = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				formattedYearsEmployer = HTMLworkDates.replace("%data%", work.jobs[job].years);
				formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
				$("#workExperience").append(HTMLworkStart);
				$(".work-entry:last").append(formattedEmployer + " " + formattedTitle)
					.append(formattedCityEmployer)
					.append(formattedYearsEmployer)
					.append(formattedDescription);

			}
		}
	}
};

projects = {
	portfolio : [
		{
			"title" : "Tech Startup",
			"dates": "June 2013",
			"description" : "mockup and coding for online startup",
			"image1" : "images/197x148.gif",
			"image2" : "images/197x148.gif"

		},
		{
			"title" : "UI Redesign",
			"dates": "September 2014",
			"description" : "national hair and nail salon chain, corporate website",
			"image1" : "images/197x148.gif",
			"image2" : "images/197x148.gif"
		}
	],
	display : function() {
		var formattedProjectTitle = "";
		var formattedProjectDates = "";
		var formattedProjectDescription = "";
		var formattedProjectImage1 = "";
		var formattedProjectImage2 = "";

		if (projects.portfolio.length > 0) {
			for (project in projects.portfolio) {
				formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.portfolio[project].title);
				formattedProjectDates = HTMLprojectDates.replace("%data%", projects.portfolio[project].dates);
				formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.portfolio[project].description);
				formattedProjectImage1 = HTMLprojectImage.replace("%data%", projects.portfolio[project].image1);
				formattedProjectImage2 = HTMLprojectImage.replace("%data%", projects.portfolio[project].image2);

				$("#projects").append(HTMLprojectStart);
				$(".project-entry:last").append(formattedProjectTitle)
					.append(formattedProjectDates)
					.append(formattedProjectDescription)
					.append(formattedProjectImage1)
					.append(formattedProjectImage2);
			}

			console.log("all projects listed");
		}
	}
};

education = {
	"schools" : [
		{
			"name" : "University of Denver",
			"years" : "2006-2008",
			"degree" : "MSCIT",
			"location" : "Denver, CO"
		},
		{
			"name" : "University of California, Los Angeles",
			"years" : "1998-2003",
			"degree" : "BA",
			"location" : "Los Angeles, CA"
		}
	],
	"online" : [
		{
			"name" : "Udacity",
			"courses" : ["JavaScript Basics", "How to Use Git and GitHub"]
		}
	],
	"display" : function() {
		var formattedSchool = "";
		var formattedYearsSchool = "";
		var formattedCitySchool = "";

		if (education.schools.length > 0) {
			for (school in education.schools) {
				formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
				formattedYearsSchool = HTMLschoolDates.replace("%data%", education.schools[school].years);
				formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				formattedCitySchool = HTMLschoolLocation.replace("%data%", education.schools[school].location);

				$("#education").append(HTMLschoolStart);
				$(".education-entry:last").append(formattedSchool)
					.append(formattedYearsSchool)
					.append(formattedDegree)
					.append(formattedCitySchool);
			}
		}
	}
};

//function for internationalize name button
function inName(aName) {
	var namesArray = aName.split(" ");
	console.log(namesArray);
	var firstName = namesArray[0].toLowerCase();
	var lastName = namesArray[1].toUpperCase();

	firstName = firstName.replace(firstName.charAt(0), firstName.charAt(0).toUpperCase());

	name = firstName + " " + lastName;
	console.log(name);

	return name;
}

//user clicks and tracking
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

bio.display();
work.display();
education.display();
projects.display();

