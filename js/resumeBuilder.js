/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Tim");
 // var firstName = "Tim";
 // var age = 32;
 // console.log(firstName);

// var awesomeThoughts= "I am Tim and I am AWESOME!";

 //console.log(awesomeThoughts);
 // $("#main").append("Timothy Stewart");
 // [string].replace([old],[new])

 //var funThoughts = awesomeThoughts.replace("AWESOME","fun");

 //$("#main").append(funThoughts);

 var name = "Timothy Stewart";
 var formattedName = HTMLheaderName.replace("%data%",name);

 var role = "Web Developer";
 var formattedRole = HTMLheaderRole.replace("%data%",role);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 

 //var skills = ["HTML5", "CSS","JAVASCRIPT"];

 var bio = {
 	"name" : "Timothy Stewart",
 	"role" : "Web Developer",
 	"contacts" : {
 		"mobile" : "610-213-7537",
 		"email" : "qu0est@gmail.com",
 		"github" : "qu0est",
 		"location" : "Orlando, FL",
	},
 	"welcomeMsg" : "YOUR TIME IS VALUED AND VERY MUCH APPRECIATED",
 	"skills" : ["HTML5", "CSS","JAVASCRIPT","CUSTOMER SERVICE","INTERPERSONAL SKILLS",
 	"SOCIAL SECURITY POLICY", "SOCIAL SECURITY PROGRAMS", "INTERVIEWING SKILLS",
 	  "RESEARCHING SKILLS", "WRITING SKILLS"],
 	"bioPic" : "images/ME.jpg"
 };

var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);

 $("#topContacts").append(formattedMobile);
 $("#topContacts").append(formattedEmail);
 $("#topContacts").append(formattedGithub);
 $("#topContacts").append(formattedLocation);
 $("#footerContacts").append(formattedMobile);
 $("#footerContacts").append(formattedEmail);
 $("#footerContacts").append(formattedGithub);
 $("#footerContacts").append(formattedLocation);
 $("#header").append(formattedWelcomeMsg);
 $("#header").append(formattedBioPic);

  if(bio.skills.length> 0) {

 	$("#header").append(HTMLskillsStart);

 	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);

 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%",bio.skills[5]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%",bio.skills[6]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%",bio.skills[7]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%",bio.skills[8]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%",bio.skills[9]);
 	$("#skills").append(formattedSkill);

 }

 var work = {
 	"jobs": [{
 		"employer": "Social Security Administration",
 		"title": "Technical Expert",
 		"location": "Orlando, FL",
 		"dates": "Feb 2016 - Current",
 		"description": "Review adjudicators work by making sure all disability cases follow congressional policy. Respond to congressional inquiries. Assist adjudicators with difficult cases. Consult with management on best work practices. Design work flow for adjudicators.",
 		"url": "https://www.usajobs.gov/GetJob/ViewDetails/428450100"
 	},	
 	{
 		"employer": "Social Security Administration",
 		"title": "Claims Representative",
 		"location": "Phoenix, AZ",
 		"dates": "April 2008 - Feb 2016",
 		"description": "Interview and assist individuals applying for disability benefits. Adjudicate disability approval cases. Follow congressional policy to determine payment for disabled individuals.",
 		"url": "https://www.socialsecurity.gov/kc/jobs_position.htm"
 	},
 	{
 		"employer": "3TV Belo Corporation",
 		"title": "Assignment Editor",
 		"location": "Phoenix, AZ",
 		"dates": "May 2006 - April 2008",
 		"description": "Assign news assignments to photographers and news reporters. Conduct meetings with managers, producers, and reporters regarding what news to cover. Manage and appropriate resources for photographers and reporters.",
 		"url": "http://asoundidea.com/personal/OnAssignment.html"
 	}]	
 };

function displayWork() {
	for (job in work.jobs){
	//create new div for work experience	
	$("#workExperience").append(HTMLworkStart);
	//concat employer and title 
	var formattedEmployer = HTMLworkEmployer.replace
	("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace
	("%data%", work.jobs[job].title).replace("%url%", work.jobs[job].url);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(
		formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace(
		"%data%", work.jobs[job].dates);

	$(".work-entry:last").append(
		formattedDates);

	var formattedDescription = HTMLworkDates.replace(
		"%data%", work.jobs[job].description);

	$(".work-entry:last").append(
		formattedDescription);

	}
}

displayWork();
 
 
 var education ={
	"schools": [{
		"name": "Arizona State University",
		"location": "Tempe, AZ, US",
		"major": "Journalism and Mass Communications",
		"degree": "Bachelor of Arts",
		"dates": "2003-2006"
	}],
	"onlineCourses": [{
		"title": "Front End Nanodegree",
		"school": "Udacity",
		"dates": 2016,
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},
	{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": 2015,
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},
	{
		"title": "Responsive Web Design Fundamentals",
		"school": "Udacity",
		"dates": 2015,
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},
	{
		"title": "Responsive Images",
		"school": "Udacity",
		"dates": 2015,
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},
	{
		"title": "How to use Git and Github",
		"school": "Udacity",
		"dates": 2015,
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},
	{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": 2015,
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},
	{
		"title": "Intro to jQuery",
		"school": "Udacity",
		"dates": 2015,
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}]
};

education.display = function() {

	$("#education").append(HTMLschoolStart);
	for (var school in education.schools) {
		 formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		 formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		 formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
		 formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
		 formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
	}

	$(".education.entry").append(HTMLonlineClasses);
		for(var webclass in education.onlineCourses) {
			formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[webclass].title)
			.replace("%url%",education.onlineCourses[webclass].url);
			formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[webclass].school);
			formattedOnlineSchoolTitle = formattedOnlineTitle + " " + formattedOnlineSchool;
			formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[webclass].dates);
			

			
			$(".education-entry:last").append(formattedOnlineSchoolTitle);
			$(".education-entry:last").append(formattedOnlineDates);
			


		}
};

education.display();	

	
var projects ={
	"projects": [{
		"title":"Project1",
		"dates":"Dec 2015",
		"description":"HTML, CSS and Responsive skills development",
		"images":"images/project1_medium.png",
		"url":"TOPLIST/PROJECT1.html"
	}]
};
 		
function displayProjects(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace
		("%url%", projects.projects[project].url);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);

		$(".project-entry:last").append(formattedImage);
	}
}	

function inName(name){
  var name = bio.name;
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
  name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}
	
 
displayProjects();

$("#name").append(internationalizeButton);
$("#mapDiv").append(googleMap);



